# 🌱 Club de Legumbres - Plataforma Educativa VIP

## Capacitación Profesional para Expertos en la Industria Agrícola

<div align="center">

![Status](https://img.shields.io/badge/status-active-success.svg)
![Platform](https://img.shields.io/badge/platform-web-blue.svg)
![Language](https://img.shields.io/badge/language-español-yellow.svg)

</div>

---

## 📖 Descripción

Plataforma educativa profesional diseñada para capacitar expertos en la industria de legumbres. Ofrece cursos VIP con contenido de alta calidad sobre cultivo, calidad, gestión y comercialización de legumbres a nivel internacional.

---

## ✨ Características Principales

### 🎓 Sistema de Cursos Completo
- **3 Cursos Profesionales** con contenido estructurado
- **31 Lecciones en total** organizadas en módulos
- **Sistema de progreso** con tracking visual
- **Certificados digitales** verificables

### 📚 Contenido de Calidad

#### Curso 1: Fundamentos de Legumbres Premium
- 3 módulos | 12 lecciones | 85% completado
- Historia, nutrición, mercados, clasificación
- Producción y manejo post-cosecha

#### Curso 2: Gestión de Calidad y Control
- 3 módulos | 10 lecciones | 45% completado
- ISO 9001, HACCP, BPM
- Control de procesos y certificaciones

#### Curso 3: Marketing y Exportación
- 3 módulos | 9 lecciones | 12% completado
- Análisis de mercados internacionales
- Logística y marketing digital

### 🎥 Sistema de Videos
- **Espacio dedicado** para cada lección
- **Modal interactivo** para reproducción
- **Campo para URLs** de video (YouTube, Vimeo, etc.)
- **Marcado de progreso** por lección

### 📱 Diseño Responsive
- **Mobile-first design**
- **Adaptable a tablets y desktop**
- **Menús optimizados** para cada dispositivo
- **Touch-friendly** en dispositivos móviles

### 🎨 Interfaz Moderna
- **Gradientes vibrantes**
- **Animaciones suaves**
- **Cards interactivas**
- **Glassmorphism effects**

---

## 🚀 Deployment en Vercel

### Opción 1: Via Dashboard (Recomendado)

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Click en "Add New Project"
3. Importa tu repositorio
4. Deploy automáticamente

### Opción 2: Via CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Opción 3: Script Automatizado

```bash
# Dar permisos de ejecución
chmod +x deploy.sh

# Ejecutar
./deploy.sh
```

📖 **Guía completa:** Ver `DEPLOYMENT.md`

---

## 🔐 Credenciales de Demo

Para acceder a la plataforma:

```
Email: usuario@demo.com
Password: demo123
```

---

## 📁 Estructura del Proyecto

```
club-legumbres/
├── landing/
│   ├── index.html              # Aplicación principal (SPA)
│   └── styles.css              # Estilos adicionales (opcional)
├── vercel.json                 # Configuración de Vercel
├── .vercelignore              # Archivos a ignorar en deploy
├── deploy.sh                   # Script de deployment
├── DEPLOYMENT.md               # Guía de deployment
└── README_PROYECTO.md          # Este archivo
```

---

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con gradientes y animaciones
- **JavaScript (Vanilla)** - Interactividad sin frameworks
- **Vercel** - Hosting y deployment

### ¿Por qué Vanilla JS?

- ⚡ **Ultra rápido** - Sin overhead de frameworks
- 📦 **Lightweight** - Solo 1 archivo HTML
- 🎯 **Simple** - Fácil de mantener y modificar
- 🚀 **Deploy instantáneo** - Sin build process

---

## 📊 Estadísticas del Proyecto

| Métrica | Valor |
|---------|-------|
| Cursos totales | 3 |
| Módulos totales | 9 |
| Lecciones totales | 31 |
| Líneas de código | ~2,000 |
| Peso del sitio | < 100KB |
| Tiempo de carga | < 1s |

---

## 🎯 Funcionalidades Implementadas

- [x] Sistema de autenticación
- [x] Dashboard interactivo
- [x] 3 cursos completos con módulos
- [x] 31 lecciones con descripciones
- [x] Sistema de progreso por curso
- [x] Módulos expandibles/colapsables
- [x] Modal de reproductor de video
- [x] Sistema de certificados
- [x] Diseño responsive completo
- [x] Navegación persistente
- [x] Estadísticas del usuario
- [x] Sidebar con acciones rápidas
- [x] Alertas y notificaciones
- [x] Cierre de sesión

---

## 🔮 Funcionalidades Futuras (Roadmap)

### Fase 1: Backend (Próximos 2 meses)
- [ ] API REST con Node.js/Express
- [ ] Base de datos (MongoDB/PostgreSQL)
- [ ] Sistema de usuarios real
- [ ] Autenticación JWT
- [ ] Dashboard de administrador

### Fase 2: Contenido (Próximos 3 meses)
- [ ] Integración de videos reales
- [ ] Sistema de evaluaciones
- [ ] Foros de discusión
- [ ] Chat en vivo con instructores
- [ ] Descargas de material

### Fase 3: Monetización (Próximos 4 meses)
- [ ] Integración de pagos (Stripe/PayPal)
- [ ] Suscripciones mensuales
- [ ] Planes Free/Premium/VIP
- [ ] Cupones de descuento
- [ ] Afiliados

### Fase 4: Escala (Próximos 6 meses)
- [ ] App móvil (React Native)
- [ ] Notificaciones push
- [ ] Modo offline
- [ ] Gamificación
- [ ] Certificados blockchain

---

## 🎨 Paleta de Colores

```css
/* Colores Principales */
--primary: #4CAF50      /* Verde principal */
--secondary: #8BC34A    /* Verde claro */
--accent: #45a049       /* Verde oscuro */

/* Gradientes */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)

/* Estados */
--success: #4CAF50
--warning: #ff9800
--danger: #f44336
--info: #2196F3
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 480px) { ... }

/* Tablet */
@media (max-width: 768px) { ... }

/* Desktop */
@media (max-width: 1024px) { ... }
```

---

## 🧪 Testing

### Test Manual

1. Abre `landing/index.html` en tu navegador
2. Prueba el login con credenciales demo
3. Navega por los cursos
4. Expande módulos y lecciones
5. Abre el modal de video
6. Verifica el certificado

### Test de Responsive

```bash
# En Chrome DevTools
1. F12 → Toggle Device Toolbar
2. Prueba diferentes dispositivos
3. Verifica orientación portrait/landscape
```

---

## 💻 Desarrollo Local

### Requisitos

- Navegador web moderno (Chrome, Firefox, Edge)
- Editor de código (VS Code recomendado)

### Instalación

```bash
# Clonar repositorio
git clone <tu-repo>

# Navegar al proyecto
cd club-legumbres

# Abrir en navegador
# Método 1: Doble click en landing/index.html

# Método 2: Servidor local
cd landing
python3 -m http.server 8000
# Abrir http://localhost:8000
```

---

## 🤝 Contribuir

¿Quieres mejorar el proyecto?

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

## 📝 Changelog

### v1.0.0 (2025-10-05)
- ✨ Lanzamiento inicial
- 🎓 3 cursos completos con 31 lecciones
- 📱 Diseño responsive
- 🎥 Sistema de videos
- 🎓 Certificados digitales

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 👥 Autores

- **Desarrollo Inicial** - Club de Legumbres Academy
- **Diseño UI/UX** - Equipo de Diseño VIP

---

## 🙏 Agradecimientos

- Comunidad de agricultores y expertos en legumbres
- Estudiantes beta testers
- Instructores colaboradores

---

## 📞 Soporte y Contacto

- **Email:** soporte@clublegumbres.com
- **Web:** https://clublegumbres.vercel.app
- **GitHub:** [Reportar un issue](../../issues)

---

## 🌟 ¿Te gusta el proyecto?

¡Dale una estrella ⭐ al repositorio!

---

<div align="center">

**Hecho con 💚 para la comunidad agrícola**

![Legumbres](https://img.shields.io/badge/🌱-Legumbres-success)
![Educación](https://img.shields.io/badge/📚-Educación-blue)
![VIP](https://img.shields.io/badge/👑-VIP-gold)

</div>
