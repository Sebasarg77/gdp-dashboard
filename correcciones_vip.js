/**
 * 🔧 CORRECCIONES VIP - Club de Legumbres
 * Archivo de correcciones para solucionar problemas identificados
 * 
 * INSTRUCCIONES:
 * 1. Agregar este archivo en landing/correcciones_vip.js
 * 2. Incluir antes del cierre de </body> en index.html:
 *    <script src="correcciones_vip.js"></script>
 * 3. Redeploy en Vercel
 */

(function() {
    'use strict';
    
    console.log('🔧 Cargando correcciones VIP...');
    
    // ==================== CORRECCIÓN 1: TÍTULO EN LOGIN ====================
    
    function agregarTituloLogin() {
        // Esperar a que el DOM esté completamente cargado
        const checkInterval = setInterval(() => {
            const heroText = document.querySelector('.hero-text h1');
            
            if (heroText && !document.getElementById('club-title-added')) {
                // Agregar título al hero
                const titleDiv = document.createElement('div');
                titleDiv.id = 'club-title-added';
                titleDiv.style.cssText = 'text-align: center; margin-bottom: 2rem;';
                titleDiv.innerHTML = `
                    <h1 style="font-size: clamp(2rem, 5vw, 3.5rem); margin-bottom: 0.5rem; 
                               font-weight: 800; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
                        🌱 Club de Legumbres
                    </h1>
                    <p style="font-size: clamp(1rem, 2.5vw, 1.5rem); margin: 0; opacity: 0.95;">
                        Plataforma Educativa VIP
                    </p>
                `;
                
                heroText.parentNode.insertBefore(titleDiv, heroText);
                console.log('✅ Título agregado al login');
                clearInterval(checkInterval);
            }
        }, 100);
        
        // Detener después de 5 segundos si no encuentra el elemento
        setTimeout(() => clearInterval(checkInterval), 5000);
    }
    
    // ==================== CORRECCIÓN 2: OCULTAR ELEMENTOS DE ADMIN ====================
    
    async function ocultarElementosAdmin(userRole) {
        console.log('🔒 Configurando permisos para rol:', userRole);
        
        if (userRole !== 'admin') {
            // Ocultar botón de admin en navbar
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                if (item.textContent.includes('Admin') || item.textContent.includes('⚙️')) {
                    item.style.display = 'none';
                }
            });
            
            // Ocultar inputs de edición en modales de video
            setTimeout(() => {
                const videoUrlInput = document.getElementById('videoUrlInput');
                const pdfUrlInput = document.getElementById('pdfUrlInput');
                
                if (videoUrlInput) {
                    const videoContainer = videoUrlInput.closest('div');
                    if (videoContainer) {
                        videoContainer.style.display = 'none';
                    }
                }
                
                if (pdfUrlInput) {
                    const pdfContainer = pdfUrlInput.closest('div');
                    if (pdfContainer && pdfContainer.querySelector('label')) {
                        pdfContainer.style.display = 'none';
                    }
                }
            }, 1000);
            
            // Ocultar botones de edición
            const allButtons = document.querySelectorAll('button, .btn');
            allButtons.forEach(btn => {
                const text = btn.textContent.toLowerCase();
                if (text.includes('publicar') || text.includes('actualización') || 
                    text.includes('panel') || text.includes('configurar')) {
                    // Solo ocultar si no es un botón de descarga o visualización
                    if (!text.includes('descargar') && !text.includes('ver') && 
                        !text.includes('abrir') && !text.includes('certificado')) {
                        btn.style.display = 'none';
                    }
                }
            });
            
            console.log('✅ Elementos de admin ocultados para estudiante');
        } else {
            console.log('👑 Usuario es admin - acceso completo');
        }
    }
    
    // ==================== CORRECCIÓN 3: MEJORAR FUNCIÓN DE PERFIL ====================
    
    function mejorarFuncionPerfil() {
        // Sobrescribir la función saveProfile original si existe
        if (typeof window.saveProfile === 'function') {
            const originalSaveProfile = window.saveProfile;
            
            window.saveProfile = async function(event) {
                event.preventDefault();
                
                if (!window.currentUser) {
                    alert('⚠️ Debes iniciar sesión primero');
                    return;
                }
                
                // Validar nombre
                const nameInput = document.getElementById('profileName');
                if (!nameInput || !nameInput.value.trim()) {
                    alert('⚠️ El nombre es obligatorio');
                    return;
                }
                
                // Construir datos del perfil con validación
                const profileData = {
                    name: document.getElementById('profileName')?.value.trim() || '',
                    phone: document.getElementById('profilePhone')?.value.trim() || '',
                    whatsapp: document.getElementById('profileWhatsapp')?.value.trim() || '',
                    company: document.getElementById('profileCompany')?.value.trim() || '',
                    position: document.getElementById('profilePosition')?.value.trim() || '',
                    country: document.getElementById('profileCountry')?.value.trim() || '',
                    city: document.getElementById('profileCity')?.value.trim() || '',
                    bio: document.getElementById('profileBio')?.value.trim() || ''
                };
                
                // Agregar timestamp solo si firebase está disponible
                if (window.firebase && window.firebase.firestore) {
                    profileData.updated_at = firebase.firestore.FieldValue.serverTimestamp();
                }
                
                try {
                    console.log('💾 Guardando perfil...', profileData);
                    
                    if (!window.db) {
                        throw new Error('Base de datos no disponible');
                    }
                    
                    await window.db.collection('users').doc(window.currentUser.uid).update(profileData);
                    
                    console.log('✅ Perfil actualizado exitosamente');
                    alert('✅ Perfil actualizado exitosamente');
                    
                    // Actualizar UI si la función existe
                    if (typeof window.updateUIForLoggedInUser === 'function') {
                        await window.updateUIForLoggedInUser(window.currentUser);
                    }
                    
                } catch (error) {
                    console.error('❌ Error al actualizar perfil:', error);
                    console.error('Detalles:', error.message);
                    
                    // Mensajes específicos según el error
                    let errorMessage = '❌ Error al guardar cambios';
                    
                    if (error.code === 'permission-denied') {
                        errorMessage = '❌ No tienes permisos para editar este perfil';
                    } else if (error.code === 'not-found') {
                        errorMessage = '❌ Perfil no encontrado en la base de datos';
                    } else if (error.message) {
                        errorMessage = `❌ Error: ${error.message}`;
                    }
                    
                    alert(errorMessage);
                }
            };
            
            console.log('✅ Función saveProfile mejorada');
        }
    }
    
    // ==================== CORRECCIÓN 4: AGREGAR BADGES VIP ====================
    
    function agregarBadgesVIP(userData) {
        const userInfo = document.querySelector('.user-info');
        if (!userInfo) return;
        
        // Limpiar badges anteriores
        const existingBadges = userInfo.querySelectorAll('.vip-badge');
        existingBadges.forEach(badge => badge.remove());
        
        // Badge de Beta Tester
        if (userData.beta_tester) {
            const betaBadge = document.createElement('span');
            betaBadge.className = 'vip-badge';
            betaBadge.style.cssText = `
                background: linear-gradient(135deg, #FFD700, #FFA500);
                color: #1a1a1a;
                padding: 4px 12px;
                border-radius: 20px;
                font-size: 0.75rem;
                font-weight: bold;
                margin-left: 0.5rem;
                box-shadow: 0 2px 8px rgba(255,215,0,0.3);
                display: inline-block;
            `;
            betaBadge.textContent = '⭐ Beta Tester';
            userInfo.appendChild(betaBadge);
        }
        
        // Badge de Founding Member
        if (userData.founding_member) {
            const founderBadge = document.createElement('span');
            founderBadge.className = 'vip-badge';
            founderBadge.style.cssText = `
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
                padding: 4px 12px;
                border-radius: 20px;
                font-size: 0.75rem;
                font-weight: bold;
                margin-left: 0.5rem;
                box-shadow: 0 2px 8px rgba(102,126,234,0.3);
                display: inline-block;
            `;
            founderBadge.textContent = '👑 Founding Member';
            userInfo.appendChild(founderBadge);
        }
        
        console.log('✅ Badges VIP agregados');
    }
    
    // ==================== CORRECCIÓN 5: MENSAJE DE BIENVENIDA ====================
    
    function agregarMensajeBienvenida(userData) {
        const dashboard = document.getElementById('dashboard');
        if (!dashboard || document.getElementById('welcomeMessage')) return;
        
        const welcomeDiv = document.createElement('div');
        welcomeDiv.id = 'welcomeMessage';
        welcomeDiv.style.cssText = `
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 2rem;
            border-radius: 12px;
            margin-bottom: 2rem;
            text-align: center;
            box-shadow: 0 4px 15px rgba(102,126,234,0.3);
        `;
        
        let badgeHTML = '';
        if (userData.beta_tester) {
            badgeHTML = `
                <div style="margin-top: 1rem;">
                    <span style="background: rgba(255,215,0,0.3); padding: 8px 20px; border-radius: 25px; font-size: 0.95rem; display: inline-block; font-weight: 600;">
                        ⭐ Miembro Beta Tester VIP ⭐
                    </span>
                </div>
            `;
        }
        
        const accessUntil = userData.access_until 
            ? new Date(userData.access_until.seconds * 1000).toLocaleDateString('es-AR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
            : 'Indefinido';
        
        welcomeDiv.innerHTML = `
            <h2 style="margin: 0 0 0.5rem 0; font-size: 2rem;">
                ¡Bienvenido, ${userData.name}! 👋
            </h2>
            <p style="margin: 0; opacity: 0.95; font-size: 1.1rem;">
                Acceso VIP válido hasta: <strong>${accessUntil}</strong>
            </p>
            ${badgeHTML}
        `;
        
        dashboard.insertBefore(welcomeDiv, dashboard.firstChild);
        console.log('✅ Mensaje de bienvenida agregado');
    }
    
    // ==================== MONITOREAR AUTENTICACIÓN ====================
    
    function monitorearAutenticacion() {
        // Esperar a que Firebase esté disponible
        const checkAuth = setInterval(() => {
            if (window.auth && window.db && window.currentUser) {
                console.log('🔐 Usuario autenticado detectado:', window.currentUser.email);
                
                // Obtener datos del usuario
                window.db.collection('users').doc(window.currentUser.uid).get()
                    .then(doc => {
                        if (doc.exists) {
                            const userData = doc.data();
                            const userRole = userData.role || 'student';
                            
                            console.log('👤 Rol del usuario:', userRole);
                            
                            // Aplicar correcciones
                            ocultarElementosAdmin(userRole);
                            agregarBadgesVIP(userData);
                            agregarMensajeBienvenida(userData);
                            
                            clearInterval(checkAuth);
                        }
                    })
                    .catch(error => {
                        console.error('Error obteniendo datos del usuario:', error);
                    });
            }
        }, 500);
        
        // Detener después de 15 segundos
        setTimeout(() => clearInterval(checkAuth), 15000);
    }
    
    // ==================== INICIALIZACIÓN ====================
    
    function inicializar() {
        console.log('🚀 Inicializando correcciones VIP...');
        
        // Agregar título en login inmediatamente
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', agregarTituloLogin);
        } else {
            agregarTituloLogin();
        }
        
        // Mejorar función de perfil
        setTimeout(mejorarFuncionPerfil, 1000);
        
        // Monitorear autenticación
        monitorearAutenticacion();
        
        // También escuchar el evento de auth state changed
        if (window.auth) {
            window.auth.onAuthStateChanged((user) => {
                if (user) {
                    console.log('🔄 Estado de autenticación cambió:', user.email);
                    setTimeout(() => {
                        window.db.collection('users').doc(user.uid).get()
                            .then(doc => {
                                if (doc.exists) {
                                    const userData = doc.data();
                                    ocultarElementosAdmin(userData.role || 'student');
                                    agregarBadgesVIP(userData);
                                    agregarMensajeBienvenida(userData);
                                }
                            });
                    }, 1000);
                }
            });
        }
        
        console.log('✅ Correcciones VIP cargadas exitosamente');
    }
    
    // Ejecutar inicialización
    inicializar();
    
})();

