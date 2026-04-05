<div align="center">
  <img src="public/images/logo.png" alt="Shoppix Logo" width="150" />
  <h1>🛒 Shoppix</h1>
  <p><strong>Tienda en línea E-commerce con pedidos directos vía WhatsApp 🚀</strong></p>

  <p>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" /></a>
    <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" /></a>
    <a href="https://github.com/shoppix"><img src="https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=GitHub&logoColor=white" alt="GitHub Pages" /></a>
  </p>
</div>

<hr />

## ✨ Sobre el Proyecto

**Shoppix** es una plataforma de e-commerce moderna, rápida y optimizada orientada a convertir ventas rápidamente mediante **WhatsApp**. Diseñada con una experiencia de usuario (UX) estilo mobile-first, permite a los usuarios navegar por el catálogo, descubrir detalles técnicos de los productos, ver galerías completas y realizar su pedido de manera fluida directamente con un asesor.

### 🎯 Funcionalidades Principales

- **Catálogo Dinámico:** Filtrado instantáneo por categorías (Tecnología, Hogar, Vestimenta, etc.).
- **Diseño Premium:** Interfaz de usuario limpia, con modo claro y gradientes modernos, animaciones suaves al hacer scroll y tipografía profesional (*Inter*).
- **Integración con WhatsApp:** Los pedidos generan un mensaje pre-llenado en WhatsApp con el nombre y precio del producto deseado listo para enviar.
- **Búsqueda en Tiempo Real:** Barra de búsqueda optimizada para encontrar cualquier artículo por nombre o descripción.
- **Responsive Design:** 100% adaptable a cualquier pantalla, con vistas especiales y miniaturas interactivas para móviles.
- **Despliegue Automático:** Configurado con GitHub Actions para auto-despliegue en GitHub Pages tras cada actualización.

---

## 💻 Tecnologías Utilizadas

- **React 18** (Librería de UI principal)
- **Vite** (Entorno de compilación ultrarrápido)
- **CSS Vanilla (Módulos)** (Animaciones, variables CSS, layout Grid/Flexbox)
- **Lucide React** (Iconografía limpia y escalable)
- **GitHub Actions** (CI/CD Automatizado)

---

## 🚀 Cómo ejecutarlo localmente

Para clonar y correr este proyecto en tu propia máquina, necesitarás [Node.js](https://nodejs.org/) instalado.

1. **Clonar el repositorio**
```bash
git clone https://github.com/TU_USUARIO/shoppix.git
cd shoppix
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Correr el servidor de desarrollo**
```bash
npm run dev
```
> Ingresa a `http://localhost:5173/` en tu navegador.

---

## 🛠️ Cómo agregar productos

El catálogo completo proviene de un documento de datos estructurado en formato JSON dentro del proyecto.
Simplemente edita el archivo `src/data/products.js` bajo esta misma estructura:

```javascript
{
    "id": 23,
    "name": "Nombre del Producto",
    "price": 1000, 
    "category": "Tecnología",
    "images": [
        "/images/carpeta_producto/1.jpg"
    ],
    "description": "Tu increíble descripción de producto aquí.",
    "specs": [
        "Especificación destacada 1",
        "Especificación destacada 2"
    ]
}
```
*Asegúrate de agregar la foto correspondiente en `public/images/carpeta_producto/`.* 📸

---

## 📱 Contacto

Escríbenos para cualquier duda o consulta:

- 📧 Email: **[shoppineex00@gmail.com](mailto:shoppineex00@gmail.com)**
- 📸 Instagram: **[@shoppix.hn](https://instagram.com/shoppix.hn)**
- 📘 Facebook: **[Shoppix.hn](https://facebook.com/Shoppix.hn)**

---
