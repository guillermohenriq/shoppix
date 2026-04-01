# Shoppix - Sitio de Ventas para el Hogar

Este proyecto es una aplicación web moderna y minimalista construida con **React** y **Vite**.

## Requisitos previos

Necesitas tener instalado **Node.js** en tu computadora.
1. Descárgalo e instálalo desde: [https://nodejs.org/](https://nodejs.org/)
2. Verifica la instalación abriendo una terminal y escribiendo `node -v`.

## Instalación

1. Abre una terminal en la carpeta del proyecto (`shoppix`).
2. Instala las dependencias:
   ```bash
   npm install
   ```

## Ejecución

Para iniciar el servidor de desarrollo y ver la página:

```bash
npm run dev
```

La consola te mostrará un link (ej. `http://localhost:5173`) para abrir en tu navegador.

## Gestión de Productos

Para agregar o modificar productos, edita el archivo:
`src/data/products.json`

Sigue el formato existente:
```json
{
  "id": 5,
  "name": "Nuevo Producto",
  "price": 500,
  "category": "Cocina",
  "image": "/images/logo.png",
  "description": "Descripción del producto...",
  "specs": ["Característica 1", "Característica 2"]
}
```

## Configuración de WhatsApp

Para cambiar el número de teléfono donde llegan los pedidos, edita el archivo:
`src/components/ProductModal.jsx` (Línea 7).
