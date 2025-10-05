#!/bin/bash

# Script de Deployment a Vercel
# Club de Legumbres - Capacitación Profesional VIP

echo "🌱 Club de Legumbres - Deployment Script"
echo "=========================================="
echo ""

# Verificar si Vercel CLI está instalado
if ! command -v vercel &> /dev/null
then
    echo "❌ Vercel CLI no está instalado."
    echo "📦 Instalando Vercel CLI..."
    npm install -g vercel
    echo "✅ Vercel CLI instalado!"
    echo ""
fi

# Login (si no está autenticado)
echo "🔐 Verificando autenticación..."
vercel whoami &> /dev/null
if [ $? -ne 0 ]; then
    echo "Por favor, inicia sesión en Vercel:"
    vercel login
fi

echo ""
echo "🚀 Iniciando deployment..."
echo ""

# Deployment
vercel --prod

echo ""
echo "✅ ¡Deployment completado!"
echo ""
echo "📱 Tu sitio está disponible en la URL mostrada arriba"
echo ""
echo "Credenciales de acceso:"
echo "  Email: usuario@demo.com"
echo "  Password: demo123"
echo ""
echo "🎉 ¡Disfruta tu plataforma educativa!"
