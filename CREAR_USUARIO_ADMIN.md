# 🔥 **CREAR TU USUARIO ADMINISTRADOR**

Firebase está **100% integrado** en tu aplicación. Ahora necesitas crear tu primer usuario administrador para poder acceder a todas las funcionalidades.

---

## 📋 **PASO 1: CREAR USUARIO EN FIREBASE AUTHENTICATION**

1. Ve a **Firebase Console**:
   ```
   https://console.firebase.google.com/
   ```

2. Selecciona tu proyecto: **"Club-legumbres"**

3. En el menú lateral, click en **"Authentication"** (🔐)

4. Click en la pestaña **"Users"**

5. Click en **"Add user"** (Agregar usuario)

6. Completa el formulario:
   ```
   Email:    tu-email@ejemplo.com
   Password: TuContraseñaSegura123
   ```
   
7. Click en **"Add user"**

8. ✅ **IMPORTANTE**: Copia el **User UID** que aparece
   - Se ve algo así: `Ab3Xy9KlMnPqRst1uvWx2yZ`
   - Lo necesitarás en el siguiente paso

---

## 📋 **PASO 2: ASIGNAR ROL DE ADMINISTRADOR**

1. En Firebase Console, ve a **"Firestore Database"** (🗄️)

2. Click en **"Start collection"** o en el botón **"+ Add collection"**

3. **Crear colección de usuarios**:
   ```
   Collection ID: users
   ```
   Click "Next"

4. **Agregar documento de usuario**:
   ```
   Document ID: [PEGA AQUÍ EL USER UID QUE COPIASTE]
   
   Field 1:
   - Field: email
   - Type: string
   - Value: tu-email@ejemplo.com
   
   Field 2:
   - Field: name
   - Type: string
   - Value: Tu Nombre Completo
   
   Field 3:
   - Field: role
   - Type: string
   - Value: admin
   
   Field 4:
   - Field: phone
   - Type: string
   - Value: 
   
   Field 5:
   - Field: whatsapp
   - Type: string
   - Value: 
   
   Field 6:
   - Field: company
   - Type: string
   - Value: 
   
   Field 7:
   - Field: position
   - Type: string
   - Value: 
   
   Field 8:
   - Field: country
   - Type: string
   - Value: 
   
   Field 9:
   - Field: city
   - Type: string
   - Value: 
   
   Field 10:
   - Field: bio
   - Type: string
   - Value: 
   
   Field 11:
   - Field: profilePicture
   - Type: string
   - Value: 
   
   Field 12:
   - Field: created_at
   - Type: timestamp
   - Value: [Click en el reloj para usar timestamp actual]
   
   Field 13:
   - Field: updated_at
   - Type: timestamp
   - Value: [Click en el reloj para usar timestamp actual]
   
   Field 14:
   - Field: lastLogin
   - Type: timestamp
   - Value: [Click en el reloj para usar timestamp actual]
   ```

5. Click en **"Save"**

---

## 🎯 **PASO 3: PROBAR TU USUARIO ADMIN**

1. Ve a tu aplicación:
   ```
   https://tu-app.vercel.app
   ```

2. Inicia sesión con:
   ```
   Email: tu-email@ejemplo.com
   Password: TuContraseñaSegura123
   ```

3. ✅ **Deberías ver**:
   - Dashboard principal
   - Tus cursos
   - Pestaña "Perfil" funcionando
   - Ícono de Admin (⚙️) en el navbar

4. **Probar funcionalidades**:
   - Click en tu avatar → Ver perfil
   - Editar tu información personal
   - Subir foto de perfil
   - Click en ícono Admin (⚙️) → Ver panel de administrador
   - Ver estadísticas de usuarios
   - Exportar CSV

---

## 🚀 **PASO 4 (OPCIONAL): CREAR MÁS USUARIOS**

### Opción A: Desde Firebase Console (Recomendado para testing)
- Repite PASO 1 y PASO 2 con otro email
- En PASO 2, usa `role: student` para usuarios normales

### Opción B: Desde tu App (Registro público)
⚠️ **IMPORTANTE**: Tu app NO tiene formulario de registro público por ahora.

Si quieres agregar registro público:
1. Crea un formulario de registro en el landing page
2. Llama a la función `registerWithEmail(email, password, name)`
3. Los nuevos usuarios se crearán automáticamente como `student`

---

## 📊 **ESTRUCTURA DE ROLES**

### 👑 **Admin** (role: "admin")
- ✅ Puede editar su perfil
- ✅ Puede ver todos los usuarios
- ✅ Puede cambiar roles de usuarios
- ✅ Puede exportar datos
- ✅ Acceso al panel de administrador

### 🎓 **Student** (role: "student")
- ✅ Puede editar su perfil
- ✅ Puede ver sus cursos
- ✅ Puede obtener certificados
- ❌ No puede ver otros usuarios
- ❌ No puede acceder al panel de admin

---

## 🔐 **SEGURIDAD**

### Las reglas de Firebase ya están configuradas:

**Firestore Rules**:
- ✅ Cada usuario solo puede leer/escribir sus propios datos
- ✅ Solo los admins pueden leer datos de otros usuarios
- ✅ Solo los admins pueden modificar cursos

**Storage Rules**:
- ✅ Fotos de perfil públicas (cualquiera puede verlas)
- ✅ Solo el dueño puede subir/modificar su foto
- ✅ Materiales de cursos accesibles solo para usuarios logueados

---

## ❓ **TROUBLESHOOTING**

### ❌ **Error: "Usuario no encontrado"**
→ Verifica que creaste el usuario en Authentication

### ❌ **Error: "No tienes permisos de administrador"**
→ Verifica que en Firestore el campo `role` sea exactamente `"admin"` (sin mayúsculas)

### ❌ **No puedo ver el panel de admin**
→ Cierra sesión y vuelve a iniciar sesión después de asignar el rol admin

### ❌ **La foto de perfil no sube**
→ Verifica que configuraste las reglas de Storage correctamente

---

## 🎉 **¡LISTO!**

Tu aplicación ahora tiene:
- ✅ Autenticación con Firebase
- ✅ Base de datos real en Firestore
- ✅ Perfiles de usuario editables
- ✅ Subida de fotos a Firebase Storage
- ✅ Panel de administrador funcional
- ✅ Gestión de roles
- ✅ Exportación de datos

### **Próximos pasos sugeridos**:
1. ✅ Crear tu usuario admin (ESTE PASO)
2. 📧 Invitar a usuarios de prueba
3. 🎨 Personalizar más tu perfil
4. 📊 Revisar estadísticas en el panel admin
5. 🚀 Deploy final a Vercel

---

**¿Necesitas ayuda?** Avísame si tienes algún problema creando tu usuario admin. 😊
