# 🔥 CONFIGURACIÓN DE FIREBASE PARA CLUB DE LEGUMBRES

## 📋 PASO 1: CREAR PROYECTO EN FIREBASE

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Click en "Agregar proyecto"
3. Nombre del proyecto: **"Club de Legumbres VIP"**
4. Desactiva Google Analytics (opcional)
5. Click en "Crear proyecto"

---

## 📋 PASO 2: CONFIGURAR AUTENTICACIÓN

1. En el menú lateral, ve a **"Authentication"**
2. Click en "Comenzar"
3. Habilita **"Correo electrónico/contraseña"**
4. Guarda los cambios

---

## 📋 PASO 3: CONFIGURAR FIRESTORE DATABASE

1. En el menú lateral, ve a **"Firestore Database"**
2. Click en "Crear base de datos"
3. Modo: **"Producción"** (para seguridad)
4. Ubicación: **"us-central"** o la más cercana
5. Click en "Habilitar"

### Reglas de Seguridad de Firestore:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Usuarios pueden leer/escribir solo sus propios datos
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Solo admin puede leer todos los usuarios
    match /users/{userId} {
      allow read: if request.auth != null && 
                     get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    // Cursos públicos para lectura
    match /courses/{courseId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
                      get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    // Progreso de usuarios
    match /progress/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

---

## 📋 PASO 4: CONFIGURAR STORAGE (PARA FOTOS DE PERFIL)

1. En el menú lateral, ve a **"Storage"**
2. Click en "Comenzar"
3. Modo: **"Producción"**
4. Ubicación: **"us-central"** o la más cercana
5. Click en "Listo"

### Reglas de Seguridad de Storage:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Fotos de perfil
    match /profile_pictures/{userId}/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Materiales de cursos (solo admin)
    match /course_materials/{allPaths=**} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
                      firestore.get(/databases/(default)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
  }
}
```

---

## 📋 PASO 5: OBTENER CREDENCIALES

1. En "Configuración del proyecto" (⚙️ icono arriba a la izquierda)
2. Scroll hasta **"Tus apps"**
3. Click en el icono **</>** (Web)
4. Nombre de la app: **"Club de Legumbres Web"**
5. NO marcar "Firebase Hosting"
6. Click en "Registrar app"
7. **COPIA** la configuración que aparece:

```javascript
const firebaseConfig = {
  apiKey: "TU_API_KEY_AQUI",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto-id",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdefgh"
};
```

---

## 📋 PASO 6: CREAR USUARIO ADMINISTRADOR

1. Ve a **"Authentication"** → **"Users"**
2. Click en "Agregar usuario"
3. Email: **tu_email@ejemplo.com**
4. Contraseña: **Tu contraseña segura**
5. Click en "Agregar usuario"
6. **COPIA el UID** que aparece en la lista

### Crear documento de admin en Firestore:

1. Ve a **"Firestore Database"**
2. Click en "Iniciar colección"
3. ID de colección: **`users`**
4. ID de documento: **Pega el UID del usuario que creaste**
5. Agrega estos campos:

```
email: "tu_email@ejemplo.com"
role: "admin"
name: "Sebastián"
created_at: [Timestamp actual]
```

---

## 📋 PASO 7: ESTRUCTURA DE LA BASE DE DATOS

### Colección: `users`

```javascript
{
  userId: {
    email: "usuario@ejemplo.com",
    name: "Nombre Completo",
    role: "student" | "admin",
    phone: "+54 9 11 1234-5678",
    whatsapp: "+54 9 11 1234-5678",
    company: "Nombre Empresa",
    position: "Cargo",
    country: "Argentina",
    profilePicture: "https://storage.googleapis.com/...",
    bio: "Biografía del usuario",
    created_at: Timestamp,
    updated_at: Timestamp,
    lastLogin: Timestamp
  }
}
```

### Colección: `courses`

```javascript
{
  courseId: {
    title: "Fundamentos de Legumbres Premium",
    description: "Descripción del curso",
    duration: 40,
    modules: [],
    instructor: "MBA Sebastián Ces",
    price: 0,
    students: 0,
    created_at: Timestamp
  }
}
```

### Colección: `progress`

```javascript
{
  userId: {
    courseId: {
      progress: 75,
      completedLessons: ["lesson1", "lesson2"],
      lastAccessed: Timestamp,
      certificate: true
    }
  }
}
```

---

## 📋 PASO 8: VARIABLES DE ENTORNO (SEGURIDAD)

Para **producción**, usa variables de entorno:

1. En Vercel:
   - Ve a tu proyecto → Settings → Environment Variables
   - Agrega cada variable de Firebase:
     - `VITE_FIREBASE_API_KEY`
     - `VITE_FIREBASE_AUTH_DOMAIN`
     - `VITE_FIREBASE_PROJECT_ID`
     - etc.

2. En el código, accede así:
```javascript
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  // ...
};
```

---

## 🎯 RESUMEN DE CREDENCIALES NECESARIAS

1. ✅ Firebase Config Object
2. ✅ UID del usuario administrador
3. ✅ Email y contraseña de admin

---

## 📱 TESTING

1. Probar registro de usuario
2. Probar login
3. Probar edición de perfil
4. Probar subida de foto
5. Probar panel de admin

---

## 🔐 SEGURIDAD

- ✅ Nunca expongas tu API Key en repositorios públicos
- ✅ Usa reglas de seguridad estrictas
- ✅ Limita acceso de admin con role checking
- ✅ Valida datos en el frontend y backend
- ✅ Implementa rate limiting si es necesario

---

## 📞 SOPORTE

Si necesitas ayuda:
- [Documentación oficial de Firebase](https://firebase.google.com/docs)
- [Stack Overflow - Firebase](https://stackoverflow.com/questions/tagged/firebase)
