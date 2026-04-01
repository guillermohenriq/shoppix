import { useState, useMemo } from 'react'
import ProductCard from './ProductCard'
import { Search } from 'lucide-react'

export default function Catalog({ products, selectedCategory, onSelectCategory, onProductClick }) {
    const [searchTerm, setSearchTerm] = useState("")

    // Extract unique categories
    const categories = useMemo(() => {
        const cats = ["Todos", ...new Set(products.map(p => p.category))]
        return cats
    }, [products])

    // Filter products
    const filteredProducts = useMemo(() => {
        let filtered = products

        // Filter by Category
        if (selectedCategory !== "Todos") {
            filtered = filtered.filter(p => p.category === selectedCategory)
        }

        // Filter by Search Term
        if (searchTerm) {
            const lowerTerm = searchTerm.toLowerCase()
            filtered = filtered.filter(p =>
                p.name.toLowerCase().includes(lowerTerm) ||
                p.description.toLowerCase().includes(lowerTerm)
            )
        }

        return filtered
    }, [products, selectedCategory, searchTerm])

    return (
        <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>

            <header className="mb-8 text-center">
                <h2 className="section-title">Nuestro Catálogo</h2>

                {/* Search Bar */}
                <div style={{ maxWidth: '500px', margin: '0 auto 2rem', position: 'relative' }}>
                    <input
                        type="text"
                        placeholder="Buscar productos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            paddingLeft: '2.5rem',
                            borderRadius: '2rem',
                            border: '1px solid var(--color-border)',
                            fontSize: '1rem',
                            outline: 'none',
                            boxShadow: 'var(--shadow-sm)',
                            transition: 'all 0.2s'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                    />
                    <Search
                        size={20}
                        style={{
                            position: 'absolute',
                            left: '1rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: '#9ca3af'
                        }}
                    />
                </div>

                {/* Category Pills */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => onSelectCategory(cat)}
                            style={{
                                padding: '0.5rem 1.25rem',
                                borderRadius: '2rem',
                                fontSize: '0.9rem',
                                transition: 'all 0.2s',
                                backgroundColor: selectedCategory === cat ? 'var(--color-primary)' : 'white',
                                color: selectedCategory === cat ? 'white' : 'var(--color-text-light)',
                                border: '1px solid',
                                borderColor: selectedCategory === cat ? 'var(--color-primary)' : '#e5e7eb'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </header>

            {/* Product Grid */}
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2.5rem' }}>
                {filteredProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onClick={() => onProductClick(product)}
                    />
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center" style={{ padding: '3rem', color: 'var(--color-text-light)' }}>
                    No se encontraron productos que coincidan con tu búsqueda.
                </div>
            )}

        </div>
    )
}
