import { useMemo } from 'react'
import ScrollReveal from './ScrollReveal'

export default function CategoryGrid({ products, onSelectCategory }) {
    // Extract unique categories with counts
    const categories = useMemo(() => {
        const catMap = {}
        products.forEach(p => {
            catMap[p.category] = (catMap[p.category] || 0) + 1
        })
        return Object.entries(catMap).map(([name, count]) => ({ name, count }))
    }, [products])

    // Specific colors for some known categories, fallback for others
    const getCategoryColor = (cat) => {
        const map = {
            'Tecnología': 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
            'Hogar': 'linear-gradient(135deg, #059669 0%, #047857 100%)',
            'Ropa': 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
            'Deportes': 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
            'Accesorios': 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
            'Cocina': 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)',
            'Iluminación': 'linear-gradient(135deg, #ca8a04 0%, #a16207 100%)',
            'Juguetes': 'linear-gradient(135deg, #db2777 0%, #be185d 100%)',
            'Belleza': 'linear-gradient(135deg, #e11d48 0%, #be123c 100%)',
            'Calzado': 'linear-gradient(135deg, #4f46e5 0%, #4338ca 100%)'
        }
        return map[cat] || 'linear-gradient(135deg, #4b5563 0%, #374151 100%)'
    }

    const getCategoryEmoji = (cat) => {
        const map = {
            'Tecnología': '💻',
            'Hogar': '🏠',
            'Ropa': '👕',
            'Deportes': '⚽',
            'Accesorios': '🔌',
            'Cocina': '🍳',
            'Iluminación': '💡',
            'Juguetes': '🧸',
            'Belleza': '💄',
            'Calzado': '👟'
        }
        return map[cat] || '📦'
    }

    return (
        <section className="container mb-8">
            <h2 className="section-title">Categorías</h2>
            <div className="category-grid" style={{
                display: 'grid',
                gap: '1rem'
            }}>
                {categories.map((cat, idx) => (
                    <ScrollReveal key={cat.name} delay={idx * 80}>
                        <div
                            onClick={() => onSelectCategory(cat.name)}
                            style={{
                                background: getCategoryColor(cat.name),
                                borderRadius: '0.75rem',
                                padding: '1.5rem 1rem',
                                color: 'white',
                                cursor: 'pointer',
                                textAlign: 'center',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: '120px',
                                gap: '0.5rem',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)'
                                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)'
                                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                            }}
                        >
                            <span style={{ fontSize: '1.75rem' }}>{getCategoryEmoji(cat.name)}</span>
                            <span style={{
                                fontWeight: '700',
                                fontSize: '1.1rem',
                                textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                            }}>{cat.name}</span>
                            <span style={{
                                fontSize: '0.8rem',
                                opacity: 0.75,
                                backgroundColor: 'rgba(255,255,255,0.15)',
                                padding: '0.15rem 0.6rem',
                                borderRadius: '999px'
                            }}>{cat.count} {cat.count === 1 ? 'producto' : 'productos'}</span>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    )
}
