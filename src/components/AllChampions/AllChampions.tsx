import axios from "axios";
import { useEffect, useState } from "react";
import CharacterCard from "../ChampionCard/ChampionCard";
import * as T from "./AllChampions.types";
import * as S from "./AllChampions.styles";

const AllChampions = () => {
  const [characters, setCharacters] = useState<T.ChampionInfo[]>([]);
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  if (input.length > 0) {
    characters.filter((i) => {
      return i.name.match(input);
    });
  }

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
      <S.InputContainer
        type={""}
        placeholder={"Search Bar"}
        onChange={handleChange}
        value={input}
      ></S.InputContainer>
      <S.ChampionContainer>
        {characters.map((details) => (
          <CharacterCard {...details} />
        ))}
      </S.ChampionContainer>
      <S.BottomPage></S.BottomPage>
    </S.Container>
  );
};

export default AllChampions;
