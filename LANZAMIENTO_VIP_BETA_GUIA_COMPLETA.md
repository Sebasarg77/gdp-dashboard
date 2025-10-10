# 🚀 GUÍA COMPLETA: LANZAMIENTO VIP BETA
## Todo lo que necesitas para lanzar esta semana con tus 4 alumnos VIP

**Fecha objetivo:** Próximos 7 días  
**Alumnos:** 4 VIP Beta (Certificación Calidad Legumbres 2025)  
**Código:** VIP_BETA_2025 (100% OFF x 6 meses)

---

## 📋 CHECKLIST GENERAL (Marca lo que completes)

```
DÍA 1-2 (HOY Y MAÑANA):
□ Convertir manuales a PDF
□ Crear código VIP_BETA_2025 en Firestore
□ Crear 4 usuarios en Firebase
□ Enviar emails de bienvenida
□ Hacer onboarding personalizado

DÍA 3-7 (RESTO DE SEMANA):
□ Monitorear uso de plataforma
□ Dar soporte activo
□ Recopilar feedback inicial
□ Ajustar según comentarios

SIGUIENTE SEMANA:
□ Testimonios y casos de éxito
□ Mejoras basadas en feedback
□ Preparación para lanzamiento público
```

---

## 📄 PASO 1: CONVERTIR MANUALES A PDF

### **OPCIÓN A: Pandoc (Recomendada si ya lo tienes)**

```bash
# Ir a la carpeta de materiales
cd materiales_cursos

# Convertir cada manual
pandoc curso1_fundamentos/MANUAL_COMPLETO_Fundamentos_Legumbres_Premium.md \
  -o Curso1_Fundamentos_Legumbres_Premium.pdf \
  --pdf-engine=xelatex \
  -V geometry:margin=1in

pandoc curso2_calidad/MANUAL_COMPLETO_Gestion_Calidad_Control_Avanzado.md \
  -o Curso2_Gestion_Calidad_Control_Avanzado.pdf \
  --pdf-engine=xelatex \
  -V geometry:margin=1in

pandoc curso3_marketing/INDICE_Curso_Marketing_Exportacion.md \
  -o Curso3_Marketing_Exportacion_Internacional.pdf \
  --pdf-engine=xelatex \
  -V geometry:margin=1in
```

### **OPCIÓN B: Markdown to PDF Online (Más rápido)**

1. Ve a: **https://www.markdowntopdf.com/**
2. Abre cada archivo `.md` en GitHub
3. Copia TODO el contenido
4. Pégalo en markdowntopdf.com
5. Click "Convert to PDF"
6. Descarga

**Repite 3 veces** (uno por cada curso)

### **OPCIÓN C: Typora (Si quieres PDFs lindos)**

1. Descarga Typora: https://typora.io/ (tiene trial gratis)
2. Abre cada archivo `.md`
3. File → Export → PDF
4. Listo

---

## 🔥 PASO 2: CREAR CÓDIGO VIP_BETA_2025 EN FIRESTORE

### **Crear colección de cupones:**

1. **Firebase Console** → **Firestore Database**
2. Click **"Start collection"** o **"+ Add collection"**
3. **Collection ID:** `coupons`
4. Click **"Next"**

5. **Add document:**
   ```
   Document ID: VIP_BETA_2025
   
   Field 1:
   - Field: code
   - Type: string
   - Value: VIP_BETA_2025
   
   Field 2:
   - Field: discount_percent
   - Type: number
   - Value: 100
   
   Field 3:
   - Field: duration_months
   - Type: number
   - Value: 6
   
   Field 4:
   - Field: max_uses
   - Type: number
   - Value: 4
   
   Field 5:
   - Field: current_uses
   - Type: number
   - Value: 0
   
   Field 6:
   - Field: applicable_plans
   - Type: array
   - Value: ["vip_premium"]
   
   Field 7:
   - Field: valid_until
   - Type: timestamp
   - Value: [31 de Marzo 2025, 23:59]
   
   Field 8:
   - Field: description
   - Type: string
   - Value: VIP Beta - Certificación Calidad Legumbres 2025
   
   Field 9:
   - Field: active
   - Type: boolean
   - Value: true
   ```

