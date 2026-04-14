import { useState } from 'react'
import { X, MessageCircle } from 'lucide-react'

const resolveImg = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

export default function ProductModal({ product, allProducts, onSelect, onClose }) {
    if (!product) return null

    // State for selected image index
    const [selectedIndex, setSelectedIndex] = useState(0)
    const selectedImage = product.images && product.images.length > 0 ? product.images[selectedIndex] : ''

    // WhatsApp configuration
    const phoneNumber = "50487761895" // CHANGE THIS NUMBER
    const message = encodeURIComponent(`Hola, estoy interesado en comprar: ${product.name} (L. ${product.price}).`)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            padding: '1rem'
        }} onClick={onClose}>

            <div
                onClick={e => e.stopPropagation()}
                style={{
                    backgroundColor: 'white',
                    borderRadius: '1rem',
                    width: '100%',
                    maxWidth: '900px',
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    position: 'relative',
                    display: 'grid',
                    boxShadow: 'var(--shadow-lg)'
                }}
                className="modal-grid"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'white',
                        borderRadius: '50%',
                        padding: '0.5rem',
                        boxShadow: 'var(--shadow)',
                        zIndex: 10
                    }}
                >
                    <X size={24} />
                </button>

                {/* Image Side */}
                <div className="modal-padding" style={{
                    backgroundColor: '#f9fafb',
                    padding: '3rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem'
                }}>
                    {/* Main Image */}
                    <div style={{
                        width: '100%',
                        height: '300px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src={resolveImg(selectedImage)}
                            alt={product.name}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain',
                                mixBlendMode: 'multiply'
                            }}
                        />
                    </div>

                    {/* Thumbnail Gallery */}
                    {product.images && product.images.length > 1 && (
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            {product.images.map((img, idx) => {
                                const isSelected = selectedIndex === idx
                                return (
                                    <div
                                        key={idx}
                                        onClick={() => setSelectedIndex(idx)}
                                        style={{
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '0.5rem',
                                            border: '2px solid',
                                            borderColor: isSelected ? '#2563eb' : '#e5e7eb',
                                            cursor: 'pointer',
                                            padding: '0.25rem',
                                            backgroundColor: 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transform: isSelected ? 'scale(1.08)' : 'scale(1)',
                                            boxShadow: isSelected ? '0 0 0 2px rgba(37, 99, 235, 0.3)' : 'none',
                                            transition: 'all 0.2s ease'
                                        }}
                                    >
                                        <img
                                            src={resolveImg(img)}
                                            alt={`${product.name} ${idx + 1}`}
                                            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>

                {/* Info Side */}
                <div className="modal-padding" style={{ padding: '3rem' }}>
                    <span style={{
                        display: 'inline-block',
                        padding: '0.25rem 0.75rem',
                        backgroundColor: '#e0e7ff',
                        color: 'var(--color-accent)',
                        borderRadius: '999px',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        marginBottom: '1rem'
                    }}>
                        {product.category}
                    </span>

                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', lineHeight: 1.1 }}>
                        {product.name}
                    </h2>

                    <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                        L. {product.price.toLocaleString()}
                    </p>

                    <div style={{ marginBottom: '2rem', color: 'var(--color-text-light)', lineHeight: '1.6' }}>
                        <p style={{ marginBottom: '1rem' }}>{product.description}</p>

                        {product.specs && (
                            <div style={{ padding: '1rem', backgroundColor: '#f3f4f6', borderRadius: '0.5rem' }}>
                                <h4 style={{ fontWeight: '600', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Especificaciones:</h4>
                                <ul style={{ listStyle: 'inside disc', fontSize: '0.9rem' }}>
                                    {product.specs.map((spec, i) => (
                                        <li key={i}>{spec}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary"
                        style={{
                            width: '100%',
                            backgroundColor: '#25D366', // WhatsApp Green
                            fontSize: '1.1rem'
                        }}
                    >
                        <div style={{ marginRight: '0.5rem' }}><MessageCircle size={20} /></div>
                        Pedir por WhatsApp
                    </a>

                    <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#9ca3af', textAlign: 'center' }}>
                        Serás redirigido a WhatsApp para coordinar la entrega.
                    </p>

                    {/* Related Products */}
                    {allProducts && (
                        <div style={{ marginTop: '3rem', borderTop: '1px solid var(--color-border)', paddingTop: '2rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>También te podría interesar</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '1rem' }}>
                                {allProducts
                                    .filter(p => p.category === product.category && p.id !== product.id)
                                    .slice(0, 3)
                                    .map(related => (
                                        <div
                                            key={related.id}
                                            onClick={() => onSelect(related)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <div style={{
                                                backgroundColor: '#f3f4f6',
                                                borderRadius: '0.5rem',
                                                aspectRatio: '1/1',
                                                marginBottom: '0.5rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                padding: '0.5rem'
                                            }}>
                                                <img
                                                    src={resolveImg(related.images[0])}
                                                    alt={related.name}
                                                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }}
                                                />
                                            </div>
                                            <p style={{ fontSize: '0.85rem', fontWeight: '600', lineHeight: '1.2', marginBottom: '0.25rem' }}>{related.name}</p>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)' }}>L. {related.price}</p>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}
