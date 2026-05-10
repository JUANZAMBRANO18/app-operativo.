# APP OPERATIVO - Aplicación Web Progresiva (PWA)

## 📱 ¿Qué es esta aplicación?

Esta es una **Aplicación Web Progresiva (PWA)** que funciona como:
- ✅ **Aplicación web** - Accesible desde cualquier navegador
- ✅ **App instalable** - Se puede instalar en tu celular como una app nativa
- ✅ **Funciona offline** - Una vez cargada, funciona sin internet

## 🚀 Cómo usarla

### Opción 1: Como aplicación web (Recomendado para celular)

1. **Abre el archivo `index.html`** en tu navegador (Chrome recomendado)
2. **En Android:**
   - Toca los 3 puntos del menú
   - Selecciona "Agregar a la pantalla principal" o "Instalar aplicación"
3. **En iPhone:**
   - Toca el botón compartir
   - Selecciona "Agregar al inicio"

¡Listo! Ahora tendrás un ícono en tu pantalla de inicio como cualquier app.

### Opción 2: Servidor local (para desarrollo)

Si quieres probarla con todas las funciones PWA:

```bash
# Con Python (ya instalado en la mayoría de sistemas)
python -m http.server 8000

# O con Node.js
npx serve .
```

Luego abre `http://localhost:8000` en tu navegador.

## 📁 Estructura del proyecto

```
/workspace/
├── index.html          # Página principal
├── manifest.json       # Configuración PWA
├── css/
│   └── styles.css      # Estilos
└── js/
    ├── app.js          # Lógica de la aplicación
    └── sw.js           # Service Worker (funciona offline)
```

## 🎯 Características

- ⏰ Reloj en tiempo real
- 🔍 Búsqueda integrada
- 🎮 Simulador táctico
- 📊 Dashboard interactivo
- 💾 Funciona sin conexión
- 📱 Diseño responsive para móviles

## 📦 Para crear APK (Android)

Si deseas convertir esto en un APK instalable:

### Usando Bubblewrap (Recomendado)
```bash
npm install -g @bubblewrap/cli
bubblewrap init --manifest https://tu-sitio.com/manifest.json
bubblewrap build
```

### Usando PWABuilder
1. Ve a [pwabuilder.com](https://pwabuilder.com)
2. Ingresa la URL de tu aplicación
3. Descarga el paquete Android

## 🔧 Personalización

Para cambiar el nombre o ícono de la app, edita `manifest.json`:
- `name`: Nombre completo de la app
- `short_name`: Nombre corto (en la pantalla de inicio)
- `theme_color`: Color de la barra de estado

## 📞 Soporte

La aplicación es completamente funcional y lista para usar. ¡Disfrútala!
