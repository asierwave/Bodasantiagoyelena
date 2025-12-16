# Configuración de Google Apps Script - Formulario e Imágenes del Carrousel

## Paso 1: Crear una Google Sheet

1. Ve a [Google Sheets](https://sheets.google.com) y crea una nueva hoja de cálculo
2. Ponle un nombre, por ejemplo: "Confirmaciones Boda S&E"
3. En la primera fila, añade estos encabezados:
   - A1: `Fecha/Hora`
   - B1: `Nombre`
   - C1: `Email`
   - D1: `Teléfono`
   - E1: `Dieta Celiaca`
   - F1: `Dieta Vegetariana`
   - G1: `Intolerancia Lactosa`
   - H1: `Sin Preferencias`
   - I1: `Canción Sugerida`
   - J1: `Enviar Correo` (checkbox para enviar emails manualmente)

## Paso 2: Preparar las Imágenes en Google Drive

1. Ve a [Google Drive](https://drive.google.com)
2. Crea una carpeta nueva llamada "Fotos Boda Carrousel"
3. Sube todas las fotos que quieres que aparezcan en el carrousel
4. **Haz clic derecho en la carpeta** → **Compartir** → **Cambiar a cualquier persona con el enlace**
5. Asegúrate de que el permiso sea **"Cualquier persona con el enlace"** → **"Lector"**
6. Copia el ID de la carpeta de la URL:
   - URL ejemplo: `https://drive.google.com/drive/folders/1ABC123XYZ...`
   - ID: `1ABC123XYZ...`
7. Ve a `/App.tsx` en tu proyecto y reemplaza `GOOGLE_DRIVE_FOLDER_ID` con tu ID real

## Paso 3: Crear el Google Apps Script

1. En la hoja de cálculo, ve a **Extensiones** → **Apps Script**
2. Borra todo el código que aparece por defecto
3. Copia y pega el siguiente código:

```javascript
// ===========================
// FUNCIÓN PRINCIPAL - MANEJA GET Y POST
// ===========================
function doGet(e) {
  var action = e.parameter.action;
  
  if (action === 'getImages') {
    return getImagesFromFolder(e.parameter.folderId);
  }
  
  return ContentService.createTextOutput(JSON.stringify({
    'result': 'error',
    'message': 'Acción no válida'
  })).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    // Obtener la hoja activa
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parsear los datos recibidos
    var data = JSON.parse(e.postData.contents);
    
    // Crear una nueva fila con los datos
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' }),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.celiac ? 'Sí' : 'No',
      data.vegetarian ? 'Sí' : 'No',
      data.lactoseIntolerant ? 'Sí' : 'No',
      data.noPreferences ? 'Sí' : 'No',
      data.songSuggestion || '',
      false // Columna checkbox "Enviar Correo"
    ]);
    
    // Retornar respuesta exitosa
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Datos guardados correctamente'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Retornar error
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// ===========================
// FUNCIÓN PARA OBTENER IMÁGENES DEL CARROUSEL
// ===========================
function getImagesFromFolder(folderId) {
  try {
    if (!folderId) {
      return ContentService.createTextOutput(JSON.stringify({
        'success': false,
        'message': 'ID de carpeta no proporcionado'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    var folder = DriveApp.getFolderById(folderId);
    var files = folder.getFiles();
    var imageUrls = [];
    
    while (files.hasNext()) {
      var file = files.next();
      var mimeType = file.getMimeType();
      
      // Solo procesar archivos de imagen
      if (mimeType.indexOf('image/') === 0) {
        var fileId = file.getId();
        // Usar la URL de visualización directa de Google Drive
        var imageUrl = 'https://drive.google.com/uc?export=view&id=' + fileId;
        imageUrls.push(imageUrl);
      }
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      'success': true,
      'images': imageUrls,
      'count': imageUrls.length
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      'success': false,
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// ===========================
// FUNCIÓN PARA ENVIAR EMAILS DE CONFIRMACIÓN
// ===========================
function enviarEmailsSeleccionados() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  
  // Empezar desde la fila 2 (fila 1 es el encabezado)
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var enviarCorreo = row[9]; // Columna J (índice 9)
    
    // Si el checkbox está marcado, enviar email
    if (enviarCorreo === true) {
      var nombre = row[1];
      var email = row[2];
      var telefono = row[3];
      var celiaco = row[4];
      var vegetariano = row[5];
      var intoleranciLactosa = row[6];
      var sinPreferencias = row[7];
      var cancionSugerida = row[8];
      
      // Crear el cuerpo del email en HTML
      var htmlBody = 
        '<div style="font-family: Roboto Slab, serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5eff5;">' +
        '  <h1 style="color: #452746; text-align: center; font-size: 36px; margin-bottom: 20px;">¡Confirmación de Asistencia!</h1>' +
        '  <div style="background-color: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">' +
        '    <p style="font-size: 18px; color: #333; margin-bottom: 20px;">Hola <strong>' + nombre + '</strong>,</p>' +
        '    <p style="font-size: 16px; color: #333; line-height: 1.6;">¡Gracias por confirmar tu asistencia a nuestra boda! Estamos emocionados de compartir este día especial contigo.</p>' +
        '    <h2 style="color: #452746; font-size: 24px; margin-top: 30px; margin-bottom: 15px;">📋 Datos Confirmados:</h2>' +
        '    <ul style="font-size: 16px; color: #333; line-height: 1.8;">' +
        '      <li><strong>Nombre:</strong> ' + nombre + '</li>' +
        '      <li><strong>Email:</strong> ' + email + '</li>' +
        '      <li><strong>Teléfono:</strong> ' + telefono + '</li>' +
        '      <li><strong>Dieta Celiaca:</strong> ' + celiaco + '</li>' +
        '      <li><strong>Dieta Vegetariana:</strong> ' + vegetariano + '</li>' +
        '      <li><strong>Intolerancia a la Lactosa:</strong> ' + intoleranciLactosa + '</li>' +
        '      <li><strong>Sin Preferencias:</strong> ' + sinPreferencias + '</li>' +
        (cancionSugerida ? '      <li><strong>Canción Sugerida:</strong> ' + cancionSugerida + '</li>' : '') +
        '    </ul>' +
        '    <h2 style="color: #452746; font-size: 24px; margin-top: 30px; margin-bottom: 15px;">📍 Detalles del Evento:</h2>' +
        '    <p style="font-size: 16px; color: #333; line-height: 1.6;"><strong>Fecha:</strong> 12 de Abril de 2026</p>' +
        '    <p style="font-size: 16px; color: #333; line-height: 1.6;"><strong>Lugar:</strong> Ermita de Virgen del Puerto<br>P.º de la Virgen del Puerto, 4, Centro, 28013 Madrid</p>' +
        '    <div style="text-align: center; margin-top: 40px;">' +
        '      <p style="font-size: 28px; color: #452746; font-style: italic; margin: 0;">¡Nos vemos pronto!</p>' +
        '      <p style="font-size: 32px; color: #452746; margin-top: 10px; margin-bottom: 0;">Santiago & Elena 💕</p>' +
        '    </div>' +
        '  </div>' +
        '  <p style="text-align: center; color: #666; font-size: 14px; margin-top: 20px;">S&E 2026</p>' +
        '</div>';
      
      // Enviar el email
      try {
        MailApp.sendEmail({
          to: email,
          subject: '💍 Confirmación de Asistencia - Boda Santiago & Elena',
          htmlBody: htmlBody
        });
        
        // Desmarcar el checkbox después de enviar
        sheet.getRange(i + 1, 10).setValue(false);
        
        Logger.log('Email enviado a: ' + email);
      } catch (e) {
        Logger.log('Error enviando email a ' + email + ': ' + e.toString());
      }
    }
  }
  
  SpreadsheetApp.getUi().alert('¡Emails enviados correctamente!');
}
```

4. Haz clic en el icono del **disquete** (💾) para guardar
5. Ponle un nombre al proyecto, por ejemplo: "API Boda S&E"

## Paso 4: Agregar Botón para Enviar Emails

1. En Google Sheets, ve a **Extensiones** → **Macros** → **Importar**
2. O simplemente añade un botón personalizado:
   - En el menú de Google Sheets, selecciona **Insertar** → **Dibujo**
   - Crea un botón (rectángulo con texto "Enviar Emails")
   - Haz clic en **Guardar y cerrar**
   - Haz clic en el botón que aparece en tu hoja
   - Selecciona **Asignar secuencia de comandos**
   - Escribe: `enviarEmailsSeleccionados`
   - Haz clic en **Aceptar**

Ahora puedes marcar los checkboxes en la columna J y hacer clic en el botón para enviar emails.

## Paso 5: Desplegar el Script

1. Haz clic en el botón **"Implementar"** → **"Nueva implementación"**
2. Haz clic en el icono de **engranaje** (⚙️) junto a "Seleccionar tipo"
3. Selecciona **"Aplicación web"**
4. Configura:
   - **Descripción**: "API Boda S&E v1" (opcional)
   - **Ejecutar como**: "Yo" (tu cuenta de Google)
   - **Quién tiene acceso**: "Cualquier persona"
5. Haz clic en **"Implementar"**
6. Es posible que te pida autorización:
   - Haz clic en **"Autorizar acceso"**
   - Selecciona tu cuenta de Google
   - Haz clic en **"Avanzado"** → **"Ir a [nombre del proyecto] (no seguro)"**
   - Haz clic en **"Permitir"**

## Paso 6: Configurar URLs en el Proyecto

1. Una vez implementado, copia la **URL de implementación web**
2. Ve al archivo `/App.tsx` en tu proyecto
3. Actualiza las constantes:

```typescript
const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/TU_URL_AQUI/exec";
const GOOGLE_DRIVE_FOLDER_ID = "TU_FOLDER_ID_AQUI";
```

## Paso 7: Probar Todo

1. **Probar el carrousel**: Las imágenes deberían cargarse automáticamente desde Google Drive
2. **Probar el formulario**: Los datos deberían guardarse en Google Sheets
3. **Probar el envío de emails**: Marca un checkbox en la columna J y haz clic en el botón "Enviar Emails"

## Notas Importantes

- ⚠️ **Cada vez que modifiques el código de Apps Script**, debes crear una **nueva implementación** para que los cambios surtan efecto
- 📧 Los emails se envían **manualmente** seleccionando los checkboxes, NO automáticamente
- 🖼️ Las imágenes deben estar en formato `.jpg`, `.png`, `.gif`, `.webp`, etc.
- 🔒 Asegúrate de que la carpeta de Google Drive tenga permisos de **"Cualquier persona con el enlace"**
- 📊 Puedes exportar los datos a Excel o CSV desde Google Sheets cuando lo necesites

## Solución de Problemas

### Las imágenes no se cargan

1. Verifica que el `GOOGLE_DRIVE_FOLDER_ID` sea correcto
2. Asegúrate de que la carpeta esté compartida como "Cualquier persona con el enlace"
3. Verifica que las imágenes sean archivos de imagen válidos
4. Revisa la consola del navegador (F12) para ver errores

### El formulario no guarda datos

1. Verifica que la `GOOGLE_APPS_SCRIPT_URL` sea correcta
2. Asegúrate de haber desplegado el script como "Aplicación web"
3. Verifica que los permisos sean "Cualquier persona"
4. Revisa los logs de Apps Script: **Extensiones** → **Apps Script** → **Ejecuciones**

### Los emails no se envían

1. Verifica que Gmail tenga permisos para enviar emails desde Apps Script
2. Asegúrate de que los emails en la hoja sean válidos
3. Revisa los logs en Apps Script para ver errores específicos
