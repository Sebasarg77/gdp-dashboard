// ============================================
// CÓDIGO JAVASCRIPT PARA FIREBASE Y PERFIL
// Agregar dentro de la etiqueta <script> existente en landing/index.html
// ============================================

// ==================== CONFIGURACIÓN DE FIREBASE ====================

// IMPORTANTE: Reemplaza estos valores con tu configuración real de Firebase
const firebaseConfig = {
    apiKey: "TU_API_KEY_AQUI",
    authDomain: "tu-proyecto.firebaseapp.com",
    projectId: "tu-proyecto-id",
    storageBucket: "tu-proyecto.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdefgh"
};

// Inicializar Firebase
let firebaseApp, auth, db, storage;
let currentUser = null;

function initFirebase() {
    try {
        firebaseApp = firebase.initializeApp(firebaseConfig);
        auth = firebase.auth();
        db = firebase.firestore();
        storage = firebase.storage();
        
        // Escuchar cambios en la autenticación
        auth.onAuthStateChanged(handleAuthStateChange);
        
        console.log("✅ Firebase inicializado correctamente");
    } catch (error) {
        console.error("❌ Error al inicializar Firebase:", error);
    }
}

// Llamar a initFirebase cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initFirebase();
});

// ==================== AUTENTICACIÓN ====================

function handleAuthStateChange(user) {
    if (user) {
        currentUser = user;
        loadUserProfile(user.uid);
        updateUIForLoggedInUser(user);
    } else {
        currentUser = null;
        showLandingPage();
    }
}

async function loginWithEmail(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        console.log("✅ Login exitoso:", userCredential.user.email);
        
        // Actualizar último login
        await db.collection('users').doc(userCredential.user.uid).update({
            lastLogin: firebase.firestore.FieldValue.serverTimestamp()
        });
        
        showDashboard();
    } catch (error) {
        console.error("❌ Error al iniciar sesión:", error);
        showAlert(getErrorMessage(error.code), 'error');
    }
}

async function registerWithEmail(event) {
    event.preventDefault();
    
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const name = document.getElementById('registerName').value;
    
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        
        // Crear documento de usuario en Firestore
        await db.collection('users').doc(user.uid).set({
            email: email,
            name: name,
            role: 'student',
            phone: '',
            whatsapp: '',
            company: '',
            position: '',
            country: '',
            city: '',
            bio: '',
            profilePicture: '',
            created_at: firebase.firestore.FieldValue.serverTimestamp(),
            updated_at: firebase.firestore.FieldValue.serverTimestamp(),
            lastLogin: firebase.firestore.FieldValue.serverTimestamp()
        });
        
        console.log("✅ Usuario registrado:", email);
        showDashboard();
    } catch (error) {
        console.error("❌ Error al registrar:", error);
        showAlert(getErrorMessage(error.code), 'error');
    }
}

function handleLogout() {
    if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
        auth.signOut().then(() => {
            console.log("✅ Sesión cerrada");
            showLandingPage();
        }).catch((error) => {
            console.error("❌ Error al cerrar sesión:", error);
        });
    }
}

function updateUIForLoggedInUser(user) {
    // Actualizar avatar y nombre en navbar
    const userInfoSpan = document.querySelector('.user-info span');
    const userAvatar = document.querySelector('.user-avatar');
    
    db.collection('users').doc(user.uid).get().then((doc) => {
        if (doc.exists) {
            const userData = doc.data();
            if (userInfoSpan) userInfoSpan.textContent = userData.name || user.email;
            if (userAvatar) {
                if (userData.profilePicture) {
                    userAvatar.innerHTML = `<img src="${userData.profilePicture}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`;
                } else {
                    userAvatar.textContent = (userData.name || user.email).charAt(0).toUpperCase();
                }
            }
        }
    });
}