6. Click **"Save"**

---

## 👥 PASO 3: CREAR 4 USUARIOS VIP BETA

### **Por cada alumno (repetir 4 veces):**

#### **3.1 - Crear usuario en Authentication:**

1. **Firebase Console** → **Authentication** → **Users**
2. Click **"Add user"**
3. Completa:
   ```
   Email: alumno1@ejemplo.com
   Password: TempPass2025! (luego cada alumno la cambia)
   ```
4. Click **"Add user"**
5. **⚠️ COPIA EL USER UID** (lo necesitas en siguiente paso)

#### **3.2 - Crear documento en Firestore:**

1. **Firestore Database** → Colección **"users"**
2. Click **"Add document"**
3. **Document ID:** [PEGA EL USER UID que copiaste]
4. Agregar campos:

```
Field 1 - email:
- Type: string
- Value: alumno1@ejemplo.com

Field 2 - name:
- Type: string
- Value: Nombre Real del Alumno

Field 3 - role:
- Type: string
- Value: student

Field 4 - plan:
- Type: string
- Value: vip_premium

Field 5 - coupon_used:
- Type: string
- Value: VIP_BETA_2025

Field 6 - access_until:
- Type: timestamp
- Value: [6 meses desde hoy - ej: 9 Julio 2025]

Field 7 - phone:
- Type: string
- Value: +54 9 11 xxxx-xxxx (si lo tienes)

Field 8 - whatsapp:
- Type: string
- Value: +54 9 11 xxxx-xxxx

Field 9 - company:
- Type: string
- Value: Su Empresa (si lo sabes)

Field 10 - position:
- Type: string
- Value: Su Cargo

Field 11 - country:
- Type: string
- Value: AR (o el país que corresponda)

Field 12 - city:
- Type: string
- Value: Su Ciudad

Field 13 - bio:
- Type: string
- Value: (dejar vacío, lo completa el alumno)

Field 14 - profilePicture:
- Type: string
- Value: (dejar vacío)

Field 15 - created_at:
- Type: timestamp
- Value: [Click en el reloj - timestamp actual]

Field 16 - updated_at:
- Type: timestamp
- Value: [Click en el reloj - timestamp actual]

Field 17 - lastLogin:
- Type: timestamp
- Value: [Click en el reloj - timestamp actual]

Field 18 - beta_tester:
- Type: boolean
- Value: true

Field 19 - founding_member:
- Type: boolean
- Value: true
```

5. Click **"Save"**

**REPETIR para los 4 alumnos** (cambiando email, nombre, etc.)

---

## 📧 PASO 4: ENVIAR EMAIL DE BIENVENIDA

### **Template de Email (copia/pega y personaliza):**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Asunto: 🌱 Bienvenido al Club de Legumbres VIP - Acceso Exclusivo

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hola [NOMBRE],

¡Felicidades y bienvenido al Club de Legumbres VIP! 🎉

Como reconocimiento a tu participación en la Certificación de Calidad 
de Legumbres 2025, tienes acceso GRATUITO y COMPLETO a nuestra nueva 
plataforma de capacitación profesional.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔐 TUS CREDENCIALES DE ACCESO:

🌐 Plataforma: https://[TU-DOMINIO-VERCEL].vercel.app
📧 Usuario: [EMAIL DEL ALUMNO]
🔑 Contraseña: TempPass2025!

⚠️ IMPORTANTE: Cambia tu contraseña al primer ingreso
(Click en tu avatar → Mi Perfil → Configuración)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎁 LO QUE TIENES INCLUIDO (100% GRATIS por 6 meses):

