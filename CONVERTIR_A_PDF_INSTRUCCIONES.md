# 📄 INSTRUCCIONES: CONVERTIR MANUALES A PDF
## 3 Métodos Simples (Elige el que prefieras)

---

## 🎯 MANUALES A CONVERTIR:

Los archivos están en tu repositorio GitHub:

1. **Curso 1:** `materiales_cursos/curso1_fundamentos/MANUAL_COMPLETO_Fundamentos_Legumbres_Premium.md`
2. **Curso 2:** `materiales_cursos/curso2_calidad/MANUAL_COMPLETO_Gestion_Calidad_Control_Avanzado.md`
3. **Curso 3:** `materiales_cursos/curso3_marketing/INDICE_Curso_Marketing_Exportacion.md`

---

## ⚡ MÉTODO 1: MARKDOWN TO PDF ONLINE (Más Rápido - 10 minutos)

### **Pasos:**

1. **Abre GitHub en tu navegador:**
   - https://github.com/Sebasarg77/gdp-dashboard
   - Navega a `materiales_cursos` → `curso1_fundamentos`
   - Click en `MANUAL_COMPLETO_Fundamentos_Legumbres_Premium.md`

2. **Ver el archivo en modo "Raw":**
   - Click botón **"Raw"** (arriba a la derecha del archivo)
   - Selecciona TODO el contenido (Ctrl+A)
   - Copia (Ctrl+C)

3. **Convertir a PDF:**
   - Ve a: **https://www.markdowntopdf.com/**
   - Pega el contenido (Ctrl+V)
   - Click **"Convert to PDF"**
   - Espera 10-30 segundos
   - Click **"Download PDF"**

4. **Renombrar archivo:**
   - Descarga se llamará "output.pdf"
   - Renombra a: `Curso1_Fundamentos_Legumbres_Premium.pdf`

5. **REPETIR para los otros 2 cursos**

**Tiempo total:** ~10 minutos (3-4 min por archivo)

✅ **Ventaja:** Sin instalar nada, funciona en cualquier dispositivo

---

## 🔧 MÉTODO 2: TYPORA (Mejor Calidad - 15 minutos)

### **Instalación:**

1. Descarga Typora: **https://typora.io/**
2. Instala (Windows/Mac/Linux)
3. Trial gratis 15 días (o compra USD 14.99 licencia de por vida)

### **Conversión:**

1. **Descarga los manuales:**
   - GitHub → Code → Download ZIP
   - O clona: `git clone https://github.com/Sebasarg77/gdp-dashboard.git`

2. **Abre cada archivo `.md` con Typora**
   - Click derecho en archivo → Abrir con → Typora
   - O arrastra archivo a ventana Typora

3. **Exportar a PDF:**
   - File → Export → **PDF**
   - Elige ubicación y nombre
   - Click "Save"

4. **REPETIR para los 3 archivos**

**Tiempo total:** ~15 minutos

✅ **Ventaja:** PDFs con mejor formato, tabla de contenidos automática

---

## 💻 MÉTODO 3: PANDOC (Profesional - 20 minutos)

### **Instalación (una sola vez):**

**Windows:**
```
1. Descarga: https://pandoc.org/installing.html
2. Ejecuta instalador
3. Instala también MiKTeX (para PDFs): https://miktex.org/download
```

**Mac:**
```bash
brew install pandoc
brew install basictex
```

**Linux:**
```bash
sudo apt-get install pandoc texlive-xetex
```

### **Conversión:**

1. **Descarga el repositorio:**
   ```bash
   git clone https://github.com/Sebasarg77/gdp-dashboard.git
   cd gdp-dashboard/materiales_cursos
   ```

2. **Convertir cada manual:**
   ```bash
   # Curso 1
   pandoc curso1_fundamentos/MANUAL_COMPLETO_Fundamentos_Legumbres_Premium.md \
     -o Curso1_Fundamentos_Legumbres_Premium.pdf \
     --pdf-engine=xelatex \
     -V geometry:margin=1in \
     -V fontsize=11pt
   
   # Curso 2
   pandoc curso2_calidad/MANUAL_COMPLETO_Gestion_Calidad_Control_Avanzado.md \
     -o Curso2_Gestion_Calidad_Control_Avanzado.pdf \
     --pdf-engine=xelatex \
     -V geometry:margin=1in \
     -V fontsize=11pt
   
   # Curso 3
   pandoc curso3_marketing/INDICE_Curso_Marketing_Exportacion.md \
     -o Curso3_Marketing_Exportacion_Internacional.pdf \
     --pdf-engine=xelatex \
     -V geometry:margin=1in \
     -V fontsize=11pt
   ```

3. **Listo, PDFs generados en la misma carpeta**

**Tiempo total:** ~20 minutos (primera vez), ~5 minutos (después)

✅ **Ventaja:** Máxima calidad, totalmente customizable

---

## 📂 NOMBRES FINALES RECOMENDADOS:

```
✅ Curso1_Fundamentos_Legumbres_Premium.pdf (26 KB → ~1.5 MB en PDF)
✅ Curso2_Gestion_Calidad_Control_Avanzado.pdf (72 KB → ~3 MB en PDF)
✅ Curso3_Marketing_Exportacion_Internacional.pdf (11 KB → ~500 KB en PDF)
```

---

## 🎨 DESPUÉS: VERSIÓN CANVA PRO (Para lanzamiento público)

Cuando tengas tiempo (próxima semana), puedes crear versiones diseñadas:

```
VERSIÓN BETA (PDF simple):
→ Para tus 4 VIP Beta ahora
→ Validan contenido
→ Dan feedback

VERSIÓN PRO (Canva diseñado):
→ Mejoras con feedback VIP Beta
→ Diseño profesional impactante
→ Para lanzamiento público
→ Justifica precio premium USD 197-347
```

---

## ✅ PRÓXIMOS PASOS

1. **Elige un método** (recomiendo Método 1 si tienes prisa)
2. **Convierte los 3 manuales**
3. **Guárdalos** en una carpeta local
4. Cuando estén listos, **avísame** y te ayudo con:
   - Subirlos a la plataforma
   - Integrar links de descarga
   - Crear código cupón VIP_BETA_2025
   - Crear los 4 usuarios

---

**¿Empiezas con la conversión ahora o necesitas ayuda con algo más primero?** 😊
