import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer style={{
            background: 'var(--bg-surface)',
            padding: '80px 0 40px',
            borderTop: '1px solid var(--border)'
        }}>
            <div className="container grid" style={{
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '3rem'
            }}>
                <div>
                    <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent)' }}>WOLF MOTORS</h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        Ihr zuverlässiger Partner für den An- und Verkauf von Fahrzeugen in Lünen und Umgebung. Qualität und Vertrauen stehen bei uns an erster Stelle.
                    </p>
                    <div className="flex" style={{ gap: '1rem' }}>
                        <a href="#" style={{ color: 'var(--text-muted)' }}><Instagram size={20} /></a>
                        <a href="#" style={{ color: 'var(--text-muted)' }}><Facebook size={20} /></a>
                    </div>
                </div>

                <div>
                    <h4 style={{ marginBottom: '1.5rem' }}>Schnellzugriff</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-muted)' }}>
                        <li><Link to="/">Startseite</Link></li>
                        <li><Link to="/impressum">Impressum</Link></li>
                        <li><Link to="/datenschutz">Datenschutz</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ marginBottom: '1.5rem' }}>Kontakt</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-muted)' }}>
                        <li className="flex align-center" style={{ gap: '10px' }}>
                            <MapPin size={18} style={{ color: 'var(--accent)' }} />
                            <span>Borker Straße 113, 44534 Lünen</span>
                        </li>
                        <li className="flex align-center" style={{ gap: '10px' }}>
                            <Phone size={18} />
                            <span>0160 7713477</span>
                        </li>
                        <li className="flex align-center" style={{ gap: '10px' }}>
                            <Mail size={18} />
                            <span>info@wolf-motors.de</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container" style={{
                marginTop: '60px',
                paddingTop: '20px',
                borderTop: '1px solid var(--border)',
                textAlign: 'center',
                fontSize: '0.875rem',
                color: 'var(--text-dim)'
            }}>
                <p>&copy; {new Date().getFullYear()} Wolf Motors. Alle Rechte vorbehalten. Website by Antigravity.</p>
            </div>
        </footer>
    );
}