✅ Acceso completo a 3 cursos profesionales:
   
   📘 Curso 1: Fundamentos de Legumbres Premium (40 horas)
      - Clasificación y tipos de legumbres
      - Propiedades nutricionales
      - Almacenamiento y conservación
      
   📙 Curso 2: Gestión de Calidad y Control Avanzado (45 horas)
      - ISO 9001 + HACCP
      - Tecnologías 2025 (NIR, blockchain, IA)
      - Auditorías y mejora continua
      
   📗 Curso 3: Marketing y Exportación Internacional (50 horas)
      - Marketing digital B2B
      - Logística internacional
      - Negociación cross-cultural

✅ Material descargable en PDF de cada curso
✅ Certificados digitales oficiales al completar
✅ Soporte prioritario vía WhatsApp/Telegram
✅ Actualizaciones y nuevo contenido incluido

Valor total: USD 297
Tu inversión: USD 0 (GRATIS por 6 meses) 🎁

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 PRÓXIMOS PASOS:

1. Ingresa a la plataforma con tus credenciales
2. Completa tu perfil (agrega tu info profesional)
3. Explora los 3 cursos disponibles
4. Descarga los manuales en PDF
5. Empieza con el curso que más te interese

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 ¿QUÉ NECESITAMOS DE TI?

Como miembro fundador del Club de Legumbres VIP, tu opinión es 
invaluable para nosotros. Durante estos 6 meses:

1. ✅ Usa la plataforma libremente
2. ✅ Completa los cursos que te interesen
3. ✅ Déjanos saber qué te gusta y qué mejorarías
4. ✅ (Opcional pero apreciado) Un testimonio después de tu primer curso

No hay obligación, solo queremos que disfrutes el contenido y nos 
ayudes a mejorarlo con tu feedback honesto.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎁 BONUS ESPECIAL FOUNDING MEMBER:

Después de tus 6 meses gratuitos, si decides continuar con nosotros 
y nos dejas un testimonio (video o texto), tendrás acceso PERMANENTE 
con 80% de descuento:

Regular: USD 197/año
Tu precio Founding Member: USD 47/año (de por vida)

Además recibirás:
🏆 Badge especial "Founding Member" en tu perfil
🌟 Tu historia/testimonio en nuestra web (si autorizas)
🎯 Acceso anticipado a nuevas features
💎 Beneficios exclusivos permanentes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📞 SOPORTE:

💬 WhatsApp: https://bit.ly/Soporte_CL
📱 Telegram: @ClubLegumbresVIP

Horario: Lunes a Viernes, 9:00 - 18:00 hs (GMT-3)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

¡Gracias por ser parte de nuestro lanzamiento!

Estamos emocionados de tenerte en el Club de Legumbres VIP y 
esperamos que este contenido te ayude a llevar tu negocio/carrera 
al siguiente nivel.

¡Éxitos! 🚀

MBA Sebastián Ces
Fundador - Club de Legumbres
Instructor Certificación Profesional

💬 WhatsApp: https://bit.ly/Soporte_CL
📱 Telegram: @ClubLegumbresVIP

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

P.D. - Si tienes cualquier pregunta o problema técnico, no dudes en 
contactarme por WhatsApp. Respondo personalmente todas las consultas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 👤 PASO 5: CREAR LOS 4 USUARIOS (Guía detallada)

### **ALUMNO 1:**

#### A. Firebase Authentication:
1. Firebase Console → Authentication → Users → **"Add user"**
2. Email: `alumno1@ejemplo.com` (reemplaza con email real)
3. Password: `VipBeta2025!`
4. **Copiar User UID** (ej: `Ab3Xy9KlMnPqRst1uvWx2yZ`)

#### B. Firestore Document:
1. Firestore Database → Collection `users` → **"Add document"**
2. Document ID: `[PEGAR USER UID]`
3. Agregar 19 campos (ver estructura arriba)
4. Específicos para este alumno:
   - `name`: "Juan Pérez" (nombre real)
   - `email`: "alumno1@ejemplo.com"
   - `plan`: "vip_premium"
   - `coupon_used`: "VIP_BETA_2025"
   - `access_until`: [9 Julio 2025]
   - `beta_tester`: true
   - `founding_member`: true
