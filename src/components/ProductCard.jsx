import { useState } from 'react'

export default function ProductCard({ product, onClick }) {
    const [imageLoaded, setImageLoaded] = useState(false)

    // Determine badge based on product properties
    const getBadge = () => {
        // Popular items (high-value products)
        if ([7, 8, 9, 11].includes(product.id)) return { label: 'Popular', type: 'popular' }
        return null
    }

    const badge = getBadge()

    return (
        <div
            onClick={onClick}
            style={{
                cursor: 'pointer',
                border: '1px solid transparent',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'white',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-hover)'
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = 'none'
            }}
        >
            <div style={{
                position: 'relative',
                backgroundColor: '#f3f4f6',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                marginBottom: '1rem',
                aspectRatio: '1/1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/* Badge */}
                {badge && (
                    <span className={`product-badge product-badge--${badge.type}`}>
                        {badge.label}
                    </span>
                )}

                {/* Skeleton placeholder */}
                {!imageLoaded && (
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%)',
                        backgroundSize: '200% 100%',
                        animation: 'shimmer 1.5s infinite',
                    }} />
                )}

                <img
                    src={product.images[0]}
                    alt={product.name}
                    loading="lazy"
                    onLoad={() => setImageLoaded(true)}
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        mixBlendMode: 'multiply',
                        opacity: imageLoaded ? 1 : 0,
                        transition: 'opacity 0.4s ease'
                    }}
                />
            </div>

            <div style={{ padding: '0 0.25rem 0.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.25rem' }}>{product.name}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginBottom: '0.5rem' }}>{product.category}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                        L. {product.price.toLocaleString()}
                    </span>
                    <span style={{
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        color: 'var(--color-accent)',
                        backgroundColor: '#eff6ff',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '0.25rem'
                    }}>
                        Ver Detalles
                    </span>
                </div>
            </div>
        </div>
    )
}
