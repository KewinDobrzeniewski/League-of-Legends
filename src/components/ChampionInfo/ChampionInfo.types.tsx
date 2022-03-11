import { NumericLiteral } from "typescript";

export interface ChampionInfo {
  id: string;
  blurb: string;
  title: string;
  name: string;
  lore: string;
  passive: ChampionPassive;
  image: {
    full: string;
    sprite: string;
    group: string;
  };
  tags: string[];
  stats: ChampionStats;
  skins: ChampionSkin[];
  spells: ChampionSpell[];
  spotlight: ChampionSpotlight[];
}

export interface ChampionResponse {
  data: {
    [key: string]: ChampionInfo;
  };
}

interface ChampionSkin {
  id: number;
  num: number;
  name: string;
  chromas: boolean;
}

export interface ChampionStats {
  lvl: number;
  lvlup: number;
  hp: number;
  mp: number;
  movespeed: number;
  armor: number;
  spellblock: number;
  hpregen: number;
  mpregen: number;
  crit: number;
  attackdamage: number;
  attackspeed: number;
  hpperlevel: number;
  mpperlevel: number;
  armorperlevel: number;
  spellblockperlevel: number;
  hpregenperlevel: number;
  mpregenperlevel: number;
  critperlevel: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
}

export interface ChampionSpell {
  id: string;
  name: string;
  descritpion: string;
  tooltip: string;
}

export interface ChampionSpotlight {
  id: string;
  url: string;
}

export interface ChampionPassive {
  name: string;
  description: string;
  image: {
    full: string;
  };
}
