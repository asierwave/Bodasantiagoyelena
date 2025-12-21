# 💍 Boda de Santi y Elena

Landing page elegante para la boda de Boda Elena y santi el 12-04-2026.

---

## 🚀 Despliegue automático a GitHub Pages

### Configuración inicial (solo una vez)

1. **Sube el código a GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Configura GitHub Pages**:
   - Ve a tu repositorio en GitHub
   - **Settings** → **Pages** (menú izquierdo)
   - **Source**: Deploy from a branch
   - **Branch**: `gh-pages` / `root`
   - **Save**

3. **Espera el despliegue** (2-3 minutos):
   - Ve a la pestaña **Actions**
   - Verás el workflow "Deploy to GitHub Pages"
   - Cuando termine ✅, tu sitio estará en: `https://tu-usuario.github.io/nombre-repo/`

### Despliegues posteriores

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Actualización"
git push origin main
```

GitHub Actions compilará automáticamente y actualizará la rama `gh-pages`.

### Configurar base URL

Si tu repo se llama por ejemplo `boda-santi-elena`, edita `/vite.config.ts` línea 10:

```typescript
base: '/boda-santi-elena/', // Cambia por el nombre de tu repo
```

Si usas un **dominio personalizado** (ej: `bodadesantiagoyelena.com`):
- Configúralo en **Settings → Pages → Custom domain**
- Cambia `base: '/'` en `/vite.config.ts`

---

## 📋 Requisitos previos

- **Node.js** versión 18 o superior - [Descargar](https://nodejs.org/)
- **npm** (viene con Node.js)
- Cuenta de **Google** (para Drive y Apps Script)
- Cuenta de **GitHub** (para despliegue)

---

## 🛠️ Desarrollo local

### 1. Instalar dependencias

Abre la terminal en la carpeta del proyecto:

```bash
npm install
```

### 2. Ejecutar en modo desarrollo

```bash
npm run dev
```

La web se abrirá en `http://localhost:5173`

### 3. Compilar para producción

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `/dist`

---

## 📸 Configurar Google Drive (Carrousel de fotos)

### Paso 1: Preparar la carpeta

1. Abre [Google Drive](https://drive.google.com)
2. Abre tu carpeta de fotos (la actual es: `1gDPI8Dqg2Xwxhc_m5Pcw1CwOhf37HCwi`)
3. **Haz clic derecho → Compartir**
4. Cambia a **"Cualquier persona con el enlace"**
5. Permiso: **"Lector"**
6. Guarda

### Paso 2: Cambiar carpeta (si quieres usar otra)

Si quieres usar una carpeta diferente:

1. Abre la carpeta en Google Drive
2. Copia el ID de la URL (la parte después de `/folders/`):
   ```
   https://drive.google.com/drive/folders/TU_ID_AQUI?usp=sharing
                                            ^^^^^^^^
   ```
3. Edita `/App.tsx` línea 13:
   ```typescript
   const GOOGLE_DRIVE_FOLDER_ID = "TU_ID_AQUI";
   ```

### Paso 3: Subir fotos

- Sube tus fotos a la carpeta
- Formatos: JPG, PNG, WEBP
- Recomendado: 10-15 fotos máximo

---

## 📝 Configurar Google Apps Script (Formulario)

### Paso 1: Crear Google Sheet

1. Crea una nueva hoja en [Google Sheets](https://sheets.google.com)
2. Nómbrala: **"Confirmaciones Boda"**
3. Primera fila (encabezados):

| Nombre | Email | Teléfono | Celiaco | Vegetariano | Intolerante Lactosa | Sin Preferencias | Sugerencia Canción | Fecha |

### Paso 2: Crear Apps Script

1. En la hoja → **Extensiones** → **Apps Script**
2. Borra el código por defecto
3. Pega este código:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.name,
      data.email,
      data.phone,
      data.celiac ? 'Sí' : 'No',
      data.vegetarian ? 'Sí' : 'No',
      data.lactoseIntolerant ? 'Sí' : 'No',
      data.noPreferences ? 'Sí' : 'No',
      data.songSuggestion || '',
      new Date().toLocaleString('es-ES')
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Datos guardados correctamente'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    const action = e.parameter.action;
    
    if (action === 'getImages') {
      const folderId = e.parameter.folderId;
      
      if (!folderId) {
        return ContentService.createTextOutput(JSON.stringify({
          success: false,
          error: 'No se proporcionó ID de carpeta'
        })).setMimeType(ContentService.MimeType.JSON);
      }
      
      const folder = DriveApp.getFolderById(folderId);
      const files = folder.getFiles();
      const imageUrls = [];
      
      while (files.hasNext()) {
        const file = files.next();
        const mimeType = file.getMimeType();
        
        if (mimeType.includes('image')) {
          const fileId = file.getId();
          const imageUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
          imageUrls.push(imageUrl);
        }
      }
      
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        images: imageUrls,
        count: imageUrls.length
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: 'Acción no válida'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Paso 3: Desplegar

1. Haz clic en **"Desplegar"** → **"Nueva implementación"**
2. Icono de engranaje ⚙️ → **"Aplicación web"**
3. Configuración:
   - Ejecutar como: **Yo**
   - Acceso: **Cualquier persona**
4. **Implementar**
5. **Autoriza** el acceso
6. **Copia la URL** que te da

### Paso 4: Configurar URL en el código

Edita `/App.tsx` línea 11:

```typescript
const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/TU_URL_AQUI/exec";
```

---

## 🎨 Personalización

### Cambiar fotos principales

Reemplaza estos archivos en `/assets/`:
- `fotoprincipal.jpeg` - Foto del header
- `fotoiglesia.jpeg` - Foto de Ceremonia

### Cambiar textos

Todo está en `/App.tsx`:

```typescript
// Línea 8: Dirección
const GOOGLE_MAPS_ADDRESS = "Tu dirección";

// Línea 9-10: WhatsApp
const WHATSAPP_URL_SANTI = "https://wa.me/34XXXXXXXXX";
const WHATSAPP_URL_ELENA = "https://wa.me/34XXXXXXXXX";
```

### Cambiar colores

Edita `/styles/globals.css` y busca `#452746` (color morado principal)

### Cambiar tipografía

En `/styles/globals.css`, cambia `Roboto+Slab` por otra fuente de [Google Fonts](https://fonts.google.com/)

---

## 📁 Estructura del proyecto

```
/
├── assets/                    # Imágenes principales
├── components/                # Componentes React
├── src/
│   └── main.tsx              # Entrada de React
├── styles/
│   └── globals.css           # Estilos globales
├── App.tsx                    # ⭐ Componente principal
├── index.html
├── package.json
└── vite.config.ts
```

---

## ❓ Problemas comunes

### El carrousel muestra fotos de ejemplo

✅ Normal si no has configurado Google Drive. Para usar tus fotos:
- Verifica que la carpeta es pública
- Verifica el ID en `/App.tsx`
- Verifica que desplegaste el Apps Script

### El formulario no funciona

- Verifica la URL del Apps Script en `/App.tsx`
- Verifica que el Apps Script tiene acceso "Cualquier persona"
- Abre la consola del navegador (F12) para ver errores

---

## 📞 Contacto

- WhatsApp Santi: [+34 637 10 12 82](https://wa.me/34637101282)
- WhatsApp Elena: [+34 619 59 39 34](https://wa.me/34619593934)

---

**¡Que disfrutéis de vuestra boda! 🎉💕**