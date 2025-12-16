# 🚀 Generar sitio estático

## Paso 1: Compilar el proyecto

En la terminal, dentro de la carpeta del proyecto:

```bash
npm run build
```

Esto creará una carpeta `/dist` con todos los archivos estáticos.

## Paso 2: Servir los archivos

Tienes varias opciones para servir los archivos de la carpeta `/dist`:

### Opción A: Servidor local de prueba

```bash
# Instalar servidor simple
npm install -g serve

# Servir la carpeta dist
serve -s dist
```

La web estará disponible en `http://localhost:3000`

### Opción B: Subir a cualquier hosting

Los archivos en `/dist` son HTML, CSS y JS estáticos. Puedes subirlos a:

- **Netlify**: Arrastra la carpeta `/dist` a https://app.netlify.com/drop
- **Vercel**: Sube la carpeta `/dist`
- **GitHub Pages**: Sube el contenido de `/dist` a la rama `gh-pages`
- **Cualquier servidor web**: FTP los archivos de `/dist` a tu servidor

### Opción C: GitHub Pages manual

```bash
# Instalar gh-pages
npm install -D gh-pages

# Desplegar a GitHub Pages
npx gh-pages -d dist
```

## 📁 Estructura de /dist después del build

```
dist/
├── index.html          # HTML principal
├── assets/
│   ├── index-[hash].js     # JavaScript compilado
│   ├── index-[hash].css    # CSS compilado
│   ├── fotoprincipal.jpeg  # Tus imágenes
│   └── fotoiglesia.jpeg
└── ...
```

## ⚠️ Importante

Cada vez que hagas cambios en el código:

1. Vuelve a ejecutar `npm run build`
2. Los archivos en `/dist` se actualizarán
3. Sube los nuevos archivos a tu hosting

## 🔧 Configurar base URL (si es necesario)

Si vas a servir el sitio en un subdirectorio (ej: `tudominio.com/boda/`), edita `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/boda/', // Cambia esto según tu ruta
  // ... resto de la configuración
})
```

Luego vuelve a ejecutar `npm run build`.
