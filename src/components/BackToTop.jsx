import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export default function BackToTop() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 400)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <button
            className={`back-to-top ${show ? 'back-to-top--visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Volver arriba"
            title="Volver arriba"
        >
            <ChevronUp size={22} />
        </button>
    )
}
