# Master de Actualización en Calidad Comercial de Cereales — Landing

Este repositorio incluye una landing estática y personalizable con CTA a WhatsApp para captar interesados del programa Master.

## Estructura

- `landing/index.html`: landing lista para publicar
- `landing/styles.css`: estilos responsive y oscuros

## Personalización rápida (2 minutos)

1) Reemplazá el número de WhatsApp en los enlaces:
   - Buscá `5491112345678` en `landing/index.html` y cambiá por tu número en formato internacional sin `+`.
   - Podés ajustar los textos prellenados (`text=...`).

2) Ajustá precios y planes:
   - Sección `#precio` en `landing/index.html`. Editá valores, cuotas y beneficios.

3) Fechas y calendario:
   - Sección `#calendario`. Actualizá inicio, cierre e hitos en el HTML.

4) Marca y metadatos:
   - `<title>`, `meta description` y `og:*` en el `<head>` de `index.html`.
   - Cambiá `Instituto • Calidad Comercial` por tu marca.

## Publicación

- Publicá la carpeta `landing/` en cualquier hosting estático (Netlify, Vercel, GitHub Pages, S3, etc.).
- Archivo de entrada: `landing/index.html`.

## Copy de CTA sugeridos

- "Reservá tu lugar ahora"
- "Hablá con un asesor por WhatsApp"
- "Quiero el precio de lanzamiento"
- "Descargar guía gratis"

Mensaje prellenado recomendado para WhatsApp:

```
Hola, quiero info del Master de Actualización en Calidad Comercial de Cereales.
```

## Soporte de contenidos

El programa está diseñado para Peritos Clasificadores de Cereales que buscan actualizarse con enfoque práctico y comercial. Incluye:

- 10 módulos avanzados (normativa, muestreo, micotoxinas, calibración, negociación, BI)
- 2 sesiones en vivo, capstone, plantillas y simuladores
- Bonos por tiempo/cupo para urgencia y conversión

## Próximos pasos sugeridos

- Integrar formulario alternativo (Typeform/Google Forms) como backup al CTA de WhatsApp.
- Añadir analítica (GA4) y píxeles publicitarios si corresponde.
- Crear variante A/B del héroe (titular + subtítulo + CTA) para testeo.
