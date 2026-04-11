<div align="center">
  <img src="public/images/logo.png" alt="Shoppix Logo" width="150" />
  <h1>🛒 Shoppix</h1>
  <p><strong>E-commerce online store with direct ordering via WhatsApp 🚀</strong></p>

  <p>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" /></a>
    <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" /></a>
    <a href="https://github.com/shoppix"><img src="https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=GitHub&logoColor=white" alt="GitHub Pages" /></a>
  </p>
</div>

<hr />

## ✨ About the Project

**Shoppix** is a modern, fast, and optimized e-commerce platform aimed at converting sales quickly via **WhatsApp**. Designed with a mobile-first user experience (UX), it allows users to browse the catalog, discover technical details of products, view full galleries, and seamlessly place their order directly with an advisor.

### 🎯 Key Features

- **Dynamic Catalog:** Instant filtering by categories (Technology, Home, Clothing, etc.).
- **Premium Design:** Clean user interface, with light mode and modern gradients, smooth scrolling animations, and professional typography (*Inter*).
- **WhatsApp Integration:** Orders generate a pre-filled WhatsApp message with the desired product's name and price ready to send.
- **Real-Time Search:** Search bar optimized for finding any item by name or description.
- **Responsive Design:** 100% adaptable to any screen, with special views and interactive thumbnails for mobile devices.
- **Automated Deployment:** Configured with GitHub Actions for auto-deployment to GitHub Pages after every update.

---

## 💻 Technologies Used

- **React 18** (Main UI library)
- **Vite** (Ultrafast build tool)
- **Vanilla CSS (Modules)** (Animations, CSS variables, Grid/Flexbox layout)
- **Lucide React** (Clean and scalable iconography)
- **GitHub Actions** (Automated CI/CD)

---

## 🚀 How to run it locally

To clone and run this project on your own machine, you will need [Node.js](https://nodejs.org/) installed.

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USER/shoppix.git
cd shoppix
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```
> Go to `http://localhost:5173/` in your browser.

---

## 🛠️ How to add products

The complete catalog comes from a structured JSON data document within the project.
Simply edit the `src/data/products.js` file using this exact structure:

```javascript
{
    "id": 23,
    "name": "Product Name",
    "price": 1000, 
    "category": "Technology",
    "images": [
        "/images/product_folder/1.jpg"
    ],
    "description": "Your amazing product description here.",
    "specs": [
        "Featured spec 1",
        "Featured spec 2"
    ]
}
```
*Make sure to add the corresponding photo in `public/images/product_folder/`.* 📸

---

## 📱 Contact

Write to us for any doubts or questions:

- 📧 Email: **[shoppineex00@gmail.com](mailto:shoppineex00@gmail.com)**
- 📸 Instagram: **[@shoppix.hn](https://instagram.com/shoppix.hn)**
- 📘 Facebook: **[Shoppix.hn](https://facebook.com/Shoppix.hn)**

---