5. **Save**

#### C. Enviar credenciales:
- Copia el template de email de arriba
- Personaliza con su nombre
- Envía por email o WhatsApp

**REPETIR para alumnos 2, 3 y 4**

---

## 📲 PASO 6: ONBOARDING PERSONALIZADO (Opcional pero recomendado)

### **Llamada/Video de 15 minutos con cada uno:**

**Guión de onboarding:**

```
"Hola [Nombre], ¿cómo estás?

Te contacto porque ya está activo tu acceso VIP al Club de Legumbres.

Te quería hacer una intro rápida de 10-15 minutos para que sepas 
cómo usar la plataforma y aprovecharla al máximo.

¿Tienes tiempo ahora o prefieres que agendemos?

[Durante la llamada]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BIENVENIDA (2 min)
   - Agradecimiento por ser beta tester
   - Importancia de su feedback

2. TOUR PLATAFORMA (5 min)
   - Cómo hacer login
   - Navegación: Dashboard, cursos, perfil
   - Cómo descargar PDFs
   - Dónde ver certificados

3. CONTENIDO (3 min)
   - 3 cursos disponibles (135 horas)
   - Recomendación: Empezar por Curso 1 o el que le interese más
   - Manuales descargables
   - Certificados al completar

4. EXPECTATIVAS (3 min)
   - Acceso gratis 6 meses
   - Pedido de feedback honesto
   - Sin compromiso, solo su opinión
   - (Opcional) Testimonio al final si le gusta

5. SOPORTE (2 min)
   - WhatsApp y Telegram para consultas
   - Respuesta en <24 horas
   - Grupo VIP (opcional, si quieres crearlo)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

¿Alguna pregunta antes de empezar?

¡Éxitos y estamos en contacto!
```

---

## 📊 PASO 7: MONITOREO Y SEGUIMIENTO

### **Checklist Semanal:**

**Semana 1:**
```
□ Lunes: Enviar bienvenida + credenciales
□ Martes: Verificar que todos hayan hecho login
□ Miércoles: Check-in rápido (¿cómo van?)
□ Jueves: Responder dudas/problemas
□ Viernes: Ver progreso en Firebase Admin Panel
□ Fin de semana: Preparar ajustes si hay feedback
```

**Semana 2-4:**
```
□ Lunes: Check-in semanal (progreso, dudas)
□ Miércoles: Soporte activo
□ Viernes: Revisar estadísticas
□ Cada 2 semanas: Pedir feedback específico
```

### **Preguntas para Feedback (enviar por WhatsApp):**

**Después de 1 semana:**
```
Hola [Nombre],

¿Cómo vas con la plataforma? 😊

Me encantaría saber:
1. ¿Pudiste acceder sin problemas?
2. ¿Qué curso empezaste primero?
3. ¿El contenido está claro?
4. ¿Algo que mejorarías?

¡Sin compromiso! Solo quiero asegurarme de que todo esté genial.

¡Gracias!
```

**Después de completar primer curso:**
```
¡Felicitaciones por completar [Nombre del Curso]! 🎉

¿Te puedo hacer unas preguntas rápidas?

1. Del 1 al 10, ¿cómo calificarías el contenido?
2. ¿Qué fue lo que MÁS te gustó?
3. ¿Qué agregarías o cambiarías?
4. ¿Aplicaste algo en tu trabajo/negocio?
5. ¿Recomendarías este curso a colegas?

(Opcional) ¿Te animarías a grabar un video de 1-2 minutos 
contando tu experiencia? Sería de GRAN ayuda para nosotros.

¡Gracias por tu tiempo!
```

---

## 📈 PASO 8: MÉTRICAS A MONITOREAR

### **En Firebase Admin Panel:**

