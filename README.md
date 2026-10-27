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

## Vývoj

```bash
npm install
npm run dev
```

Build pro produkci: `npm run build` a `npm start`.

## Nasazení

Repozitář stačí v Vercelu naimportovat — framework se detekuje automaticky,
žádné env proměnné nejsou potřeba.
