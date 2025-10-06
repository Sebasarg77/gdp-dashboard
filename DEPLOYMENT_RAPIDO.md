# 🚀 DEPLOYMENT RÁPIDO - Club de Legumbres

## ✅ TODO ESTÁ LISTO PARA DEPLOYAR

---

## 🎯 OPCIÓN A: Deploy via Dashboard de Vercel (5 minutos - SIN CÓDIGO)

### Es la forma MÁS FÁCIL y no requiere comandos:

### **Paso 1: Asegúrate de que los archivos estén en tu repo**
Los archivos ya están creados en `/workspace`. Solo necesitas que estén en tu repositorio Git (GitHub/GitLab).

### **Paso 2: Ve a Vercel Dashboard**
1. Abre tu navegador y ve a: **https://vercel.com**
2. Inicia sesión con las credenciales que usaste en tu proyecto anterior
3. Click en **"Add New Project"** (botón grande)

### **Paso 3: Importa el Repositorio**
1. Vercel mostrará tus repositorios
2. Busca el repositorio que contiene este proyecto
3. Click en **"Import"**

### **Paso 4: Configura el Proyecto**
Vercel detectará automáticamente el proyecto. Configura así:

```
Project Name: club-legumbres (o el nombre que prefieras)
Framework Preset: Other
Root Directory: ./
Build Command: (dejar VACÍO)
Output Directory: landing
Install Command: (dejar VACÍO)
```

### **Paso 5: Deploy!**
1. Click en **"Deploy"** (botón azul grande)
2. Espera 1-2 minutos mientras Vercel hace su magia ✨
3. ¡LISTO! Vercel te mostrará la URL de tu sitio

**Tu sitio estará en:** `https://club-legumbres.vercel.app` (o similar)

---

## 🎯 OPCIÓN B: Deploy con Vercel CLI + Token (Para developers)

Si prefieres usar la terminal:

### **Paso 1: Obtén tu Token de Vercel**
1. Ve a: https://vercel.com/account/tokens
2. Click en **"Create Token"**
3. Dale un nombre: "Club Legumbres Deploy"
4. Scope: Full Account
5. Expiration: No expiration (o el tiempo que prefieras)
6. Click **"Create"**
7. **COPIA EL TOKEN** (se muestra solo una vez)

### **Paso 2: Usa el Token para Deploy**
Desde tu terminal en `/workspace`:

```bash
# Método 1: Variable de entorno
export VERCEL_TOKEN="tu_token_aqui"
vercel --token="$VERCEL_TOKEN" --prod --yes

# Método 2: Directamente
vercel --token="tu_token_aqui" --prod --yes
```

---

## 🎯 OPCIÓN C: Login Manual y Deploy (Tradicional)

```bash
# Navega al proyecto
cd /workspace

# Login a Vercel (abrirá el navegador)
vercel login

# Deploy a producción
vercel --prod
```

Vercel CLI te preguntará:
- **Set up and deploy?** → YES
- **Which scope?** → Selecciona tu cuenta
- **Link to existing project?** → NO
- **What's your project's name?** → club-legumbres
- **In which directory is your code located?** → `./`

¡Y listo! 🎉

---

## 📋 VERIFICACIÓN POST-DEPLOYMENT

Después del deployment, verifica:

1. ✅ **Abre la URL** que te dio Vercel
2. ✅ **Haz login** con: `usuario@demo.com` / `demo123`
3. ✅ **Prueba los cursos**: expande módulos y lecciones
4. ✅ **Abre una lección**: verifica el modal de video
5. ✅ **Prueba en móvil**: verifica que sea responsive
6. ✅ **Genera un certificado**: click en "Ver Certificado"

---

## 🎨 PERSONALIZACIÓN POST-DEPLOYMENT

### Dominio Personalizado (Opcional)
1. En Vercel Dashboard → tu proyecto
2. Settings → Domains
3. Add Domain → Sigue las instrucciones

### Analytics
1. En Vercel Dashboard → tu proyecto
2. Analytics → Enable

---

## 📊 ARCHIVOS DEL PROYECTO

Estos archivos YA ESTÁN LISTOS en `/workspace`:

```
✅ landing/index.html         (1,623 líneas - App completa)
✅ vercel.json                (Configuración de Vercel)
✅ .vercelignore             (Exclusiones)
✅ deploy.sh                  (Script automatizado)
✅ DEPLOYMENT.md              (Guía detallada)
✅ README_PROYECTO.md         (Documentación completa)
✅ INSTRUCCIONES_VERCEL.txt   (Guía rápida)
```

---

## 🎓 CONTENIDO IMPLEMENTADO

### ✅ 3 Cursos Completos:

**1. Fundamentos de Legumbres Premium** (85%)
- 3 módulos | 12 lecciones con videos

**2. Gestión de Calidad y Control** (45%)
- 3 módulos | 10 lecciones con videos

**3. Marketing y Exportación** (12%)
- 3 módulos | 9 lecciones con videos

**Total: 31 lecciones** - Cada una con:
- 🎥 Espacio para video
- 📝 Descripción detallada
- ⏱️ Duración estimada
- ✓ Sistema de progreso

---

## 💡 RECOMENDACIÓN

**La OPCIÓN A (Dashboard)** es la más fácil y rápida:
- ✅ No requiere comandos
- ✅ No requiere tokens
- ✅ Interface visual clara
- ✅ Deploy en 3 clicks

---

## 📞 ¿NECESITAS AYUDA?

Si algo no funciona:

1. Verifica que `vercel.json` esté en la raíz del proyecto ✅
2. Verifica que `landing/index.html` exista ✅
3. Verifica tu autenticación en Vercel
4. Lee `DEPLOYMENT.md` para troubleshooting detallado

---

## 🎉 DESPUÉS DEL DEPLOYMENT

Tu plataforma estará disponible en:
```
https://club-legumbres-xxx.vercel.app
```

**Credenciales de acceso:**
```
Email: usuario@demo.com
Password: demo123
```

**Comparte el link** con tus usuarios y ¡empieza a educar! 🌱

---

**¡Tu plataforma educativa profesional está a un click de estar online! 🚀**
