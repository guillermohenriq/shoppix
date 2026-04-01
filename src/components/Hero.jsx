import { ShoppingBag, Truck, Shield, Star } from 'lucide-react'

export default function Hero({ onShopNow }) {
    return (
        <section className="hero-section" style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #1e3a5f 100%)',
            padding: '6rem 0 5rem',
            textAlign: 'center',
            marginBottom: '4rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative background elements */}
            <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-20%',
                width: '600px',
                height: '600px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%)',
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-30%',
                left: '-10%',
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%)',
                pointerEvents: 'none'
            }} />

            <div className="container animate-fade-in" style={{ position: 'relative', zIndex: 2 }}>
                {/* Trust badges */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    marginBottom: '1.5rem',
                    flexWrap: 'wrap'
                }}>
                    <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.35rem 0.85rem',
                        backgroundColor: 'rgba(255,255,255,0.08)',
                        borderRadius: '999px',
                        fontSize: '0.8rem',
                        color: 'rgba(255,255,255,0.7)',
                        backdropFilter: 'blur(4px)',
                        border: '1px solid rgba(255,255,255,0.08)'
                    }}>
                        <Truck size={14} /> Envío a todo Honduras
                    </span>
                    <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.35rem 0.85rem',
                        backgroundColor: 'rgba(255,255,255,0.08)',
                        borderRadius: '999px',
                        fontSize: '0.8rem',
                        color: 'rgba(255,255,255,0.7)',
                        backdropFilter: 'blur(4px)',
                        border: '1px solid rgba(255,255,255,0.08)'
                    }}>
                        <Shield size={14} /> Compra Segura
                    </span>
                </div>

                <h1 className="hero-title" style={{
                    fontSize: '3.5rem',
                    fontWeight: '800',
                    marginBottom: '1.5rem',
                    lineHeight: 1.1,
                    color: 'white'
                }}>
                    Descubre Productos <br />
                    <span style={{
                        background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>de Calidad Premium</span>
                </h1>

                <p style={{
                    fontSize: '1.2rem',
                    maxWidth: '550px',
                    margin: '0 auto 2.5rem',
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.6
                }}>
                    Tecnología, ropa, accesorios y más. Todo lo que necesitas
                    a precios accesibles, directo a tu puerta.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <button
                        className="btn"
                        style={{
                            fontSize: '1.05rem',
                            padding: '1rem 2.5rem',
                            background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                            color: 'white',
                            borderRadius: '0.75rem',
                            fontWeight: '600',
                            boxShadow: '0 4px 15px rgba(37, 99, 235, 0.4)',
                            transition: 'all 0.3s ease'
                        }}
                        onClick={onShopNow}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'translateY(-2px)'
                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 99, 235, 0.5)'
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'translateY(0)'
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(37, 99, 235, 0.4)'
                        }}
                    >
                        <ShoppingBag size={18} style={{ marginRight: '0.5rem' }} />
                        Explorar Catálogo
                    </button>
                </div>

                {/* Stats row */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '3rem',
                    marginTop: '3.5rem',
                    flexWrap: 'wrap'
                }}>
                    {[
                        { value: '21+', label: 'Productos' },
                        { value: '100%', label: 'Garantía' },
                        { value: '⭐ 5.0', label: 'Calificación' },
                    ].map((stat, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'white' }}>{stat.value}</div>
                            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.25rem' }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
