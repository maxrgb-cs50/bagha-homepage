# Export-Hinweise

Export des Design Systems „Steuerkanzlei Bagha" vom 16.11.2026.

## Enthalten
- `README.md`, `leistungen.md` – Brand Book und Leistungen/Profil
- `tokens.json` (Quelle) und `tokens.css` (kompiliert: CSS-Variablen, Typo-Klassen, @font-face)
- `components/bundle.js` + `components/bundle.css` – alle 20 Komponenten (React 18 als globales `window.React`), Namespace `window.SteuerkanzleiBaghaDesignSystem_3f9615`
- `components/<Comp>/README.md` + `preview.html` – Anleitung und Vorschau je Komponente
- `components/index.d.ts` – Props aller Komponenten
- `components/src/` – JSX-Quellen
- `fonts/` – Cormorant Garamond und Hanken Grotesk (latin) aus dem offiziellen Open-Source-Paket (Fontsource, SIL OFL). Gleiche Schriften, aber nicht byte-identisch mit den Dateien im Design System.

## Nicht enthalten – bitte selbst ergänzen
Bilder konnten nicht aus dem Design System gelesen werden. Ablegen unter:
- `assets/logo.svg`, `logo-white.svg`, `monogram.svg`, `monogram-white.svg`, `wordmark.svg`, `wordmark-white.svg` (+ PNG-Varianten, `logo-original.jpeg`)
- `assets/photos/portrait-bagha.jpg` (= Original „Foto 1.jpg"), `assets/photos/beratung.png` (= „Foto 2.png")

Ebenfalls nicht enthalten: die klickbare Website-Vorlage (`ui_kits/website/`), die alten Specimen-Seiten (`guidelines/`) und die Original-CSS unter `tokens/` – alles davon steht inhaltlich in `tokens.json`, `tokens.css` und `components/bundle.css`.

## Einbinden in eine eigene Seite
```html
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="components/bundle.css">
<script src="https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
<script src="components/bundle.js"></script>
```
`components/<Comp>/preview.html` erwarten, dass diese Dateien schon geladen sind (so wie im Design System). Zum lokalen Ansehen die vier Zeilen oben in den `<head>` einer Preview kopieren und Pfade anpassen (`../../tokens.css` …).
