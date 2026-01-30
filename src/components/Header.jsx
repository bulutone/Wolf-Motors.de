import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Handle smooth scroll for anchor links
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <header className="glass-header">
      <div className="container flex justify-between align-center" style={{ height: '80px' }}>
        <Link to="/" className="flex align-center" style={{ gap: '12px' }}>
          <img src={logo} alt="Wolf Motors" style={{ height: '60px', objectFit: 'contain' }} />
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'none' }}>
          <style>{`
            @media (min-width: 992px) {
              .desktop-nav { display: flex !important; gap: 2.5rem; flex: 1; justify-content: center; }
              .mobile-toggle { display: none !important; }
            }
          `}</style>
          <Link to="/" className="nav-link">Startseite</Link>
          <Link to="/#about" className="nav-link">Über uns</Link>
          <Link to="/#services" className="nav-link">Leistungen</Link>
          <Link to="/#contact" className="nav-link">Kontakt</Link>
        </nav>

        <div className="flex align-center" style={{ gap: '1rem', minWidth: '200px', justifyContent: 'flex-end' }}>
          <a href="tel:01607713477" className="btn-primary flex align-center" style={{ gap: '8px', padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}>
            <Phone size={16} />
            <span className="hide-mobile">Rückruf anfordern</span>
          </a>
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ color: 'var(--text-main)' }}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu" style={{
          position: 'absolute',
          top: '80px',
          left: 0,
          right: 0,
          background: 'var(--bg-surface)',
          padding: '2rem',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <Link to="/" onClick={() => setIsOpen(false)}>Startseite</Link>
          <Link to="/#about" onClick={() => setIsOpen(false)}>Über uns</Link>
          <Link to="/#services" onClick={() => setIsOpen(false)}>Leistungen</Link>
          <Link to="/#contact" onClick={() => setIsOpen(false)}>Kontakt</Link>
        </div>
      )}
    </header>
  );
}
