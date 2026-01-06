export default function Impressum() {
    return (
        <main className="section-padding" style={{ paddingTop: '160px' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '3rem' }}>Impressum</h1>
                <div className="card">
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Angaben gemäß § 5 TMG</h2>
                        <p style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Wolf Motors</p>
                        <p>Borker Straße 113</p>
                        <p>44534 Lünen</p>
                        <p>Deutschland</p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Vertreten durch</h2>
                        <p>Kaji Sado (Inhaber)</p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Kontakt</h2>
                        <div style={{ display: 'grid', gap: '0.5rem' }}>
                            <p><strong>Telefon:</strong> 0160 7713477</p>
                            <p><strong>E-Mail:</strong> info@wolf-motors.de</p>
                            <p><strong>Webseite:</strong> www.wolf-motors.de</p>
                        </div>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Umsatzsteuer-ID</h2>
                        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                            [Wird nachgereicht]</p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Streitschlichtung</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', marginLeft: '5px' }}>
                                https://ec.europa.eu/consumers/odr
                            </a>.
                        </p>
                        <p style={{ color: 'var(--text-muted)' }}>
                            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Haftung für Inhalte</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
