'use client';

import { useCallback, useEffect, useState } from 'react';
import { GAMES, TINT } from './games';

const KEY = 'daily-hry-done';

const today = () => {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
};

type Done = Record<string, boolean>;

export default function Home() {
  const [done, setDone] = useState<Done>({});
  const [day, setDay] = useState(() => today());
  const [hover, setHover] = useState<string | null>(null);
  const [touch, setTouch] = useState(false);
  const [dateLabel, setDateLabel] = useState('');

  const save = useCallback((next: Done) => {
    localStorage.setItem(KEY, JSON.stringify({ day: today(), done: next }));
  }, []);

  useEffect(() => {
    let saved: { day?: string; done?: Done } = {};
    try {
      saved = JSON.parse(localStorage.getItem(KEY) || '{}');
    } catch {
      // poškozený záznam ignorujeme a začínáme načisto
    }
    setDone(saved.day === today() ? saved.done || {} : {});

    setDateLabel(
      new Date().toLocaleDateString('cs-CZ', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
    );

    const mq = window.matchMedia('(hover: none)');
    setTouch(mq.matches);
    const onHoverChange = (e: MediaQueryListEvent) => setTouch(e.matches);
    mq.addEventListener('change', onHoverChange);

    return () => mq.removeEventListener('change', onHoverChange);
  }, []);

  // Po půlnoci (nebo po návratu na záložku) se seznam sám vyresetuje.
  useEffect(() => {
    const check = () => {
      if (day !== today()) {
        setDay(today());
        setDone({});
        save({});
        setDateLabel(
          new Date().toLocaleDateString('cs-CZ', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }),
        );
      }
    };
    const iv = setInterval(check, 30000);
    document.addEventListener('visibilitychange', check);

    return () => {
      clearInterval(iv);
      document.removeEventListener('visibilitychange', check);
    };
  }, [day, save]);

  const toggle = (id: string) => {
    const next = { ...done, [id]: !done[id] };
    setDone(next);
    save(next);
  };

  const resetAll = () => {
    setDone({});
    save({});
  };

  const n = GAMES.filter((g) => done[g.id]).length;
  const allDone = n === GAMES.length;

  return (
    <main className="page">
      <header className="page-header">
        <div className="page-title-group">
          <span className="date-label">{dateLabel || ' '}</span>
          <h1 className="page-title">Daily hry</h1>
        </div>
        <div className="counter">
          <div className="counter-badge">
            {n}/{GAMES.length}
          </div>
          <div className="counter-text">
            <span className="counter-label">{allDone ? 'Všechno hotovo!' : 'dnes dohráno'}</span>
            <span className="counter-sub">
              {allDone ? 'Zítra zase' : `Zbývá ${GAMES.length - n}`}
            </span>
          </div>
        </div>
      </header>

      <section className="game-grid">
        {GAMES.map((g) => {
          const isDone = !!done[g.id];
          const raised = hover === g.id && !touch;
          const showPlay = touch || hover === g.id;

          return (
            <article
              key={g.id}
              className={`game-card${isDone ? ' is-done' : ''}${raised ? ' is-raised' : ''}`}
              onMouseEnter={() => setHover(g.id)}
              onMouseLeave={() => setHover((h) => (h === g.id ? null : h))}
            >
              <div className="game-card-top">
                <div className="game-icon" style={{ background: TINT[g.tint] }}>
                  {g.img ? <img src={g.img} alt="" width={44} height={44} /> : g.emoji}
                </div>
                {isDone && (
                  <div className="game-check">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                )}
              </div>

              <div className="game-text">
                <h2 className="game-name">{g.name}</h2>
                <p className="game-desc">{g.desc}</p>
              </div>

              <div className="game-card-bottom">
                <label className="game-toggle">
                  <input type="checkbox" checked={isDone} onChange={() => toggle(g.id)} />
                  Dnes hotovo
                </label>
                <a
                  className={`btn btn-primary game-play${showPlay ? ' is-visible' : ''}`}
                  href={g.url}
                  target="_blank"
                  rel="noopener"
                  tabIndex={showPlay ? undefined : -1}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2.75"
                    strokeLinejoin="round"
                  >
                    <path d="M7 4v16l13-8z" />
                  </svg>
                  Play
                </a>
              </div>
            </article>
          );
        })}
      </section>

      <footer className="page-footer">
        <button className="btn btn-ghost" onClick={resetAll}>
          Odškrtnout vše
        </button>
      </footer>
    </main>
  );
}
