# 🔥 Primeros Pasos con Firebase - Club de Legumbres VIP

## ✅ Firebase Ya Está Integrado

Tu aplicación **YA TIENE** Firebase completamente integrado y configurado con tus credenciales:

```javascript
Project ID: club-legumbres
Auth Domain: club-legumbres.firebaseapp.com
```

## 🚀 Pasos Siguientes

### 1️⃣ Crear tu Usuario Administrador

1. **Abre tu aplicación** en el navegador:
   - Local: `landing/index.html`
   - Vercel: Tu URL de Vercel

2. **Regístrate** con tu email:
   - Usa tu email real
   - Elige una contraseña segura (mínimo 6 caracteres)
   - Coloca tu nombre completo

3. **Configurar como Admin** en Firebase Console:
   
   a) Ve a Firebase Console: https://console.firebase.google.com/
   
   b) Selecciona tu proyecto "Club-legumbres"
   
   c) En el menú lateral, click en **"Firestore Database"**
   
   d) Busca la colección **"users"**
   
   e) Click en tu documento de usuario (tu email)
   
   f) Click en el campo **"role"**
   
   g) Cambia el valor de **"student"** a **"admin"**
   
   h) Click en **"Actualizar"** o presiona Enter

4. **¡Listo!** Recarga tu aplicación y ya tendrás acceso de administrador.

---

## 🎯 Funcionalidades Disponibles

### 👤 Para TODOS los usuarios:
- ✅ Registro e inicio de sesión
- ✅ Perfil editable (nombre, teléfono, WhatsApp, empresa, cargo, país, ciudad, bio)
- ✅ Subir foto de perfil (máx 2MB)
- ✅ Ver cursos y progreso
- ✅ Descargar certificados
- ✅ Ver estadísticas personales

### 👑 Para ADMINISTRADORES:
- ✅ Panel de administrador (click en tu avatar → menú desplegable)
- ✅ Ver todos los usuarios registrados
- ✅ Ver estadísticas de la plataforma
- ✅ Cambiar roles (admin/student)
- ✅ Exportar datos a CSV
- ✅ Ver detalles completos de cada usuario

---

## 🔐 Seguridad

### Reglas de Firestore (ya configuradas):
- ✅ Usuarios solo pueden leer/editar su propio perfil
- ✅ Administradores pueden ver todos los usuarios
- ✅ Solo administradores pueden editar cursos
- ✅ Los datos están protegidos y encriptados

### Reglas de Storage (ya configuradas):
- ✅ Solo el dueño puede subir su foto de perfil
- ✅ Todos pueden ver las fotos de perfil
- ✅ Material de cursos protegido

---

## 📊 Base de Datos

### Colecciones en Firestore:

1. **`users`** - Datos de usuarios
   ```
   users/{userId}
   ├── email
   ├── name
   ├── role (student/admin)
   ├── phone
   ├── whatsapp
   ├── company
   ├── position
   ├── country
   ├── city
   ├── bio
   ├── profilePicture
   ├── created_at
   ├── updated_at
   └── lastLogin
   ```

2. **`progress`** - Progreso de cursos (futuro)
   ```
   progress/{userId}/courses/{courseId}
   └── progress
   ```

3. **`courses`** - Cursos disponibles (futuro)

---

## 🧪 Probar tu Aplicación

1. **Registra varios usuarios de prueba** para ver cómo funciona la administración

2. **Prueba el perfil**:
   - Click en "Perfil" en la barra superior
   - Edita tus datos
   - Sube una foto de perfil
   - Guarda los cambios

3. **Prueba el panel de admin**:
   - Click en tu avatar (esquina superior derecha)
   - Selecciona "Panel de Administrador"
   - Explora las estadísticas
   - Cambia roles de usuarios
   - Exporta datos a CSV

---

## 💰 Costos de Firebase

**Firebase es 100% GRATIS** para tu nivel de uso:

### Plan Spark (Gratis):
- ✅ 50,000 lecturas/día en Firestore
- ✅ 20,000 escrituras/día en Firestore
- ✅ 1GB de almacenamiento en Storage
- ✅ 10GB de transferencia/mes
- ✅ Autenticación ilimitada

**Esto es más que suficiente para cientos de usuarios.**

---

## 🆘 Solución de Problemas

### ❌ "auth/invalid-credential"
- Verifica que el email y contraseña sean correctos
- Si acabas de crear la cuenta, intenta recargar la página

### ❌ "No tienes permisos de administrador"
- Asegúrate de haber cambiado tu `role` a `admin` en Firestore

### ❌ La foto de perfil no se sube
- Verifica que la imagen sea menor a 2MB
- Solo se aceptan formatos: JPG, PNG, GIF, WEBP

### ❌ No puedo ver el perfil
- Asegúrate de estar logueado
- Recarga la página

---

## 📚 Próximos Pasos

1. **Deploy a Vercel** (si no lo hiciste aún):
   ```bash
   git add .
   git commit -m "feat: Integrate Firebase authentication and user profiles"
   git push
   ```

2. **Configurar dominio personalizado** en Vercel (opcional)

3. **Agregar más usuarios** y probar todas las funcionalidades

4. **Personalizar la experiencia** según tus necesidades

---

## 🎉 ¡Felicitaciones!

Tu aplicación Club de Legumbres VIP ahora tiene:
- 🔥 Firebase integrado
- 🔐 Autenticación segura
- 👤 Perfiles de usuario editables
- 👑 Panel de administrador completo
- 📊 Base de datos en tiempo real
- 📸 Almacenamiento de imágenes

**¿Tienes preguntas?** Revisa los archivos de documentación:
- `README_PERFIL_FIREBASE.md` - Guía completa
- `FIREBASE_CONFIG.md` - Configuración detallada
- `INTEGRACION_PERFIL_FIREBASE.md` - Guía de integración

---

**Proyecto:** Club de Legumbres - Capacitación Profesional VIP  
**Firebase Project:** club-legumbres  
**Fecha de Integración:** 2025-10-05
