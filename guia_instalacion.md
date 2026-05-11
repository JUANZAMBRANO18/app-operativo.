# 📱 INSTALACIÓN DE LA PWA PORTAL RNMC

## ✅ Tu aplicación ahora es una PWA (Progressive Web App) completamente funcional

### 🔗 Acceso Directo:
**http://localhost:8080**

---

## 📲 CÓMO INSTALAR EN TU CELULAR

### Opción 1: Desde Chrome/Edge en Android
1. Abre **http://localhost:8080** en tu celular (misma red WiFi)
2. Toca el menú (⋮) superior derecho
3. Selecciona **"Instalar aplicación"** o **"Agregar a la pantalla principal"**
4. Confirma la instalación
5. ¡Listo! Aparecerá como una app nativa en tu launcher

### Opción 2: Desde Safari en iPhone
1. Abre **http://localhost:8080** en Safari
2. Toca el botón **Compartir** (cuadrado con flecha)
3. Selecciona **"Agregar al inicio"**
4. Confirma el nombre "Portal RNMC"
5. ¡Listo! Icono en tu pantalla de inicio

### Opción 3: Desde PC (Chrome/Edge)
1. Abre **http://localhost:8080**
2. Verás un ícono de instalación en la barra de direcciones (⬇️)
3. Haz clic en **"Instalar"**
4. La app se abrirá en ventana independiente

---

## 🌐 ACCESO DESDE CUALQUIER DISPOSITIVO

### En tu red local:
1. Obtén la IP de tu computadora:
   - Windows: `ipconfig` (busca IPv4)
   - Linux/Mac: `ifconfig` o `ip addr`
2. En tu celular, abre: **http://[IP-computadora]:8080**
   - Ejemplo: http://192.168.1.100:8080

---

## 🎯 CARACTERÍSTICAS PWA

✅ **Funciona offline** - Una vez instalada, no necesita internet
✅ **Icono en pantalla principal** - Como app nativa
✅ **Pantalla completa** - Sin barra del navegador
✅ **Notificaciones push** - Sistema toast integrado
✅ **Actualización automática** - Service Worker gestiona caché
✅ **Ligera** - ~50KB total
✅ **Responsive** - Adaptable a cualquier dispositivo

---

## 🛠️ CREAR APK REAL (Opcional)

Si necesitas un archivo .APK para distribuir:

### Método 1: PWABuilder (Recomendado)
1. Ve a https://www.pwabuilder.com
2. Ingresa tu URL pública (debes subir la app a un hosting)
3. Descarga el paquete APK generado
4. Instala en tu Android

### Método 2: Bubblewrap (Google)
```bash
npm install -g @bubblewrap/cli
bubblewrap init --manifest https://tudominio.com/manifest.json
bubblewrap build
```

### Método 3: Hosting Gratuito + APK
1. Sube los archivos a:
   - **Vercel** (vercel.com)
   - **Netlify** (netlify.com)
   - **GitHub Pages** (pages.github.com)
2. Usa PWABuilder con tu URL pública
3. Descarga el APK

---

## 📁 ARCHIVOS CREADOS

```
/workspace/
├── index.html          (Página principal)
├── manifest.json       (Configuración PWA)
├── sw.js              (Service Worker - Offline)
├── css/
│   └── styles.css     (Estilos)
├── js/
│   └── app.js         (Funcionalidad)
├── icons/
│   ├── icon-192.png   (Icono PWA)
│   └── icon-512.png   (Icono PWA)
└── guia_instalacion.md (Esta guía)
```

---

## ✅ VERIFICACIÓN

Para verificar que todo funciona:
1. Abre http://localhost:8080
2. Abre Consola del navegador (F12)
3. Deberías ver: "ServiceWorker registrado"
4. Todos los botones deben mostrar notificaciones
5. El reloj debe actualizarse cada segundo

¡Tu Portal RNMC está listo para usar como app móvil! 🚀
