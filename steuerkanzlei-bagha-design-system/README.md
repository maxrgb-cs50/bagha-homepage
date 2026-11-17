# Steuerkanzlei Bagha — Design System

Steuerkanzlei Bagha is a small tax-advisory practice in **Regensburg** serving **private clients** (Einkommensteuer, Vermietung, Bescheidprüfung) and **businesses** (Finanzbuchhaltung, Lohn, Jahresabschluss, Existenzgründung). The brand should feel like the firm itself: personal, discreet, precise, quietly premium — a one-to-one advisor, not a tax factory.

**Surfaces:** one — the firm website (plus anything printed/presented in its name). No app.

## Sources
Only three files were provided (copies in `assets/`; originals in `uploads/`):
- `uploads/Logo.jpeg` — black serif "HB" monogram with sweeping arc + "Steuerkanzlei Bagha" wordmark on warm off-white.
- `uploads/Foto 1.jpg` — studio portrait of the owner (navy blazer, white shirt, light-grey ground).
- `uploads/Foto 2.png` — consultation scene (advisor + two clients, walnut desk, window light, plant).

No website, codebase, Figma, fonts or style guide were supplied. **Everything beyond the logo and photos (palette extensions, type pairing, components, website kit) is a proposal derived from those three assets.**

Added later: the owner's e-mail "Leistungen & über mich" (15.11.2026) — the real service catalogue and profile text. Use the section **Leistungen & Über mich** (`leistungen.md`) for every service name and every statement about the owner; it takes precedence over the service examples in this README and the website kit.

---

## CONTENT FUNDAMENTALS
- **Language:** German. Formal **"Sie"** always (Sie / Ihre / Ihnen capitalised). Never "du".
- **Voice:** firm speaks as **"wir"**; owner never says "ich" on the site. Calm, competent, reassuring — no hype, no exclamation marks, no fear-mongering about the Finanzamt.
- **Clarity over jargon:** use the correct term, then explain it ("Umsatzsteuer-Voranmeldung (UStVA)"). Abbreviations get a Tooltip on first use.
- **Headlines:** short, declarative, often two-beat with a full stop: *"Steuern mit Klarheit. Beratung mit Haltung."*, *"Persönliche Beratung statt Massenabfertigung."* Sentence case.
- **Eyebrows:** one or two words, UPPERCASE tracked: LEISTUNGEN, ÜBER UNS, KONTAKT.
- **CTAs:** infinitive verb phrases — *Termin vereinbaren*, *Leistungen ansehen*, *Nachricht senden*, *Mehr erfahren*. One primary CTA per view.
- **Numbers & dates:** German formats — `1.250,00 €`, `31.07.2026`, `Mo–Fr`. Use en-dash for ranges.
- **Emoji:** never. **Exclamation marks:** avoid. **Promises:** never guarantee refunds or savings (professional conduct rules).
- **Legal:** Impressum + Datenschutz links in every footer; consent checkbox on every form.