function getErrorMessage(errorCode) {
    const messages = {
        'auth/email-already-in-use': 'Este email ya está registrado',
        'auth/invalid-email': 'Email inválido',
        'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres',
        'auth/user-not-found': 'Usuario no encontrado',
        'auth/wrong-password': 'Contraseña incorrecta',
        'auth/too-many-requests': 'Demasiados intentos. Intenta más tarde'
    };
    return messages[errorCode] || 'Error de autenticación';
}

// ==================== PERFIL DE USUARIO ====================

async function showProfile() {
    if (!currentUser) {
        showAlert('Debes iniciar sesión primero', 'error');
        return;
    }
    
    const modal = document.getElementById('profileModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    await loadUserProfile(currentUser.uid);
}

function closeProfile() {
    const modal = document.getElementById('profileModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

async function loadUserProfile(userId) {
    try {
        const userDoc = await db.collection('users').doc(userId).get();
        
        if (userDoc.exists) {
            const userData = userDoc.data();
            
            // Cargar datos en el formulario
            document.getElementById('profileName').value = userData.name || '';
            document.getElementById('profileEmail').value = userData.email || '';
            document.getElementById('profilePhone').value = userData.phone || '';
            document.getElementById('profileWhatsapp').value = userData.whatsapp || '';
            document.getElementById('profileCompany').value = userData.company || '';
            document.getElementById('profilePosition').value = userData.position || '';
            document.getElementById('profileCountry').value = userData.country || '';
            document.getElementById('profileCity').value = userData.city || '';
            document.getElementById('profileBio').value = userData.bio || '';
            
            // Actualizar displays
            document.getElementById('profileNameDisplay').textContent = userData.name || 'Usuario';
            document.getElementById('profileEmailDisplay').textContent = userData.email || '';
            
            // Cargar foto de perfil
            if (userData.profilePicture) {
                document.getElementById('profileImage').src = userData.profilePicture;
                document.getElementById('profileImage').style.display = 'block';
                document.getElementById('profileInitials').style.display = 'none';
            } else {
                document.getElementById('profileInitials').textContent = (userData.name || 'U').charAt(0).toUpperCase();
                document.getElementById('profileInitials').style.display = 'flex';
                document.getElementById('profileImage').style.display = 'none';
            }
            
            // Cargar estadísticas
            await loadUserStats(userId);
        }
    } catch (error) {
        console.error("❌ Error al cargar perfil:", error);
        showAlert('Error al cargar perfil', 'error');
    }
}

async function saveProfile(event) {
    event.preventDefault();
    
    if (!currentUser) return;
    
    const profileData = {
        name: document.getElementById('profileName').value,
        phone: document.getElementById('profilePhone').value,
        whatsapp: document.getElementById('profileWhatsapp').value,
        company: document.getElementById('profileCompany').value,
        position: document.getElementById('profilePosition').value,
        country: document.getElementById('profileCountry').value,
        city: document.getElementById('profileCity').value,
        bio: document.getElementById('profileBio').value,
        updated_at: firebase.firestore.FieldValue.serverTimestamp()
    };
    
    try {
        await db.collection('users').doc(currentUser.uid).update(profileData);
        console.log("✅ Perfil actualizado");
        showAlert('Perfil actualizado exitosamente', 'success');
        updateUIForLoggedInUser(currentUser);
    } catch (error) {
        console.error("❌ Error al actualizar perfil:", error);
        showAlert('Error al guardar cambios', 'error');
    }
}

async function uploadProfilePicture(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    // Validar tamaño (máx 2MB)
    if (file.size > 2 * 1024 * 1024) {
        showAlert('La imagen no debe superar 2MB', 'error');
        return;
    }
    
    // Validar tipo
    if (!file.type.startsWith('image/')) {
        showAlert('Solo se permiten imágenes', 'error');
        return;
    }
    
    try {
        // Mostrar loading
        const profileImage = document.getElementById('profileImage');
        profileImage.style.opacity = '0.5';
        
        // Subir a Firebase Storage
        const storageRef = storage.ref(`profile_pictures/${currentUser.uid}/${Date.now()}_${file.name}`);
        const snapshot = await storageRef.put(file);
        const downloadURL = await snapshot.ref.getDownloadURL();
        
        // Actualizar Firestore
        await db.collection('users').doc(currentUser.uid).update({
            profilePicture: downloadURL,
            updated_at: firebase.firestore.FieldValue.serverTimestamp()
        });
        
        // Actualizar UI
        profileImage.src = downloadURL;
        profileImage.style.display = 'block';
        profileImage.style.opacity = '1';
        document.getElementById('profileInitials').style.display = 'none';
        
        console.log("✅ Foto de perfil actualizada");
        showAlert('Foto de perfil actualizada', 'success');
        updateUIForLoggedInUser(currentUser);
    } catch (error) {
        console.error("❌ Error al subir foto:", error);
        showAlert('Error al subir foto', 'error');
        profileImage.style.opacity = '1';
    }
}

async function loadUserStats(userId) {
    try {
        // Obtener progreso de cursos
        const progressSnapshot = await db.collection('progress').doc(userId).collection('courses').get();
        
        let totalProgress = 0;
        let completedCourses = 0;
        
        progressSnapshot.forEach(doc => {
            const courseData = doc.data();
            totalProgress += courseData.progress || 0;
            if (courseData.progress === 100) completedCourses++;
        });
        
        const coursesCount = progressSnapshot.size;
        const avgProgress = coursesCount > 0 ? Math.round(totalProgress / coursesCount) : 0;
        
        document.getElementById('profileCoursesCount').textContent = coursesCount;
        document.getElementById('profileCertificatesCount').textContent = completedCourses;
        document.getElementById('profileProgressAvg').textContent = avgProgress + '%';
    } catch (error) {
        console.error("❌ Error al cargar estadísticas:", error);
    }
}

// ==================== PANEL DE ADMINISTRADOR ====================

async function openAdminDashboard() {
    if (!currentUser) {
        showAlert('Debes iniciar sesión primero', 'error');
        return;
    }
    
    // Verificar si es admin
    const userDoc = await db.collection('users').doc(currentUser.uid).get();
    if (!userDoc.exists || userDoc.data().role !== 'admin') {
        showAlert('No tienes permisos de administrador', 'error');
        return;
    }
    
    const modal = document.getElementById('adminDashboardModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    await loadAdminData();
}

function closeAdminDashboard() {
    const modal = document.getElementById('adminDashboardModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

async function loadAdminData() {
    try {
        const usersSnapshot = await db.collection('users').get();
        const users = [];
        
        usersSnapshot.forEach(doc => {
            users.push({
                id: doc.id,
                ...doc.data()
            });
        });
        
        // Actualizar estadísticas
        document.getElementById('adminTotalUsers').textContent = users.length;
        
        // Usuarios activos (con login en últimos 7 días)
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        const activeUsers = users.filter(u => {
            if (!u.lastLogin) return false;
            const lastLogin = u.lastLogin.toDate();
            return lastLogin > sevenDaysAgo;
        });
        document.getElementById('adminActiveUsers').textContent = activeUsers.length;
        
        // Nuevos usuarios (últimos 7 días)
        const newUsers = users.filter(u => {
            if (!u.created_at) return false;
            const createdAt = u.created_at.toDate();
            return createdAt > sevenDaysAgo;
        });
        document.getElementById('adminNewUsers').textContent = newUsers.length;
        
        // Renderizar lista de usuarios
        renderAdminUsersList(users);
    } catch (error) {
        console.error("❌ Error al cargar datos de admin:", error);
        showAlert('Error al cargar datos', 'error');
    }
}

function renderAdminUsersList(users) {
    const container = document.getElementById('adminUsersList');
    
    if (users.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666;">No hay usuarios registrados</p>';
        return;
    }
    
    container.innerHTML = users.map(user => `
        <div class="admin-user-card">
            <div class="admin-user-header">
                <div class="admin-user-avatar">
                    ${user.profilePicture ? 
                        `<img src="${user.profilePicture}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">` :
                        (user.name || user.email).charAt(0).toUpperCase()
                    }
                </div>
                <div style="flex: 1;">
                    <h4 style="margin: 0;">${user.name || 'Sin nombre'}</h4>
                    <p style="margin: 0; color: #666; font-size: 0.85rem;">${user.email}</p>
                </div>
                <span class="role-badge role-${user.role}">${user.role === 'admin' ? 'ADMIN' : 'ESTUDIANTE'}</span>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; font-size: 0.85rem; color: #666;">
                <div>📱 ${user.phone || 'N/A'}</div>
                <div>💼 ${user.company || 'N/A'}</div>
                <div>🌎 ${user.country || 'N/A'}</div>
                <div>📅 ${user.created_at ? formatDate(user.created_at.toDate()) : 'N/A'}</div>
            </div>
            
            <div style="margin-top: 1rem; display: flex; gap: 0.5rem;">
                <button class="btn btn-outline" style="font-size: 0.8rem; padding: 6px 12px;" onclick="viewUserDetails('${user.id}')">
                    👁️ Ver
                </button>
                <button class="btn btn-outline" style="font-size: 0.8rem; padding: 6px 12px;" onclick="editUserRole('${user.id}', '${user.role}')">
                    ⚙️ Rol
                </button>
            </div>
        </div>
    `).join('');
}

async function viewUserDetails(userId) {
    try {
        const userDoc = await db.collection('users').doc(userId).get();
        if (!userDoc.exists) return;
        
        const user = userDoc.data();
        alert(`
📋 DETALLES DEL USUARIO

Nombre: ${user.name || 'N/A'}
Email: ${user.email}
Teléfono: ${user.phone || 'N/A'}
WhatsApp: ${user.whatsapp || 'N/A'}
Empresa: ${user.company || 'N/A'}
Cargo: ${user.position || 'N/A'}
País: ${user.country || 'N/A'}
Ciudad: ${user.city || 'N/A'}
Rol: ${user.role}
Creado: ${user.created_at ? formatDate(user.created_at.toDate()) : 'N/A'}
Último login: ${user.lastLogin ? formatDate(user.lastLogin.toDate()) : 'N/A'}
        `);
    } catch (error) {
        console.error("Error:", error);
    }
}

async function editUserRole(userId, currentRole) {
    const newRole = currentRole === 'admin' ? 'student' : 'admin';
    
    if (confirm(`¿Cambiar rol a ${newRole}?`)) {
        try {
            await db.collection('users').doc(userId).update({
                role: newRole,
                updated_at: firebase.firestore.FieldValue.serverTimestamp()
            });
            
            showAlert('Rol actualizado exitosamente', 'success');
            await loadAdminData();
        } catch (error) {
            console.error("❌ Error al cambiar rol:", error);
            showAlert('Error al cambiar rol', 'error');
        }
    }
}

async function refreshAdminData() {
    await loadAdminData();
    showAlert('Datos actualizados', 'success');
}

function exportUsersToCSV() {
    db.collection('users').get().then(snapshot => {
        const users = [];
        snapshot.forEach(doc => {
            users.push(doc.data());
        });
        
        // Crear CSV
        const headers = ['Nombre', 'Email', 'Teléfono', 'WhatsApp', 'Empresa', 'Cargo', 'País', 'Ciudad', 'Rol', 'Fecha Registro'];
        const rows = users.map(u => [
            u.name || '',
            u.email || '',
            u.phone || '',
            u.whatsapp || '',
            u.company || '',
            u.position || '',
            u.country || '',
            u.city || '',
            u.role || '',
            u.created_at ? formatDate(u.created_at.toDate()) : ''
        ]);
        
        let csv = headers.join(',') + '\n';
        rows.forEach(row => {
            csv += row.map(field => `"${field}"`).join(',') + '\n';
        });
        
        // Descargar
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `usuarios_club_legumbres_${Date.now()}.csv`;
        a.click();
        
        showAlert('CSV exportado exitosamente', 'success');
    });
}

// ==================== UTILIDADES ====================

function formatDate(date) {
    return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}