```
□ Total usuarios activos (meta: 4/4)
□ Último login de cada uno (detectar inactivos)
□ Cursos iniciados por alumno
□ Progreso promedio
□ Certificados obtenidos
```

### **Fuera de la plataforma:**

```
□ Respuestas a emails/mensajes (engagement)
□ Feedback cualitativo (comentarios)
□ Problemas técnicos reportados
□ Solicitudes de features
□ Testimonios obtenidos (meta: 2-4)
```

---

## 🎁 PASO 9: INCENTIVOS PARA TESTIMONIOS

### **Propuesta de Testimonios (después de 3-4 semanas):**

**WhatsApp Message:**
```
Hola [Nombre],

Espero que estés disfrutando el Club de Legumbres VIP 😊

Tengo una propuesta para ti:

🎁 BENEFICIO FOUNDING MEMBER PERMANENTE:

Si nos ayudas con un testimonio (video 1-2 min o texto), 
te doy acceso PERMANENTE con 80% de descuento:

• Precio regular: USD 197/año
• Tu precio de por vida: USD 47/año 
• Badge especial "Founding Member"
• Acceso prioritario a nuevas features

El testimonio puede ser simple:
- Tu nombre y empresa
- Qué curso tomaste
- Qué aprendiste o aplicaste
- Por qué lo recomendarías

No tiene que ser perfecto, solo honesto 😊

¿Te animas? Sería de GRAN ayuda para nosotros.

¡Gracias!
```

### **Formato de Testimonio Sugerido:**

**Video (1-2 minutos):**
```
"Hola, soy [Nombre], [Cargo] en [Empresa].

Tomé el curso de [Nombre Curso] en el Club de Legumbres VIP 
y la verdad que superó mis expectativas.

[Lo que más te gustó del curso]

[Algo que aprendiste o aplicaste]

Lo recomendaría a cualquier profesional del sector porque 
[razón específica].

¡Gracias Club de Legumbres!"
```

**Texto:**
```
"El curso de [Nombre] me ayudó a [beneficio concreto]. 
El contenido es muy completo y práctico. Lo apliqué en 
[situación real] con excelentes resultados. 
Totalmente recomendado."

- [Nombre]
  [Cargo], [Empresa]
  [País]
```

---

## ⏰ TIMELINE COMPLETO (7 DÍAS)

```
┌──────────────────────────────────────────────────────┐
│  LUNES (Día 1)                                      │
├──────────────────────────────────────────────────────┤
│  🔄 Convertir manuales a PDF                        │
│  🔄 Crear código VIP_BETA_2025 en Firestore         │
│  ⏰ Tiempo: 2-3 horas                               │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│  MARTES (Día 2)                                     │
├──────────────────────────────────────────────────────┤
│  👤 Crear 4 usuarios en Firebase                    │
│  📧 Enviar emails de bienvenida                     │
│  📱 Enviar mensaje WhatsApp confirmación            │
│  ⏰ Tiempo: 2 horas                                 │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│  MIÉRCOLES (Día 3)                                  │
├──────────────────────────────────────────────────────┤
│  ✅ Verificar que todos hicieron login              │
│  💬 Onboarding personalizado (4 llamadas 15 min)   │
│  📊 Check inicial: ¿problemas técnicos?            │
│  ⏰ Tiempo: 2 horas                                 │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│  JUEVES-VIERNES (Días 4-5)                          │
├──────────────────────────────────────────────────────┤
│  👀 Monitoreo pasivo (usar plataforma)             │
│  💬 Soporte reactivo (responder consultas)         │
│  📈 Ver analytics en Firebase                       │
│  ⏰ Tiempo: 1 hora/día                              │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│  FIN DE SEMANA (Días 6-7)                           │
├──────────────────────────────────────────────────────┤
│  📝 Recopilar feedback de la semana                 │
│  🔧 Planear ajustes necesarios                      │
│  📊 Análisis: ¿qué funciona? ¿qué no?              │
│  ⏰ Tiempo: 2 horas                                 │
└──────────────────────────────────────────────────────┘
```

