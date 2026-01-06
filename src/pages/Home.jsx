import { Car, Shield, CheckCircle, Clock, Wallet, FileText, MapPin, Phone, Mail, ArrowRight, ExternalLink, Settings, RefreshCw, Send, MessageCircle } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
    const featuredCars = [
        { name: "Toyota Yaris 1.33 Dual-VVT-i", price: "5.900 €", year: "2012", km: "125.000 km", fuel: "Benzin", img: "/yaris.png", sold: true },
        { name: "BMW X1 xDrive20d", price: "12.450 €", year: "2014", km: "158.000 km", fuel: "Diesel", img: "/bmw-x1.png", sold: true },
        { name: "VW Golf 5 R32 Look / Sammlerstück", price: "18.200 €", year: "2008", km: "85.000 km", fuel: "Benzin", img: "/golf5.png", sold: true }
    ];

    const services = [
        { title: "Individuelle Finanzierung", desc: "Attraktive Zinssätze und flexible Laufzeiten durch unsere Partnerbanken.", icon: <Wallet size={40} /> },
        { title: "Zulassungsservice", desc: "Wir übernehmen die komplette Anmeldung inkl. Wunschkennzeichen für Sie.", icon: <FileText size={40} /> },
        { title: "Garantie & Gewährleistung", desc: "Sicherheit beim Kauf durch optionale Premium-Garantien bis zu 36 Monate.", icon: <Shield size={40} /> },
        { title: "Werkstatt-Check", desc: "Jedes Fahrzeug wird vor dem Verkauf technisch auf Herz und Nieren geprüft.", icon: <Settings size={40} /> },
        { title: "Fahrzeugbewertung", desc: "Faire und marktgerechte Bewertung Ihres aktuellen Fahrzeugs in wenigen Minuten.", icon: <RefreshCw size={40} /> },
        { title: "Export-Service", desc: "Professionelle Abwicklung von Zollunterlagen und Überführungskennzeichen.", icon: <Send size={40} /> }
    ];

    const waLink = "https://wa.me/491607713477?text=Hallo%20Wolf%20Motors%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eines%20Ihrer%20Fahrzeuge.";

    return (
        <main>
            {/* Hero Section */}
            <section className="section-padding" style={{
                minHeight: '85vh',
                display: 'flex',
                alignItems: 'center',
                background: 'linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.7)), url("/hero-fleet.png") center/cover no-repeat',
            }}>
                <div className="container">
                    <div className="animate-up text-center mx-auto" style={{ maxWidth: '900px' }}>
                        <span className="badge" style={{ marginBottom: '1.5rem' }}>Gegründet 2026 – Ihr neuer Partner in Lünen</span>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#0f172a', marginBottom: '1.5rem' }}>
                            Qualität & Vertrauen auf<br />
                            <span style={{ color: 'var(--accent)' }}>höchstem Niveau.</span>
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
                            Seit unserer Gründung im Jahr 2026 setzen wir neue Maßstäbe im Fahrzeughandel. Entdecken Sie handverlesene Gebrauchtwagen zu fairen Preisen.
                        </p>
                        <div className="flex justify-center" style={{ gap: '1rem', flexWrap: 'wrap' }}>
                            <a href="#inventory" className="btn-primary">Aktueller Bestand</a>
                            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">Unverbindliche Beratung</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats / Intro */}
            <section style={{ background: 'var(--bg-surface)', padding: '4rem 0', borderBottom: '1px solid var(--border)' }}>
                <div className="container text-center">
                    <div className="grid-3">
                        <div>
                            <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent)' }}>2026</div>
                            <p style={{ color: 'var(--text-dim)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Gegründet</p>
                        </div>
                        <div>
                            <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent)' }}>100%</div>
                            <p style={{ color: 'var(--text-dim)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Geprüfte Qualität</p>
                        </div>
                        <div>
                            <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent)' }}>Lünen</div>
                            <p style={{ color: 'var(--text-dim)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Unser Standort</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Vehicles Section */}
            <section id="inventory" className="section-padding" style={{ background: 'var(--bg-deep)' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Unsere aktuellen Highlights</h2>
                        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>Gepflegte Gebrauchtwagen mit lückenloser Historie und Werkstatt-Check.</p>
                    </div>

                    <div className="grid-3" style={{ gap: '2rem' }}>
                        {featuredCars.map((car, i) => (
                            <div key={i} className="card" style={{ padding: '0', overflow: 'hidden', border: 'none', boxShadow: 'var(--shadow-md)', position: 'relative' }}>
                                <div style={{ position: 'relative' }}>
                                    <img src={car.img} alt={car.name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                                    {car.sold && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%) rotate(-15deg)',
                                            background: 'rgba(239, 68, 68, 0.95)',
                                            color: 'white',
                                            padding: '0.6rem 2.5rem',
                                            borderRadius: '4px',
                                            fontWeight: 900,
                                            fontSize: '1.75rem',
                                            letterSpacing: '0.15em',
                                            border: '4px solid white',
                                            boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
                                            zIndex: 5,
                                            pointerEvents: 'none',
                                            textTransform: 'uppercase'
                                        }}>
                                            Verkauft
                                        </div>
                                    )}
                                    <div style={{
                                        position: 'absolute',
                                        top: '1rem',
                                        right: '1rem',
                                        background: car.sold ? '#64748b' : 'var(--accent)',
                                        color: 'white',
                                        padding: '0.4rem 0.8rem',
                                        borderRadius: 'var(--radius-sm)',
                                        fontWeight: 700,
                                        opacity: car.sold ? 0.8 : 1
                                    }}>
                                        {car.price}
                                    </div>
                                </div>
                                <div style={{ padding: '1.5rem', opacity: car.sold ? 0.7 : 1 }}>
                                    <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>{car.name}</h3>
                                    <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                                        <div className="flex align-center" style={{ gap: '6px' }}><Clock size={14} /> EZ {car.year}</div>
                                        <div className="flex align-center" style={{ gap: '6px' }}><ArrowRight size={14} /> {car.km}</div>
                                        <div className="flex align-center" style={{ gap: '6px' }}><Car size={14} /> {car.fuel}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center" style={{ marginTop: '4rem' }}>
                        <a href="https://mobile.de" target="_blank" className="btn-secondary">
                            Gesamter Bestand auf mobile.de ansehen <ExternalLink size={16} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="section-padding" style={{ background: 'var(--bg-surface)' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '5rem' }}>
                        <span className="badge">Professionelle Abwicklung</span>
                        <h2 style={{ fontSize: '3rem', marginTop: '1.5rem' }}>Unsere Leistungen</h2>
                        <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Wir bieten Ihnen kompetenten Service rund um Ihr neues Fahrzeug.</p>
                    </div>

                    <div className="grid-3" style={{ gap: '2.5rem' }}>
                        {services.map((service, i) => (
                            <div key={i} className="card" style={{ textAlign: 'center', transition: 'var(--transition)' }}>
                                <div style={{ color: 'var(--accent)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                                    {service.icon}
                                </div>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>{service.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="section-padding" style={{ background: 'var(--bg-subtle)' }}>
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center', gap: '5rem' }}>
                        <div className="animate-up">
                            <span className="badge">Tradition trifft Moderne</span>
                            <h2 style={{ fontSize: '3rem', margin: '1.5rem 0 2rem' }}>Über Wolf Motors</h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                                Wolf Motors wurde Anfang 2026 in Lünen mit einer klaren Vision gegründet: Den Autokauf so transparent, ehrlich und unkompliziert wie möglich zu gestalten. Als junges Unternehmen legen wir größten Wert auf die Zufriedenheit unserer Kunden.
                            </p>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                                Jedes Fahrzeug in unserem Bestand wird sorgfältig ausgewählt und einem gründlichen Werkstatt-Check unterzogen. Wir stehen hinter der Qualität unserer Automobile.
                            </p>
                            <div className="flex" style={{ gap: '2rem' }}>
                                <div>
                                    <h4 style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>Neu</h4>
                                    <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>Standort Lünen</p>
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>Fair</h4>
                                    <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>Preiskalkulation</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <img
                                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=2070"
                                alt="Automobile Expertise"
                                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xl)', width: '100%', height: '450px', objectFit: 'cover' }}
                            />
                            <div className="card" style={{ position: 'absolute', bottom: '-1.5rem', left: '-1.5rem', padding: '1.5rem 2rem', background: 'var(--text-main)', color: 'white', border: 'none', maxWidth: '320px' }}>
                                <p style={{ fontSize: '1rem', fontStyle: 'italic', marginBottom: '1rem' }}>"Qualität ist kein Zufall, sondern das Ergebnis ehrlicher Arbeit."</p>
                                <p style={{ fontWeight: 700, textAlign: 'right', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '0.5rem' }}>– Kaji Sado</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section - Updated to WhatsApp Only */}
            <section id="contact" className="section-padding">
                <div className="container">
                    <div className="text-center mx-auto" style={{ maxWidth: '800px' }}>
                        <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Kontaktieren Sie uns</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '4rem' }}>
                            Haben Sie Fragen zu einem Fahrzeug oder möchten Sie eine Probefahrt vereinbaren?
                            Für eine schnellstmögliche Antwort kontaktieren Sie uns bitte direkt per WhatsApp.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}>
                            <a
                                href={waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                                style={{
                                    padding: '1.5rem 4rem',
                                    fontSize: '1.25rem',
                                    backgroundColor: '#25D366',
                                    boxShadow: '0 10px 30px rgba(37, 211, 102, 0.4)'
                                }}
                            >
                                <MessageCircle size={28} /> Per WhatsApp schreiben
                            </a>

                            <div className="grid-3" style={{ width: '100%', gap: '2rem', marginTop: '2rem' }}>
                                <div className="flex align-center flex-direction-column" style={{ gap: '1rem', flexDirection: 'column' }}>
                                    <div style={{ width: '60px', height: '60px', background: 'var(--accent-soft)', color: 'var(--accent)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><MapPin size={28} /></div>
                                    <div className="text-center">
                                        <h5 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Adresse</h5>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Borker Straße 113, 44534 Lünen</p>
                                    </div>
                                </div>
                                <div className="flex align-center flex-direction-column" style={{ gap: '1rem', flexDirection: 'column' }}>
                                    <div style={{ width: '60px', height: '60px', background: 'var(--accent-soft)', color: 'var(--accent)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Phone size={28} /></div>
                                    <div className="text-center">
                                        <h5 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Telefon</h5>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>0160 7713477</p>
                                    </div>
                                </div>
                                <div className="flex align-center flex-direction-column" style={{ gap: '1rem', flexDirection: 'column' }}>
                                    <div style={{ width: '60px', height: '60px', background: 'var(--accent-soft)', color: 'var(--accent)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Mail size={28} /></div>
                                    <div className="text-center">
                                        <h5 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>E-Mail</h5>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>info@wolf-motors.de</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <WhatsAppButton />
        </main>
    );
}
