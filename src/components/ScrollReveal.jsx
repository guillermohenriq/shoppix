import { useEffect, useRef, useState } from 'react'

export default function ScrollReveal({ children, delay = 0, className = '' }) {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay)
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [delay])

    return (
        <div
            ref={ref}
            className={`scroll-reveal ${isVisible ? 'scroll-reveal--visible' : ''} ${className}`}
        >
            {children}
        </div>
    )
}
