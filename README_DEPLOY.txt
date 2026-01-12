# WOLF MOTORS DEPLOYMENT ANLEITUNG (PLESK)

Falls Sie einen weißen Bildschirm (White Screen) oder "MIME type" Fehler sehen, bedeutet das, dass Plesk den falschen Ordner anzeigt.

### DIE LÖSUNG:
Vite-Projekte müssen aus dem `dist` Ordner serviert werden.

**Option A: Document Root ändern (Empfohlen)**
1. Gehen Sie in Plesk zu **Hosting-Einstellungen**.
2. Suchen Sie das Feld **Dokumentenstamm** (Document Root).
3. Ändern Sie den Pfad so, dass er auf den `dist` Ordner zeigt (z.B. `httpdocs/dist`).
4. Speichern und Seite neu laden.

**Option B: Dateien verschieben**
1. Löschen Sie alle Dateien in Ihrem Web-Hauptverzeichnis (außer dem `dist` Ordner).
2. Kopieren Sie den **INHALT** des `dist` Ordners direkt in das Hauptverzeichnis.
3. Am Ende sollten Dateien wie `index.html` und der Ordner `assets` direkt im Hauptverzeichnis liegen (NICHT in `src` oder `dist`).

### Warum der Fehler passiert:
Ihr Browser versucht aktuell die Datei `src/main.jsx` zu laden. Das ist eine Entwickler-Datei, die Plesk/Apache nicht versteht. Nur die Dateien im `dist` Ordner sind fertig für das Internet.
