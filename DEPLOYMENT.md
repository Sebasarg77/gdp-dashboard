# 🚀 Guía de Deployment en Vercel

## Club de Legumbres - Capacitación Profesional VIP

---

## 📋 Requisitos Previos

- Cuenta en [Vercel](https://vercel.com)
- Repositorio Git (GitHub, GitLab, o Bitbucket)
- CLI de Vercel instalada (opcional)

---

## 🌐 Método 1: Deployment via Dashboard de Vercel (Recomendado)

### Paso 1: Preparar el Repositorio

1. Asegúrate de que todos los archivos estén commiteados en tu repositorio
2. Verifica que el archivo `vercel.json` esté en la raíz del proyecto

### Paso 2: Conectar con Vercel

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Click en "Add New Project"
3. Importa tu repositorio Git
4. Selecciona el repositorio "Club de Legumbres"

### Paso 3: Configuración del Proyecto

**Configuración básica:**
- **Framework Preset:** Other
- **Root Directory:** `./` (raíz del proyecto)
- **Build Command:** (dejar vacío)
- **Output Directory:** `landing`

### Paso 4: Deploy

1. Click en "Deploy"
2. Espera a que el deployment termine (1-2 minutos)
3. ¡Tu sitio estará disponible en `https://tu-proyecto.vercel.app`!

---

## 💻 Método 2: Deployment via CLI de Vercel

### Instalación de Vercel CLI

```bash
npm install -g vercel
```

### Login

```bash
vercel login
```

### Deployment

Desde la raíz del proyecto:

```bash
vercel
```

Sigue las instrucciones en pantalla:

1. Setup and deploy? → **Yes**
2. Which scope? → Selecciona tu cuenta
3. Link to existing project? → **No**
4. Project name → `club-legumbres` (o el que prefieras)
5. In which directory is your code located? → `./`

Para production deployment:

```bash
vercel --prod
```

---

## ⚙️ Configuración Avanzada

### Variables de Entorno (Futuro)

Si necesitas agregar variables de entorno:

1. Ve a tu proyecto en Vercel Dashboard
2. Settings → Environment Variables
3. Agrega las variables necesarias

### Dominios Personalizados

1. Ve a Settings → Domains
2. Agrega tu dominio personalizado
3. Configura los DNS según las instrucciones

---

## 📁 Estructura del Proyecto

```
/workspace
├── landing/
│   ├── index.html          # Página principal
│   └── styles.css          # Estilos (opcional)
├── vercel.json             # Configuración de Vercel
├── DEPLOYMENT.md           # Esta guía
└── README.md               # Documentación principal
```

---

## 🔧 Archivo vercel.json Explicado

```json
{
  "version": 2,
  "builds": [
    {
      "src": "landing/index.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/landing/$1"
    },
    {
      "src": "/",
      "dest": "/landing/index.html"
    }
  ]
}
```

- **builds:** Define cómo construir el sitio (archivo estático)
- **routes:** Redirecciona todas las peticiones a la carpeta landing

---

## 🎯 Credenciales de Demo

Para acceder al sitio desplegado:

- **Email:** `usuario@demo.com`
- **Contraseña:** `demo123`

---

## ✨ Características del Sitio

### ✅ Completamente Responsive
- Diseño adaptable a móviles, tablets y desktop
- Menús optimizados para cada dispositivo

### ✅ 3 Cursos Completos con Contenido
1. **Fundamentos de Legumbres Premium** (85% completado)
   - 3 módulos con 12 lecciones
   - Espacios para videos en cada lección

2. **Gestión de Calidad y Control Avanzado** (45% completado)
   - 3 módulos con 10 lecciones
   - Sistema de certificaciones

3. **Marketing y Exportación Internacional** (12% completado)
   - 3 módulos con 9 lecciones
   - Estrategias de comercialización

### ✅ Sistema de Videos
- Cada lección tiene espacio para enlace de video
- Modal interactivo para reproducción
- Campo para agregar URL de video (YouTube, Vimeo, etc.)

### ✅ Certificados Digitales
- Generación automática de certificados
- Código de verificación único
- Opciones para descargar y compartir

---

## 🔄 Actualizaciones Automáticas

Vercel se integra con tu repositorio Git:

1. Cada `git push` desplegará automáticamente los cambios
2. Los deploys de ramas no-main serán preview deployments
3. Solo los merge a main/master se deployarán a producción

---

## 📊 Monitoreo

### Analytics de Vercel

Vercel proporciona analytics gratuitos:
- Visitas por página
- Performance metrics
- Geo-distribución de visitantes

Accede en: Dashboard → Analytics

---

## 🐛 Troubleshooting

### El sitio no carga

1. Verifica que `vercel.json` esté en la raíz
2. Chequea los logs en Vercel Dashboard
3. Asegúrate de que `landing/index.html` exista

### Errores 404

- Verifica las rutas en `vercel.json`
- Asegúrate de que los archivos estén en la carpeta correcta

### El diseño no se ve bien

- Limpia caché del navegador (Ctrl + Shift + R)
- Verifica que el CSS esté embebido en el HTML

---

## 📞 Soporte

- **Documentación Vercel:** https://vercel.com/docs
- **Soporte Vercel:** https://vercel.com/support
- **Comunidad:** https://github.com/vercel/vercel/discussions

---

## 🎉 ¡Listo!

Tu plataforma educativa está lista para ser utilizada por miles de usuarios.

**URL de ejemplo:** `https://club-legumbres.vercel.app`

---

## 📝 Próximos Pasos Sugeridos

1. ✅ Agregar videos a cada lección
2. ✅ Configurar dominio personalizado
3. ✅ Implementar backend para usuarios reales
4. ✅ Agregar sistema de pagos
5. ✅ Integrar con plataforma de email marketing
6. ✅ Añadir analytics avanzados
7. ✅ Crear app móvil complementaria

---

**Creado con ❤️ para profesionales de la industria de legumbres**
