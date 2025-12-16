# 🚀 Configuración de GitHub Pages

Este documento explica cómo configurar y desplegar automáticamente tu sitio web en GitHub Pages.

## 📋 Pasos para configurar GitHub Pages

### 1. Subir archivos a GitHub

Primero, asegúrate de tener todos los archivos en tu repositorio:

```bash
# Inicializa git (si aún no lo has hecho)
git init

# Añade todos los archivos
git add .

# Haz commit
git commit -m "Configuración inicial de la web de la boda"

# Conecta con tu repositorio de GitHub (reemplaza con tu URL)
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git

# Sube a GitHub
git push -u origin main
```

### 2. Configurar permisos de GitHub Actions

**IMPORTANTE**: Debes hacer esto ANTES de que se ejecute el workflow.

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, haz clic en **Actions** → **General**
4. Baja hasta "Workflow permissions"
5. Selecciona **"Read and write permissions"**
6. Marca la casilla **"Allow GitHub Actions to create and approve pull requests"**
7. Haz clic en **Save**

### 3. Configurar GitHub Pages

1. Ve a **Settings** → **Pages**
2. En **Source** (Origen), selecciona **"Deploy from a branch"**
3. En **Branch**, selecciona **"gh-pages"** y **"/ (root)"**
4. Haz clic en **Save**

**Nota**: La rama `gh-pages` se creará automáticamente en el primer despliegue.

### 4. Configurar la URL base en Vite (IMPORTANTE)

Abre el archivo `vite.config.ts` y configura el campo `base`:

**Si tu repositorio se llama por ejemplo "boda-santi-elena":**
```typescript
base: '/boda-santi-elena/', // Reemplaza con el nombre de tu repo
```

**Si usas un dominio personalizado (ej: www.miboda.com):**
```typescript
base: '/', // Para dominios personalizados
```

### 5. Hacer push y esperar el despliegue

```bash
# Añade todos los archivos nuevos
git add .

# Haz commit de los cambios
git commit -m "Configurar GitHub Pages con despliegue automático"

# Haz push a la rama main
git push origin main
```

### 6. Verificar el despliegue

1. Ve a la pestaña **Actions** en tu repositorio de GitHub
2. Verás un workflow llamado "Deploy to GitHub Pages" ejecutándose
3. Espera a que termine (tarda aproximadamente 1-3 minutos)
4. Una vez completado, tu sitio estará disponible en:
   - `https://TU-USUARIO.github.io/NOMBRE-DE-TU-REPO/`

### 7. Encontrar la URL de tu sitio

1. Ve a **Settings** > **Pages** en tu repositorio
2. En la parte superior verás un mensaje: "Your site is live at [URL]"
3. Esa es la URL pública de tu sitio web

## 🔄 Actualizaciones automáticas

Cada vez que hagas `git push origin main`, el workflow se ejecutará automáticamente y:

1. ✅ Instalará las dependencias
2. ✅ Compilará el proyecto
3. ✅ Desplegará los archivos a la rama `gh-pages`
4. ✅ Actualizará tu sitio en vivo

## 🛠️ Solución de problemas

### El sitio no carga correctamente (páginas en blanco o errores 404)

**Problema:** Las rutas de los assets no son correctas.

**Solución:** Abre `vite.config.ts` y asegúrate de que `base` está configurado como:
```typescript
base: './', // Rutas relativas
```

Si tu repositorio se llama `mi-boda` y tu usuario es `usuario`, también puedes usar:
```typescript
base: '/mi-boda/', // Reemplaza con el nombre de tu repo
```

### El workflow falla con error de permisos

**Problema:** GitHub Actions no tiene permisos para escribir en la rama gh-pages.

**Solución:**
1. Ve a **Settings** > **Actions** > **General**
2. En "Workflow permissions", selecciona **Read and write permissions**
3. Haz clic en **Save**

### Quiero usar un dominio personalizado

1. Compra un dominio (ej: www.miboda.com)
2. Configura los DNS de tu dominio para apuntar a GitHub Pages
3. En `vite.config.ts`, cambia:
   ```typescript
   base: '/', // Para dominios personalizados
   ```
4. En `.github/workflows/deploy.yml`, añade tu dominio en la línea `cname`:
   ```yaml
   cname: www.miboda.com
   ```

## 📝 Notas importantes

- La rama `gh-pages` se creará automáticamente en el primer despliegue
- No necesitas modificar manualmente la rama `gh-pages`
- Los cambios tardan 1-3 minutos en reflejarse en el sitio en vivo
- GitHub Pages es completamente gratuito para repositorios públicos

## 🎨 Personalización adicional

Si necesitas cambiar algo en el proceso de despliegue, edita el archivo:
`.github/workflows/deploy.yml`

---

¡Listo! Tu sitio web se desplegará automáticamente cada vez que hagas push a main. 🎉