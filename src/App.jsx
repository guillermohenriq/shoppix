import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import ProductModal from './components/ProductModal'
import CategoryGrid from './components/CategoryGrid'
import WhatsAppFAB from './components/WhatsAppFAB'
import BackToTop from './components/BackToTop'
import ScrollReveal from './components/ScrollReveal'
import productsData from './data/products.js'
import { Mail, Instagram, Facebook } from 'lucide-react'

function App() {
    const [view, setView] = useState('home') // 'home' or 'catalog'
    const [selectedCategory, setSelectedCategory] = useState("Todos")
    const [selectedProduct, setSelectedProduct] = useState(null)

    // Simple router
    const navigateTo = (page) => {
        setView(page)
        window.scrollTo(0, 0)
    }

    const handleCategorySelect = (category) => {
        setSelectedCategory(category)
        setView('catalog')
        window.scrollTo(0, 0)
    }

    return (
        <div className="app">
            <Navbar currentView={view} onNavigate={navigateTo} />

            <main className="animate-fade-in">
                {view === 'home' && (
                    <>
                        <Hero onShopNow={() => navigateTo('catalog')} />

                        <CategoryGrid
                            products={productsData}
                            onSelectCategory={handleCategorySelect}
                        />

                        {/* Featured Section */}
                        <section className="container mb-8">
                            <h2 className="section-title">Destacados</h2>
                            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
                                {productsData.slice(0, 4).map((product, idx) => (
                                    <ScrollReveal key={product.id} delay={idx * 100}>
                                        <div
                                            className="product-card"
                                            onClick={() => setSelectedProduct(product)}
                                            style={{
                                                cursor: 'pointer',
                                                border: '1px solid var(--color-border)',
                                                borderRadius: 'var(--radius)',
                                                overflow: 'hidden',
                                                backgroundColor: 'white',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-5px)'
                                                e.currentTarget.style.boxShadow = 'var(--shadow-hover)'
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)'
                                                e.currentTarget.style.boxShadow = 'none'
                                            }}
                                        >
                                            <div style={{ height: '200px', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <img src={`${import.meta.env.BASE_URL}${product.images[0].replace(/^\/+/, '')}`} alt={product.name} loading="lazy" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                                            </div>
                                            <div style={{ padding: '1rem' }}>
                                                <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{product.name}</h3>
                                                <p style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>L. {product.price.toLocaleString()}</p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </section>
                    </>
                )}

                {view === 'catalog' && (
                    <Catalog
                        products={productsData}
                        selectedCategory={selectedCategory}
                        onSelectCategory={setSelectedCategory}
                        onProductClick={setSelectedProduct}
                    />
                )}
            </main>

            {/* Improved Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-grid">
                        {/* Brand */}
                        <div className="footer-section">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Shoppix" style={{ height: '40px' }} />
                                <span style={{ fontSize: '1.25rem', fontWeight: '700', color: 'white' }}>Shoppix</span>
                            </div>
                            <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: '1.6' }}>
                                Tu tienda online de productos de calidad premium en Honduras. Tecnología, ropa, accesorios y más.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-section">
                            <h4>Navegación</h4>
                            <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home') }}>Inicio</a>
                            <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('catalog') }}>Catálogo</a>
                            <a href="#" onClick={(e) => { e.preventDefault(); handleCategorySelect('Tecnología') }}>Tecnología</a>
                            <a href="#" onClick={(e) => { e.preventDefault(); handleCategorySelect('Ropa') }}>Ropa</a>
                        </div>

                        {/* Contact */}
                        <div className="footer-section">
                            <h4>Contáctanos</h4>
                            <a href="mailto:shoppineex00@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Mail size={16} /> shoppineex00@gmail.com
                            </a>
                            <a href="https://instagram.com/shoppix.hn" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Instagram size={16} /> @shoppix.hn
                            </a>
                            <a href="https://facebook.com/Shoppix.hn" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Facebook size={16} /> Shoppix.hn
                            </a>
                        </div>

                        {/* Info */}
                        <div className="footer-section">
                            <h4>Información</h4>
                            <p style={{ color: '#9ca3af' }}>📦 Envío a todo Honduras</p>
                            <p style={{ color: '#9ca3af' }}>💬 Pedidos por WhatsApp</p>
                            <p style={{ color: '#9ca3af' }}>✅ Garantía de calidad</p>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} Shoppix. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>

            {/* Floating elements */}
            <WhatsAppFAB />
            <BackToTop />

            {selectedProduct && (
                <ProductModal
                    key={selectedProduct.id}
                    product={selectedProduct}
                    allProducts={productsData}
                    onSelect={setSelectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </div>
    )
}

export default App
