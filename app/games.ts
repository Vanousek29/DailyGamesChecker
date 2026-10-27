export type Game = {
  id: string;
  name: string;
  emoji: string;
  desc: string;
  url: string;
  tint: 'accent' | 'accent2' | 'neutral';
  img?: string;
};

export const GAMES: Game[] = [
  {
    id: 'wordle',
    name: 'Wordle',
    emoji: '🟩',
    desc: 'Slovo o pěti písmenech na šest pokusů',
    url: 'https://www.nytimes.com/games/wordle',
    tint: 'accent2',
    img: '/icons/wordle.png',
  },
  {
    id: 'connections',
    name: 'Connections',
    emoji: '🧩',
    desc: 'Šestnáct slov, čtyři skryté skupiny',
    url: 'https://www.nytimes.com/games/connections',
    tint: 'accent',
    img: '/icons/connections.png',
  },
  {
    id: 'strands',
    name: 'Strands',
    emoji: '🔤',
    desc: 'Tematická slova schovaná v mřížce písmen',
    url: 'https://www.nytimes.com/games/strands',
    tint: 'neutral',
    img: '/icons/strands.png',
  },
  {
    id: 'krillion',
    name: 'Krillion',
    emoji: '🦐',
    desc: 'Denní logická hádanka',
    url: 'https://playdaily.org/krillion',
    tint: 'accent',
  },
  {
    id: 'noillirk',
    name: 'Noillirk',
    emoji: '🔁',
    desc: 'Krillion pozpátku – stejná hra, obrácená logika',
    url: 'https://playdaily.org/noillirk',
    tint: 'accent2',
  },
  {
    id: 'spotle',
    name: 'Spotle',
    emoji: '🎤',
    desc: 'Uhádni interpreta podle nápověd',
    url: 'https://spotle.io',
    tint: 'neutral',
  },
  {
    id: 'globle',
    name: 'Globle',
    emoji: '🌍',
    desc: 'Najdi zemi podle vzdálenosti na glóbu',
    url: 'https://globle-game.com',
    tint: 'accent2',
  },
  {
    id: 'worldle',
    name: 'Worldle',
    emoji: '🗺️',
    desc: 'Uhádni zemi podle jejího obrysu',
    url: 'https://worldlegame.io',
    tint: 'neutral',
  },
  {
    id: 'spotlemovies',
    name: 'Spotle Movies',
    emoji: '🍿',
    desc: 'Uhádni film podle osmi nápověd',
    url: 'https://spotle.movie',
    tint: 'accent',
  },
  {
    id: 'poople',
    name: 'Poople',
    emoji: '💩',
    desc: 'Slovní žebřík – po jednom písmenu až k POOP',
    url: 'https://pooplegame.com',
    tint: 'accent2',
  },
  {
    id: 'framed',
    name: 'Framed',
    emoji: '🎬',
    desc: 'Film podle šesti políček',
    url: 'https://framed.wtf',
    tint: 'neutral',
  },
  {
    id: 'waffle',
    name: 'Waffle',
    emoji: '🧇',
    desc: 'Prohazuj písmena, dokud slova nesedí',
    url: 'https://wafflegame.net',
    tint: 'accent2',
  },
];

export const TINT: Record<Game['tint'], string> = {
  accent: 'var(--color-accent-200)',
  accent2: 'var(--color-accent-2-200)',
  neutral: 'var(--color-neutral-200)',
};
