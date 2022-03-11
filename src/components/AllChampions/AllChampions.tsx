import axios from "axios";
import { useEffect, useState } from "react";
import CharacterCard from "../ChampionCard/ChampionCard";
import * as T from "./AllChampions.types";
import * as S from "./AllChampions.styles";

const AllChampions = () => {
  const [characters, setCharacters] = useState<T.ChampionInfo[]>([]);

  useEffect(() => {
    axios
      .get<T.ChampionResponse>(
        "http://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion.json"
      )
      .then((res) => {
        setCharacters(Object.values(res.data.data));
      });
  }, []);

  return (
    <S.Container>
      {characters.map((details) => (
        <CharacterCard {...details} />
      ))}
    </S.Container>
  );
};

export default AllChampions;
