# Daily Games Checker

Osobní rozcestník denních her ("Daily hry") — seznam dailies s odškrtáváním, které se
každou půlnoc samo vyresetuje. Postaveno na Next.js (App Router) a nasazeno na Vercelu.

## Jak to funguje

- Seznam her je v [`app/games.ts`](app/games.ts) — přidání hry je jeden záznam v poli.
- Odškrtnutí se ukládá do `localStorage` pod klíčem `daily-hry-done` spolu s datem;
  jakmile se den změní (kontrola každých 30 s a při návratu na záložku), seznam se vyčistí.
- Tlačítko „Play“ se objeví při najetí myší, na dotykových zařízeních je vidět vždy.
- Vzhled stojí na design systému Organic — tokeny a komponentové třídy jsou
  v [`app/design-system.css`](app/design-system.css), stránkové styly v [`app/globals.css`](app/globals.css).

## Přidání na plochu telefonu

Appka má web manifest ([`app/manifest.ts`](app/manifest.ts)) a ikony, takže jde
nainstalovat jako PWA a spouští se bez prohlížečového rámu (`display: standalone`):

- **Android (Chrome):** nabídka ⋮ → *Přidat na plochu* / *Instalovat aplikaci*.
- **iOS (Safari):** tlačítko Sdílet → *Přidat na plochu*.

Ikona je zelená fajfka na tónu `--color-accent-2`, stejná jako označení dohrané hry;
leží v `public/icon-192.png`, `public/icon-512.png`, `app/icon.png` (favicon)
a `app/apple-icon.png` (iOS). Servisní worker potřeba není — instalaci zvládne
samotný manifest.

## Vývoj

```bash
npm install
npm run dev
```

Build pro produkci: `npm run build` a `npm start`.

## Nasazení

Repozitář stačí v Vercelu naimportovat — framework se detekuje automaticky,
žádné env proměnné nejsou potřeba.
