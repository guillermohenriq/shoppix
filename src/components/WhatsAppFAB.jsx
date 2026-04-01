import { MessageCircle } from 'lucide-react'

export default function WhatsAppFAB() {
    const phoneNumber = "50487761895"
    const message = encodeURIComponent("¡Hola! Me gustaría obtener más información sobre sus productos.")
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="whatsapp-fab"
            aria-label="Contactar por WhatsApp"
            title="¿Necesitas ayuda? Escríbenos por WhatsApp"
        >
            <div className="whatsapp-fab-pulse" />
            <div className="whatsapp-fab-icon">
                <MessageCircle size={28} strokeWidth={2.5} />
            </div>
            <span className="whatsapp-fab-label">¿Necesitas ayuda?</span>
        </a>
    )
}
