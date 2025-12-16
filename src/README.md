# 💍 Boda de Santi y Elena - 12.04.2026

Landing page elegante para la boda de Santiago y Elena, con animaciones tipo GSAP, formulario de confirmación de asistencia integrado con Google Sheets, y galería de fotos dinámica desde Google Drive.

## ✨ Características

- 🎨 Diseño elegante y sofisticado con tipografía Roboto Slab
- 🌊 Animaciones suaves de scroll con Motion (Framer Motion)
- 📱 Completamente responsive con menú hamburguesa en móvil
- 📝 Formulario de RSVP conectado a Google Sheets
- 🖼️ Carrousel dinámico de fotos desde Google Drive
- 🗺️ Integración con Google Maps
- 💬 Botones de contacto directo por WhatsApp
- 🚀 Despliegue automático en GitHub Pages

## 🚀 Inicio Rápido

### Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de la compilación
npm run preview
```

## 📋 Configuración

### 1. Google Apps Script (Formulario + Imágenes)

Sigue las instrucciones detalladas en [`INSTRUCCIONES_APPS_SCRIPT.md`](./INSTRUCCIONES_APPS_SCRIPT.md)

**Resumen:**
1. Crea una Google Sheet para guardar las confirmaciones
2. Configura el Apps Script con el código proporcionado
3. Crea una carpeta en Google Drive con las fotos del carrousel
4. Actualiza las URLs en `/App.tsx`:
   - `GOOGLE_APPS_SCRIPT_URL`
   - `GOOGLE_DRIVE_FOLDER_ID`

### 2. GitHub Pages

Sigue las instrucciones detalladas en [`INSTRUCCIONES_GITHUB_PAGES.md`](./INSTRUCCIONES_GITHUB_PAGES.md)

**Resumen:**
1. Configura los permisos de GitHub Actions (Settings → Actions → General)
2. Actualiza el `base` en `vite.config.ts` con el nombre de tu repo
3. Haz push a GitHub
4. Ve a Settings → Pages y configura la fuente como "gh-pages"
5. Tu sitio estará en `https://TU-USUARIO.github.io/TU-REPO/`

## 🛠️ Tecnologías

- **React 18** - Framework UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Motion** (Framer Motion) - Animaciones
- **Tailwind CSS** - Estilos
- **Lucide React** - Iconos
- **Sonner** - Notificaciones toast
- **Google Apps Script** - Backend para formulario
- **Google Drive API** - Almacenamiento de imágenes

## 📁 Estructura del Proyecto

```
/
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions workflow
├── components/
│   ├── figma/
│   │   └── ImageWithFallback.tsx
│   └── ui/                 # Componentes UI
├── imports/                # Componentes importados de Figma
├── src/
│   └── main.tsx            # Punto de entrada
├── styles/
│   └── globals.css         # Estilos globales
├── assets/                 # Imágenes locales
├── App.tsx                 # Componente principal
├── index.html              # HTML principal
├── vite.config.ts          # Configuración de Vite
├── package.json            # Dependencias
└── tsconfig.json           # Configuración de TypeScript
```

## 📝 Personalización

### Cambiar URLs de WhatsApp

Edita en `/App.tsx`:
```typescript
const WHATSAPP_URL_SANTI = "https://wa.me/34637101282";
const WHATSAPP_URL_ELENA = "https://wa.me/34619593934";
```

### Cambiar ubicación de la ceremonia

Edita en `/App.tsx`:
```typescript
const GOOGLE_MAPS_ADDRESS = "P.º de la Virgen del Puerto, 4, Centro, 28013 Madrid";
```

### Cambiar fecha de la boda

Busca y reemplaza todas las instancias de `12-04-2026` en `/App.tsx`

## 🎨 Colores del Tema

- **Primario**: `#452746` (Morado oscuro)
- **Hover**: `#5a3358` (Morado medio)
- **Fondo suave**: `#f5eff5` (Rosa pálido)
- **Fondo degradado**: `#faf7fa` (Rosa muy pálido)

## 📧 Contacto

Para cualquier problema o pregunta sobre la configuración, consulta los archivos de instrucciones:
- [`INSTRUCCIONES_APPS_SCRIPT.md`](./INSTRUCCIONES_APPS_SCRIPT.md)
- [`INSTRUCCIONES_GITHUB_PAGES.md`](./INSTRUCCIONES_GITHUB_PAGES.md)

---

**Hecho con ❤️ para Santi y Elena**
