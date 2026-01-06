export default function Datenschutz() {
    return (
        <main className="section-padding" style={{ paddingTop: '160px' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '3rem' }}>Datenschutz</h1>
                <div className="card" style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>1. Datenschutz auf einen Blick</h2>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--accent)' }}>Allgemeine Hinweise</h3>
                        <p style={{ marginBottom: '1rem' }}>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>2. Datenerfassung auf dieser Website</h2>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--accent)' }}>Wer ist verantwortlich für die Datenerfassung?</h3>
                        <p style={{ marginBottom: '1rem' }}>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>

                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--accent)' }}>Wie erfassen wir Ihre Daten?</h3>
                        <p style={{ marginBottom: '1rem' }}>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst.</p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>3. Ihre Rechte</h2>
                        <p style={{ marginBottom: '1rem' }}>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.</p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>4. Analyse-Tools und Tools von Drittanbietern</h2>
                        <p style={{ marginBottom: '1rem' }}>Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyse-Programmen. Detaillierte Informationen zu diesen Analyse-Programmen finden Sie in der folgenden Datenschutzerklärung.</p>
                    </section>

                    <div style={{ padding: '1.5rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', marginTop: '4rem' }}>
                        <p style={{ fontSize: '0.85rem' }}>
                            <strong>Hinweis:</strong> Diese Datenschutzerklärung dient als Platzhalter für die Entwicklungsphase. Für den produktiven Betrieb in Deutschland ist eine rechtliche Prüfung durch einen Fachanwalt oder ein spezialisiertes Portal (z.B. e-Recht24) zwingend erforderlich.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
