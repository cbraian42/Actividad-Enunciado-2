# Actividad Enunciado 2 — Registro de Usuario (React + Vite)

Proyecto de registro de usuario en múltiples pasos utilizando React Router, con persistencia simple en `localStorage`. Se inició desde la plantilla de React + Vite y se realizaron varios ajustes funcionales y de navegación.

**URL de desarrollo:** `http://localhost:5173/`

## Requisitos
- Node.js 18+ y npm

## Instalación y ejecución
- Instalar dependencias: `npm install`
- Levantar servidor de desarrollo: `npm run dev`

## Estructura relevante
- `src/App.jsx`: define rutas y navegación principal.
- `src/pages/Home.jsx`: pantalla de inicio y CTA para comenzar registro.
- `src/pages/Register.jsx`: contenedor del flujo y pasos (Outlet).
- `src/pages/PersonalInfo.jsx`: formulario de datos personales.
- `src/pages/ContactInfo.jsx`: formulario de contacto.
- `src/pages/Confirmation.jsx`: revisión y confirmación del registro.

## Cambios realizados (desde el comienzo)

1) `src/App.jsx`
- Agregado `export default App;` para corregir la importación desde `main.jsx`.
- Añadida la ruta índice bajo `/register`: `<Route index element={<PersonalInfo />} />` para que al entrar en `/register` comience en el primer paso.

2) `src/pages/Home.jsx`
- Archivo estaba vacío; se implementó un componente básico con título, breve descripción y un botón "Comenzar registro".
- Se configuró el botón para ir directamente a `/register/personal` (primer paso).

3) `src/pages/Register.jsx`
- El indicador de pasos ahora es clickeable: cada paso está envuelto en un `Link` a su ruta (`personal`, `contact`, `confirmation`).

4) `src/pages/Confirmation.jsx`
- Se corrigió la visualización del nombre completo, añadiendo un espacio entre `firstName` y `lastName`.

## Comparación Antes vs Después (comportamiento)

### App.jsx
- Antes:
  - No había exportación por defecto, lo que causaba el error de Vite: "No matching export in src/App.jsx for import default" y la aplicación no arrancaba correctamente.
  - Al navegar a `/register`, no había ruta índice, por lo que no se renderizaba ningún formulario inicial.
- Después:
  - La aplicación inicia sin errores; la importación de `App` funciona.
  - `/register` carga por defecto `PersonalInfo` gracias a la ruta índice.

### Home.jsx
- Antes:
  - El archivo estaba vacío; la ruta de inicio no mostraba contenido útil.
- Después:
  - Pantalla de inicio con un CTA claro. El botón "Comenzar registro" lleva a `/register/personal` para iniciar el flujo.

### Register.jsx
- Antes:
  - El indicador de pasos era informativo únicamente; no permitía saltar directamente a un paso.
- Después:
  - Cada paso es un enlace; el usuario puede navegar directamente entre "Información Personal", "Información de Contacto" y "Confirmación".

### Confirmation.jsx
- Antes:
  - El nombre y apellido se mostraban sin espacio, dificultando la lectura.
- Después:
  - Se muestra el nombre completo correctamente con un espacio entre ambos.

## Notas de implementación
- Persistencia: Se usa `localStorage` para mantener los datos entre pasos y recuperarlos.
- Navegación: React Router controla rutas anidadas bajo `/register` y un `Outlet` para el formulario activo.
- Estilos: Inline CSS simple para mantener el foco en la funcionalidad.

## Próximas mejoras sugeridas
- Validaciones avanzadas (email, teléfono) y mensajes de error.
- Integración con backend para persistir registros reales.
- Estados deshabilitados/completados en el indicador de pasos.
