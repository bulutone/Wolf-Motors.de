import { useEffect } from 'react';
import { CONFIG } from '../config';

export default function QRCodeRedirect() {
    useEffect(() => {
        window.location.href = CONFIG.qrRedirectUrl;
    }, []);

    return (
        <div style={{
            height: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '20px',
            color: 'var(--text-main)',
            textAlign: 'center',
            padding: '20px'
        }}>
            <div className="loader" style={{
                border: '4px solid var(--border)',
                borderTop: '4px solid var(--accent)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                animation: 'spin 1s linear infinite'
            }}></div>
            <p style={{ fontSize: '1.2rem', fontWeight: '500' }}>Yönlendiriliyorsunuz...</p>
            <p style={{ color: 'var(--text-muted)' }}>Birkaç saniye içinde WhatsApp'a aktarılacaksınız.</p>

            <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
}
