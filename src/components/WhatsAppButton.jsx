import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    const phoneNumber = "491607713477"; // German phone number format
    const message = encodeURIComponent("Hallo Wolf Motors, ich interessiere mich für eines Ihrer Fahrzeuge.");

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                backgroundColor: '#25D366',
                color: 'white',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                zIndex: 1000,
                transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            title="Per WhatsApp kontaktieren"
        >
            <MessageCircle size={32} />
        </a>
    );
}
