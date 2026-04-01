import { ShoppingBag, Search, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar({ currentView, onNavigate }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleNavigate = (page) => {
        onNavigate(page)
        setIsMenuOpen(false)
    }

    return (
        <nav style={{
            borderBottom: '1px solid rgba(229, 231, 235, 0.5)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            position: 'sticky',
            top: 0,
            zIndex: 50,
            transition: 'all 0.3s ease'
        }}>
            <div className="container navbar-container" style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                {/* Logo Section */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }} onClick={() => handleNavigate('home')}>
                    <img src="/images/logo.png" alt="Shoppix Logo" style={{ height: '50px' }} />
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '-0.5px' }}>Shoppix</span>
                </div>

                {/* Desktop Links */}
                <div className="navbar-links desktop-only" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <button
                        onClick={() => handleNavigate('home')}
                        style={{
                            background: 'none',
                            fontSize: '1rem',
                            fontWeight: currentView === 'home' ? '600' : '400',
                            color: currentView === 'home' ? 'var(--color-primary)' : 'var(--color-text-light)'
                        }}
                    >
                        Inicio
                    </button>
                    <button
                        onClick={() => handleNavigate('catalog')}
                        style={{
                            background: 'none',
                            fontSize: '1rem',
                            fontWeight: currentView === 'catalog' ? '600' : '400',
                            color: currentView === 'catalog' ? 'var(--color-primary)' : 'var(--color-text-light)'
                        }}
                    >
                        Catálogo
                    </button>
                    <button className="btn btn-primary" onClick={() => handleNavigate('catalog')}>
                        Ver Productos
                    </button>
                </div>

                {/* Mobile Menu Button - Visible only on mobile via CSS */}
                <div className="mobile-only" style={{ display: 'none' }}>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ background: 'none', padding: '0.5rem', color: 'var(--color-text)' }}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

            </div>

            {/* Mobile Drawer */}
            {isMenuOpen && (
                <div className="mobile-drawer" style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '100%',
                    backgroundColor: 'white',
                    borderBottom: '1px solid var(--color-border)',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    boxShadow: 'var(--shadow-lg)',
                    animation: 'fade-in 0.2s ease-out'
                }}>
                    <button
                        onClick={() => handleNavigate('home')}
                        style={{
                            background: 'none',
                            fontSize: '1.1rem',
                            textAlign: 'left',
                            padding: '0.75rem',
                            fontWeight: currentView === 'home' ? '600' : '400',
                            color: currentView === 'home' ? 'var(--color-primary)' : 'var(--color-text-light)',
                            borderBottom: '1px solid var(--color-bg)'
                        }}
                    >
                        Inicio
                    </button>
                    <button
                        onClick={() => handleNavigate('catalog')}
                        style={{
                            background: 'none',
                            fontSize: '1.1rem',
                            textAlign: 'left',
                            padding: '0.75rem',
                            fontWeight: currentView === 'catalog' ? '600' : '400',
                            color: currentView === 'catalog' ? 'var(--color-primary)' : 'var(--color-text-light)',
                            borderBottom: '1px solid var(--color-bg)'
                        }}
                    >
                        Catálogo
                    </button>
                    <button className="btn btn-primary" onClick={() => handleNavigate('catalog')} style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                        Ver Productos
                    </button>
                </div>
            )}
        </nav>
    )
}
