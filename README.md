# 💍 Boda de Santi y Elena

Landing page elegante y sofisticada para la boda de Santiago y Elena, con animaciones suaves, formulario de confirmación y galería de fotos.

---

## 📋 ÍNDICE

1. [Requisitos previos](#requisitos-previos)
2. [Instalación local](#instalación-local)
3. [Configuración de Google Drive (Carrousel de fotos)](#configuración-de-google-drive)
4. [Configuración de Google Apps Script (Formulario)](#configuración-de-google-apps-script)
5. [Despliegue en GitHub Pages](#despliegue-en-github-pages)
6. [Estructura del proyecto](#estructura-del-proyecto)
7. [Personalización](#personalización)

---

## 🔧 REQUISITOS PREVIOS

Antes de empezar, necesitas tener instalado:

- **Node.js** (versión 18 o superior) - [Descargar aquí](https://nodejs.org/)
- **npm** (viene incluido con Node.js)
- **Git** - [Descargar aquí](https://git-scm.com/)
- Una cuenta de **GitHub**
- Una cuenta de **Google** (para Drive y Apps Script)

---

## 💻 INSTALACIÓN LOCAL

### Paso 1: Clonar o descargar el proyecto

Si tienes el proyecto en GitHub:
```bash
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
cd TU_REPOSITORIO
```

Si lo tienes descargado como ZIP:
```bash
# Descomprime el ZIP y navega a la carpeta
cd ruta/a/tu/proyecto
```

### Paso 2: Instalar dependencias

Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
```

Esto instalará todas las librerías necesarias (puede tardar 1-2 minutos).

### Paso 3: Ejecutar en modo desarrollo

```bash
npm run dev
```

La página se abrirá automáticamente en tu navegador en: `http://localhost:5173`

**¡Ya puedes ver y probar la web localmente! 🎉**

---

## 📸 CONFIGURACIÓN DE GOOGLE DRIVE (Carrousel de fotos)

El carrousel carga automáticamente las fotos desde una carpeta de Google Drive.

### Paso 1: Crear/configurar la carpeta de Google Drive

1. Ve a [Google Drive](https://drive.google.com)
2. Abre la carpeta con tus fotos de boda (o crea una nueva)
3. **IMPORTANTE**: Haz clic derecho en la carpeta → **Compartir**
4. En "Acceso general" → Selecciona **"Cualquier persona con el enlace"**
5. Permiso: **"Lector"**
6. Haz clic en **"Listo"**

### Paso 2: Copiar el ID de la carpeta

1. Abre la carpeta en Google Drive
2. Copia la URL completa, se verá así:
   ```
   https://drive.google.com/drive/folders/1gDPI8Dqg2Xwxhc_m5Pcw1CwOhf37HCwi?usp=sharing
   ```
3. El **ID de la carpeta** es la parte entre `/folders/` y `?usp=`:
   ```
   1gDPI8Dqg2Xwxhc_m5Pcw1CwOhf37HCwi
   ```

### Paso 3: Configurar el ID en el código

Este ID ya está configurado en `/App.tsx` línea 13:
```typescript
const GOOGLE_DRIVE_FOLDER_ID = "1gDPI8Dqg2Xwxhc_m5Pcw1CwOhf37HCwi";
```

Si quieres cambiar la carpeta, edita esta línea con tu nuevo ID.

### Paso 4: Subir las fotos

1. Sube tus fotos de boda a la carpeta de Google Drive
2. Formatos soportados: JPG, PNG, WEBP
3. Recomendado: Máximo 10-15 fotos para mejor rendimiento
4. Las fotos se mostrarán en el orden que Google Drive las liste

---

## 📝 CONFIGURACIÓN DE GOOGLE APPS SCRIPT (Formulario)

El formulario de confirmación envía los datos a Google Sheets.

### Paso 1: Crear una Google Sheet

1. Ve a [Google Sheets](https://sheets.google.com)
2. Crea una nueva hoja de cálculo
3. Nómbrala: **"Confirmaciones Boda S&E"**
4. En la primera fila, pon estos encabezados:

   | A | B | C | D | E | F | G | H | I |
   |---|---|---|---|---|---|---|---|---|
   | Nombre | Email | Teléfono | Celiaco | Vegetariano | Intolerante Lactosa | Sin Preferencias | Sugerencia Canción | Fecha |

### Paso 2: Abrir Apps Script

1. En tu Google Sheet, ve a **Extensiones** → **Apps Script**
2. Se abrirá un editor de código
3. Borra todo el código que aparece por defecto

### Paso 3: Copiar el código del Apps Script

Copia y pega este código completo:

```javascript
// Función para manejar peticiones POST (envío de formulario)
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Agregar nueva fila con los datos
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

// Función para obtener imágenes de una carpeta de Google Drive
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
        
        // Solo incluir archivos de imagen
        if (mimeType.includes('image')) {
          // Construir URL pública de la imagen
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

### Paso 4: Desplegar el Apps Script

1. Haz clic en el botón **"Desplegar"** (arriba a la derecha) → **"Nueva implementación"**
2. Haz clic en el icono de **engranaje** ⚙️ junto a "Seleccionar tipo"
3. Selecciona **"Aplicación web"**
4. Configura:
   - **Descripción**: "API Boda S&E"
   - **Ejecutar como**: **Yo (tu email)**
   - **Quién tiene acceso**: **Cualquier persona** ⚠️ IMPORTANTE
5. Haz clic en **"Implementar"**
6. **Autoriza** la aplicación (puede pedir que autorices el acceso)
7. **COPIA LA URL** que aparece (se verá así):
   ```
   https://script.google.com/macros/s/AKfycbxXXXXXXXXXXX/exec
   ```

### Paso 5: Configurar la URL en el código

1. Abre `/App.tsx`
2. En la línea 11, reemplaza la URL con la tuya:
   ```typescript
   const GOOGLE_APPS_SCRIPT_URL = "TU_URL_AQUI";
   ```

**¡Listo! Ahora el formulario guardará las confirmaciones en tu Google Sheet. 📊**

---

## 🚀 DESPLIEGUE EN GITHUB PAGES

### Opción A: Despliegue Manual (Recomendado)

#### Paso 1: Subir el código a GitHub

1. Crea un nuevo repositorio en [GitHub](https://github.com/new)
   - Nombre: `boda-santi-elena` (o el que prefieras)
   - Público o privado (tu elección)
   - NO marques ninguna opción de inicialización

2. En tu terminal, dentro de la carpeta del proyecto:

```bash
# Inicializar Git (si no lo has hecho)
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Primera versión de la web de la boda"

# Conectar con tu repositorio de GitHub
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git

# Subir el código
git push -u origin main
```

#### Paso 2: Compilar el proyecto

En tu terminal:

```bash
npm run build
```

Esto creará una carpeta `/dist` con todos los archivos optimizados para producción.

#### Paso 3: Desplegar a GitHub Pages

```bash
# Instalar la herramienta de deploy (solo la primera vez)
npm install -D gh-pages

# Desplegar
npx gh-pages -d dist
```

#### Paso 4: Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Ve a **Settings** (Configuración)
3. En el menú lateral, haz clic en **Pages**
4. En **Source**, selecciona la rama **gh-pages**
5. Haz clic en **Save**

**¡En 1-2 minutos tu web estará disponible! 🎊**

La URL será: `https://TU_USUARIO.github.io/TU_REPOSITORIO/`

#### Paso 5: Actualizar la web (cuando hagas cambios)

Cada vez que hagas cambios y quieras publicarlos:

```bash
# 1. Guardar cambios en Git
git add .
git commit -m "Descripción de tus cambios"
git push

# 2. Compilar y desplegar
npm run build
npx gh-pages -d dist
```

---

### Opción B: Despliegue Automático con GitHub Actions

Si prefieres que se despliegue automáticamente cada vez que hagas push:

#### Paso 1: Crear el archivo de workflow

Ya existe en `/.github/workflows/deploy.yml` - Si no existe, créalo con este contenido:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

#### Paso 2: Habilitar GitHub Actions

1. Ve a tu repositorio en GitHub
2. Ve a **Settings** → **Actions** → **General**
3. En "Workflow permissions", selecciona **"Read and write permissions"**
4. Marca **"Allow GitHub Actions to create and approve pull requests"**
5. Haz clic en **Save**

#### Paso 3: Configurar GitHub Pages

1. Ve a **Settings** → **Pages**
2. En **Source**, selecciona **gh-pages**
3. Haz clic en **Save**

#### Paso 4: Hacer push para desplegar

```bash
git add .
git commit -m "Activar despliegue automático"
git push
```

¡Ahora cada vez que hagas `git push`, se desplegará automáticamente! 🚀

---

## 📁 ESTRUCTURA DEL PROYECTO

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Workflow de GitHub Actions (opcional)
├── assets/
│   ├── fotoprincipal.jpeg      # Foto principal del header
│   └── fotoiglesia.jpeg        # Foto de la ceremonia
├── components/
│   ├── figma/                  # Componentes de sistema
│   └── ui/                     # Componentes de UI
├── src/
│   └── main.tsx               # Punto de entrada de React
├── styles/
│   └── globals.css            # Estilos globales
├── App.tsx                     # Componente principal ⭐
├── index.html                  # HTML base
├── package.json               # Dependencias del proyecto
├── tsconfig.json              # Configuración de TypeScript
├── vite.config.ts             # Configuración de Vite
└── README.md                  # Este archivo
```

---

## 🎨 PERSONALIZACIÓN

### Cambiar colores

Edita `/styles/globals.css` y busca las variables de color:

```css
/* Color principal (morado) */
#452746 → Tu nuevo color

/* Color de fondo */
#f5eff5 → Tu nuevo color de fondo
```

### Cambiar textos

Todos los textos están en `/App.tsx`:

- **Línea 8**: Dirección de la ceremonia
- **Línea 9**: URLs de WhatsApp
- **Nombres y fecha**: En el componente `AnimatedHeader`

### Cambiar fotos del hero y ceremonia

Reemplaza los archivos en `/assets/`:
- `fotoprincipal.jpeg` → Foto del header principal
- `fotoiglesia.jpeg` → Foto de fondo de la ceremonia

### Cambiar la tipografía

En `/styles/globals.css`, busca:

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;700&display=swap');
```

Cambia `Roboto+Slab` por la fuente que prefieras de [Google Fonts](https://fonts.google.com/).

---

## ❓ SOLUCIÓN DE PROBLEMAS

### El carrousel muestra fotos de ejemplo

✅ **Esto es normal** si aún no has configurado Google Drive. 

Para mostrar tus fotos:
1. Verifica que la carpeta de Google Drive es pública
2. Verifica que el ID de la carpeta está correcto en `/App.tsx`
3. Verifica que has desplegado el Google Apps Script
4. Verifica que la URL del Apps Script está en `/App.tsx`

### El formulario no envía datos

1. Verifica que la URL del Apps Script está correcta en `/App.tsx` (línea 11)
2. Verifica que el Apps Script está desplegado con acceso "Cualquier persona"
3. Abre la consola del navegador (F12) para ver errores

### GitHub Pages no se actualiza

1. Ve a tu repositorio → **Actions**
2. Verifica que el workflow se ejecutó correctamente
3. Si falló, haz clic en el workflow para ver el error
4. Espera 2-5 minutos después del deploy

### Error al instalar dependencias

```bash
# Borra node_modules y package-lock.json
rm -rf node_modules package-lock.json

# Vuelve a instalar
npm install
```

---

## 📞 CONTACTO

Para cualquier duda o problema:
- WhatsApp Santi: [+34 637 10 12 82](https://wa.me/34637101282)
- WhatsApp Elena: [+34 619 59 39 34](https://wa.me/34619593934)

---

## 📄 LICENCIA

Este proyecto es privado y está hecho específicamente para la boda de Santiago y Elena.

---

**¡Disfruta de vuestra boda! 🎉💕**
