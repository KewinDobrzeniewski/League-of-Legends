export interface ChampionInfo {
  id: string;
  blurb: string;
  title: string;
  name: string;
  image: {
    full: string;
    sprite: string;
    group: string;
  };
  tags: string[];
}

export interface ChampionResponse {
  data: ChampionInfo[];
}