## VISUAL FOUNDATIONS
- **Colour:** essentially monochrome. **Ink** `#141414` (the logo) on **warm paper** `#F7F5F1` (the logo ground). One brand colour — **Navy** `#1C2636`/`#141B27`, lifted from the suiting in the photography — used for the footer, value bands and hover states. **Sand** `#A88F6C` (the blazer in Foto 2) is a *thread*, not a fill: 40px hairline rules, eyebrow text, icon tints, focus ring. Status colours are earthy/muted (moss, ochre, brick).
- **Type:** *Cormorant Garamond* (500) for headings — a classical high-contrast serif echoing the logo; italic 400 for a second, softer line. *Hanken Grotesk* (400/500/600) for body and UI. Body 17/1.6, lead 20. Headlines large and airy; letterspacing only on eyebrows (.18em) and the wordmark (.08em).
- **Space:** 4px base; generous section padding (96px), 1200px container, 680px text measure. Whitespace is the main luxury signal.
- **Backgrounds:** flat paper; alternate sections with `--paper-50` + hairline top/bottom borders; one dark band (ink or navy) per page max. No gradients, no textures, no patterns, no illustrations.
- **Imagery:** real photography only — warm natural light, navy/white/beige wardrobe, wood and glass, people in genuine conversation. Shown full-colour, square corners, `object-fit: cover`, typically 4:5 or 3:2. No duotone, no grain, no stock icons as hero art.
- **Corners:** near-square. 0 for images, 2px controls, 4px cards, pill only for badges.
- **Borders:** 1px hairlines (`--ink-200`) do most of the structural work. Secondary buttons use a 1px ink outline. Prefer a rule to a box.
- **Shadows:** almost none at rest. Soft navy-tinted `--shadow-2` on hover-lift cards and floating chips; `--shadow-3` for dialogs/toasts. No inner shadows.
- **Cards:** white, 1px hairline, 4px radius, 32px padding; on hover lift 2px + shadow-2 + darker border.
- **Hover:** primary ink → navy; secondary/ghost get paper-200 fill; nav links draw a sand underline left→right; arrow icons nudge 3px right. **Press:** 1px translateY, no scale.
- **Focus:** 2px sand outline / 3px sand-200 halo on fields.
- **Motion:** restrained. 120–360ms, `cubic-bezier(.2,0,0,1)`, opacity/transform only. No bounces, no parallax, no auto-carousels.
- **Transparency & blur:** only the sticky header (paper at 92% + 8px blur) and the dialog scrim (navy 48% + 2px blur).
- **Layout:** sticky 80px header; two-column hero (copy left, photo right); 3-column card grids; footer navy with white logo.

## ICONOGRAPHY
- No icon assets were provided. **Substitution:** [Lucide](https://lucide.dev) line icons via CDN (`lucide-static@0.460.0`), rendered through the `Icon` component as a CSS mask so they inherit `currentColor`. Thin, geometric strokes sit well beside a Garamond.
- Size 16–22px in UI, tinted ink, navy-700 or sand-600. Inside ServiceCards, the icon sits in a 48px circle with a 1px sand ring.
- No emoji, no unicode pictograms, no filled/duotone icons, no hand-drawn SVG.
- Logo files (`assets/`): **vector SVGs** traced from the original JPEG — `logo.svg` / `logo-white.svg` (full lockup; two editable paths `#monogramm` and `#wortmarke`), `monogram(-white).svg`, `wordmark(-white).svg`. PNG fallbacks with transparency (`*.png`) and `logo-original.jpeg` are kept. The SVGs are an auto-trace, not the designer's master file — replace them if the original vector turns up. Use the white versions on navy/ink only. Minimum clear space = height of the "B" bowl. Never recolour to sand or stretch.

## Index
- `tokens.json` — every colour, type style, font, spacing step, radius, shadow and layout width; compiled to `tokens.css`
- `styles.css` — entry for the website kit; imports `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`
- `fonts/` — self-hosted woff2 (Cormorant Garamond, Hanken Grotesk)
- `assets/` — logos, `photos/portrait-bagha.jpg`, `photos/beratung.png`
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives (see below), one `<Comp>/preview.html` + `<Comp>/README.md` per component; bundle in `components/bundle.js`, stylesheet `components/bundle.css`, types `components/index.d.ts`; sources stay in `components/<group>/`
- `ui_kits/website/` — click-through website (Start, Leistungen, Über uns, Kontakt)
- `leistungen.md` — services and owner profile
- `components/Cover/preview.html`, `assets/notes/SKILL.from-standalone.md`

## Components
- **core:** Icon, Button, IconButton, Badge, Card, ServiceCard, SectionHeading
- **forms:** Input, Textarea, Select, Checkbox, Radio, Switch
- **feedback:** Alert, Dialog, Toast, Tooltip
- **navigation:** NavLink, Tabs, Accordion
- **brand:** Logo (lockups preview; replaces `guidelines/logo.html` and `guidelines/logo-marks.html`)

No source component library existed, so this is an authored standard set sized for a small firm's website. Intentional additions beyond the generic set: **Icon** (Lucide wrapper), **ServiceCard** (Leistungs-teaser), **SectionHeading** (eyebrow + serif headline pattern), **NavLink** (header nav), **Accordion** (FAQ).