---

## 🎯 OBJETIVOS SEMANA 1 (VIP BETA)

### **Mínimos Aceptables:**

```
□ 4/4 usuarios creados exitosamente
□ 4/4 recibieron credenciales
□ 4/4 hicieron login al menos 1 vez
□ 3/4 exploraron al menos 1 curso
□ 2/4 descargaron al menos 1 PDF
□ 0 problemas técnicos críticos
□ Feedback inicial recopilado
```

### **Ideal:**

```
□ 4/4 completaron onboarding
□ 4/4 editaron su perfil
□ 3/4 iniciaron Curso 1
□ 2/4 completaron Módulo 1
□ Feedback positivo mayoritario
□ 1-2 testimonios espontáneos
□ Engagement alto (logins diarios)
```

---

## 🚀 DESPUÉS DE SEMANA 1

### **Semana 2-4: Refinamiento**
- Implementar cambios basados en feedback
- Agregar features solicitadas
- Mejorar contenido específico
- Dar soporte continuo

### **Semana 5-8: Preparación Lanzamiento Público**
- Recopilar testimonios formales
- Documentar casos de éxito
- Diseñar materiales en Canva Pro
- Integrar sistema de pagos (Stripe + MP)
- Crear página de ventas

### **Semana 9+: Lanzamiento Público**
- Landing page optimizada
- Testimonios VIP Beta destacados
- Sistema de pagos automático
- Campaña de marketing
- ¡A monetizar! 💰

---

## 💡 CONSEJOS PRO

### **Para máximo engagement:**

1. **Crea grupo de WhatsApp VIP Beta** (opcional)
   - Solo tus 4 beta + tú
   - Espacio para preguntas
   - Anuncios de nuevas features
   - Sentido de comunidad

2. **Gamificación:**
   - "Primer alumno en completar Curso 1 → Certificado Elite gratis"
   - "Más activo de la semana → Mención especial"

3. **Incentivos para feedback:**
   - Por cada feedback detallado → Extensión +1 mes gratis
   - Por testimonio en video → Acceso de por vida a USD 47/año

4. **Comunicación regular:**
   - 1 email/mensaje semanal (no spam, valor)
   - Comparte tips rápidos
   - Anuncia nuevo contenido

---

## ✅ CHECKLIST FINAL ANTES DE LANZAR

```
CONTENIDO:
□ Manuales convertidos a PDF
□ PDFs subidos a plataforma (o listos para compartir)
□ Verificar links de descarga funcionen

CONFIGURACIÓN FIREBASE:
□ Código VIP_BETA_2025 creado en Firestore
□ 4 usuarios creados en Authentication
□ 4 documentos creados en Firestore (users collection)
□ Verificar reglas de seguridad activas

COMUNICACIÓN:
□ Email de bienvenida listo
□ WhatsApp preparado (https://bit.ly/Soporte_CL activo)
□ Telegram activo (@ClubLegumbresVIP)

PLATAFORMA:
□ Deploy actualizado en Vercel
□ Perfil funciona sin errores
□ Certificados se generan correctamente
□ Navegación fluida

PLAN DE SEGUIMIENTO:
□ Calendario de check-ins semanal
□ Preguntas de feedback preparadas
□ Sistema de soporte listo (responder en <24h)
```

---

## 🎉 ¡ESTÁS LISTO!

Con esta guía tienes **TODO** para lanzar exitosamente con tus 4 VIP Beta.

**Próximos pasos:**
1. Convierte manuales a PDF (30 min)
2. Crea código cupón (5 min)
3. Crea 4 usuarios (40 min = 10 min c/u)
4. Envía credenciales (10 min)
5. ¡LANZADO! 🚀

**Total:** ~2 horas y estás en el aire con tus primeros alumnos VIP.

---

**¿Alguna duda? ¡Pregunta lo que necesites!** 😊
