# 🚀 GUÍA DE INTEGRACIÓN: PERFIL DE USUARIO + FIREBASE

## 📋 ÍNDICE
1. [Configurar Firebase](#1-configurar-firebase)
2. [Integrar código en landing/index.html](#2-integrar-código)
3. [Actualizar funciones existentes](#3-actualizar-funciones)
4. [Testing](#4-testing)
5. [Deployment](#5-deployment)

---

## 1️⃣ CONFIGURAR FIREBASE

### Paso 1.1: Crear proyecto Firebase
Sigue los pasos en `FIREBASE_CONFIG.md` para:
- ✅ Crear proyecto en Firebase
- ✅ Habilitar Authentication (Email/Password)
- ✅ Crear Firestore Database
- ✅ Habilitar Storage
- ✅ Obtener credenciales

### Paso 1.2: Crear usuario administrador
1. Ve a Firebase Console → Authentication → Users
2. Click "Add user"
3. Email: **tu_email@ejemplo.com**
4. Password: **tu_password_segura**
5. **COPIA EL UID** del usuario creado

### Paso 1.3: Dar rol de admin
1. Ve a Firestore Database
2. Crea colección `users`
3. Crea documento con el UID copiado
4. Agrega estos campos:
```
email: "tu_email@ejemplo.com"
name: "Tu Nombre"
role: "admin"
created_at: [Timestamp actual]
```

---

## 2️⃣ INTEGRAR CÓDIGO EN landing/index.html

### Paso 2.1: Agregar scripts de Firebase en el <head>

**UBICACIÓN:** Dentro de `<head>`, ANTES de `</head>` (línea ~6)

```html
<!-- Firebase SDK -->
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-storage-compat.js"></script>
```

### Paso 2.2: Agregar estilos CSS

**UBICACIÓN:** Dentro de `<style>`, ANTES de `</style>` (línea ~950)

**ARCHIVO:** Copia todo el CSS de `PERFIL_USUARIO_CODE.html` sección "PARTE 2"

### Paso 2.3: Agregar modales HTML

**UBICACIÓN:** ANTES del modal de Support (línea ~2144)

**ARCHIVO:** Copia los modales de `PERFIL_USUARIO_CODE.html` sección "PARTE 3":
- Profile Modal
- Admin Dashboard Modal

### Paso 2.4: Agregar JavaScript

**UBICACIÓN:** Dentro de `<script>`, AL PRINCIPIO (línea ~2700)

**ARCHIVO:** Copia TODO el código de `PERFIL_JAVASCRIPT_CODE.js`

**IMPORTANTE:** Reemplaza `firebaseConfig` con tus credenciales reales:
```javascript
const firebaseConfig = {
    apiKey: "TU_API_KEY_REAL",
    authDomain: "tu-proyecto.firebaseapp.com",
    projectId: "tu-proyecto-id",
    storageBucket: "tu-proyecto.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdefgh"
};
```

---

## 3️⃣ ACTUALIZAR FUNCIONES EXISTENTES

### Paso 3.1: Actualizar función de login

**UBICACIÓN:** Busca la función `loginUser` existente (línea ~2600)

**REEMPLAZAR:**
```javascript
// Antiguo código demo
function loginUser(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (email === 'usuario@demo.com' && password === 'demo123') {
        isLoggedIn = true;
        showDashboard();
    } else {
        showAlert('Credenciales incorrectas', 'error');
    }
}
```

**CON:**
```javascript
// Nuevo código con Firebase
function loginUser(event) {
    loginWithEmail(event);
}
```

### Paso 3.2: Actualizar función showProfile

**UBICACIÓN:** Busca si existe `function showProfile()`, si NO existe, agrégala

**AGREGAR:**
```javascript
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
```

### Paso 3.3: Actualizar botón Admin

**UBICACIÓN:** Busca `onclick="openAdminPanel()"` en la navbar (línea ~1142)

**REEMPLAZAR:**
```html
<span class="nav-item" onclick="openAdminPanel()" style="color: #ff9800;">⚙️ Admin</span>
```

**CON:**
```html
<span class="nav-item" onclick="openAdminDashboard()" style="color: #ff9800;">⚙️ Admin</span>
```

### Paso 3.4: Actualizar cierre de modales

**UBICACIÓN:** Busca la función que cierra modales al hacer click fuera (línea ~2950)

**AGREGAR estas líneas:**
```javascript
const profileModal = document.getElementById('profileModal');
const adminDashboardModal = document.getElementById('adminDashboardModal');

if (event.target === profileModal) closeProfile();
if (event.target === adminDashboardModal) closeAdminDashboard();
```

---

## 4️⃣ TESTING

### Test 1: Login con Firebase
```bash
1. Abre la app
2. Intenta login con: tu_email@ejemplo.com / tu_password
3. ✅ Deberías ver el dashboard
```

### Test 2: Perfil de Usuario
```bash
1. Login
2. Click en "Perfil" en navbar
3. ✅ Deberías ver el modal de perfil
4. Edita datos y guarda
5. ✅ Refresca y verifica que se guardó
```

### Test 3: Subir foto
```bash
1. En perfil, click en 📷
2. Selecciona una imagen
3. ✅ Debería subirse y verse
```

### Test 4: Panel Admin
```bash
1. Login como admin
2. Click en "⚙️ Admin"
3. ✅ Deberías ver lista de usuarios
4. Exporta CSV
5. ✅ Debería descargar archivo
```

### Test 5: Registro nuevo usuario
```bash
1. Crea formulario de registro (opcional)
2. O usa Firebase Console → Authentication → Add user
3. ✅ Usuario debería aparecer en panel admin
```

---

## 5️⃣ DEPLOYMENT

### Opción A: Despliegue simple (SIN variables de entorno)

1. Commit y push a GitHub:
```bash
git add landing/index.html
git commit -m "feat: Add Firebase user profile and admin dashboard"
git push origin main
```

2. Vercel deployará automáticamente
3. ✅ Listo

### Opción B: Despliegue seguro (CON variables de entorno)

1. **En Vercel Dashboard:**
   - Ve a tu proyecto → Settings → Environment Variables
   - Agrega estas variables:
     ```
     VITE_FIREBASE_API_KEY = tu_api_key
     VITE_FIREBASE_AUTH_DOMAIN = tu-proyecto.firebaseapp.com
     VITE_FIREBASE_PROJECT_ID = tu-proyecto-id
     VITE_FIREBASE_STORAGE_BUCKET = tu-proyecto.appspot.com
     VITE_FIREBASE_MESSAGING_SENDER_ID = 123456789
     VITE_FIREBASE_APP_ID = 1:123456789:web:abcdefgh
     ```

2. **En tu código (landing/index.html):**
   ```javascript
   const firebaseConfig = {
       apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
       authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
       projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
       storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
       messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
       appId: import.meta.env.VITE_FIREBASE_APP_ID
   };
   ```

3. Deploy:
```bash
git add .
git commit -m "feat: Add Firebase with env variables"
git push origin main
```

---

## 🎯 CARACTERÍSTICAS IMPLEMENTADAS

### ✅ Perfil de Usuario
- [x] Foto de perfil (subida a Firebase Storage)
- [x] Nombre completo
- [x] Email (no editable)
- [x] Teléfono
- [x] WhatsApp
- [x] Empresa
- [x] Cargo/Posición
- [x] País (selector)
- [x] Ciudad
- [x] Biografía
- [x] Estadísticas (cursos, certificados, progreso)

### ✅ Autenticación
- [x] Login con email/password
- [x] Registro de nuevos usuarios
- [x] Logout
- [x] Persistencia de sesión
- [x] Actualización de último login

### ✅ Base de Datos (Firestore)
- [x] Colección `users`
- [x] Colección `progress` (para cursos)
- [x] Timestamps automáticos
- [x] Actualización en tiempo real

### ✅ Storage
- [x] Subida de fotos de perfil
- [x] URLs permanentes
- [x] Validación de tamaño y tipo

### ✅ Panel de Administrador
- [x] Vista de todos los usuarios
- [x] Estadísticas (total, activos, nuevos)
- [x] Ver detalles de usuario
- [x] Cambiar rol (admin/student)
- [x] Exportar usuarios a CSV
- [x] Actualizar datos en tiempo real
- [x] Acceso restringido (solo admin)

---

## 🔐 SEGURIDAD

### Reglas de Firestore implementadas:
```javascript
// Usuarios solo pueden editar sus propios datos
match /users/{userId} {
  allow read, write: if request.auth.uid == userId;
}

// Admin puede leer todos los usuarios
match /users/{userId} {
  allow read: if get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
}
```

### Reglas de Storage implementadas:
```javascript
// Solo el dueño puede subir su foto
match /profile_pictures/{userId}/{allPaths=**} {
  allow read: if true;
  allow write: if request.auth.uid == userId;
}
```

---

## 📊 ESTRUCTURA DE LA BASE DE DATOS

```
Firestore Database
├── users/
│   ├── {userId}/
│   │   ├── email: string
│   │   ├── name: string
│   │   ├── role: "admin" | "student"
│   │   ├── phone: string
│   │   ├── whatsapp: string
│   │   ├── company: string
│   │   ├── position: string
│   │   ├── country: string
│   │   ├── city: string
│   │   ├── bio: string
│   │   ├── profilePicture: string (URL)
│   │   ├── created_at: timestamp
│   │   ├── updated_at: timestamp
│   │   └── lastLogin: timestamp
│   
├── progress/
│   ├── {userId}/
│   │   └── courses/
│   │       └── {courseId}/
│   │           ├── progress: number
│   │           ├── completedLessons: array
│   │           └── certificate: boolean
│   
└── courses/
    └── {courseId}/
        ├── title: string
        ├── duration: number
        └── ...

Storage
├── profile_pictures/
│   └── {userId}/
│       └── {timestamp}_{filename}
```

---

## 🐛 TROUBLESHOOTING

### Error: "Firebase is not defined"
**Solución:** Asegúrate de que los scripts de Firebase están ANTES de tu código JavaScript

### Error: "Permission denied"
**Solución:** Verifica las reglas de seguridad en Firestore y Storage

### Error: "User not found"
**Solución:** Crea el documento del usuario en Firestore/users con su UID

### Las fotos no se suben
**Solución:** Verifica que Storage esté habilitado y las reglas configuradas

### El panel admin no se ve
**Solución:** Verifica que el usuario tenga `role: "admin"` en Firestore

---

## 📞 PRÓXIMOS PASOS

1. ✅ Implementar recuperación de contraseña
2. ✅ Agregar filtros en panel admin
3. ✅ Implementar paginación de usuarios
4. ✅ Agregar búsqueda de usuarios
5. ✅ Notificaciones en tiempo real
6. ✅ Logs de actividad de admin

---

## 🎉 ¡LISTO!

Ahora tienes:
- ✅ Sistema de autenticación completo
- ✅ Perfil de usuario editable
- ✅ Base de datos Firebase
- ✅ Panel de administrador exclusivo
- ✅ Subida de fotos
- ✅ Exportación de datos

¿Dudas? Revisa la documentación oficial de Firebase o consulta los archivos de configuración.
