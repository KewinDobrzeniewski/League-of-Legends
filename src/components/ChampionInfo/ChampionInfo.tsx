import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as T from "./ChampionInfo.types";
import * as S from "./ChampionInfo.styles";
import { spotlight } from "../ChampionSpotlight/ChampionSpotlight";

const ChampionInfo = () => {
  const { id } = useParams();
  const championSpotlight = spotlight.find((character) => character.id === id);
  const [championStats, setChampionStats] = useState<T.ChampionStats>({
    lvl: 0,
    lvlup: 0,
    armor: 0,
    attackdamage: 0,
    attackspeed: 0,
    crit: 0,
    hp: 0,
    hpregen: 0,
    movespeed: 0,
    mp: 0,
    mpregen: 0,
    spellblock: 0,
    hpperlevel: 0,
    mpperlevel: 0,
    armorperlevel: 0,
    spellblockperlevel: 0,
    hpregenperlevel: 0,
    mpregenperlevel: 0,
    critperlevel: 0,
    attackdamageperlevel: 0,
    attackspeedperlevel: 0,
  });
  const [championInfo, setChampionInfo] = useState<T.ChampionInfo | null>(null);
  const [championLevel, setChampionLevel] = useState(1);
  useEffect(() => {
    axios
      .get<T.ChampionResponse>(
        `http://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion/${id}.json`
      )
      .then((res) => {
        setChampionInfo(res.data.data[id!]);
        setChampionStats(res.data.data[id!].stats);
      });
  }, []);

  const onLevelUp = () => {
    if (championLevel < 18) {
      setChampionLevel(championLevel + 1);
      setChampionStats({
        ...championStats,
        hp: championStats.hp + championStats.hpperlevel,
        mp: championStats.mp + championStats.mpperlevel,
        armor: championStats.armor + championStats.armorperlevel,
        spellblock: championStats.spellblock + championStats.spellblockperlevel,
        hpregen: championStats.hpregen + championStats.hpperlevel,
        mpregen: championStats.mpregen + championStats.mpregenperlevel,
        crit: championStats.crit + championStats.critperlevel,
        attackdamage:
          championStats.attackdamage + championStats.attackdamageperlevel,
        attackspeed:
          championStats.attackspeed + championStats.attackspeedperlevel,
      });
    }
  };

  const onLevelDown = () => {
    if (championLevel > 1) {
      setChampionStats({
        ...championStats,
        hp: championStats.hp - championStats.hpperlevel,
        mp: championStats.mp - championStats.mpperlevel,
        armor: championStats.armor - championStats.armorperlevel,
        spellblock:
          championStats?.spellblock - championStats?.spellblockperlevel,
        hpregen: championStats?.hpregen - championStats?.hpperlevel,
        mpregen: championStats?.mpregen - championStats?.mpregenperlevel,
        crit: championStats?.crit - championStats?.critperlevel,
        attackdamage:
          championStats?.attackdamage - championStats?.attackdamageperlevel,
        attackspeed:
          championStats?.attackspeed - championStats?.attackspeedperlevel,
      });
      setChampionLevel(championLevel - 1);
    }
  };

  return (
    <S.Background>
      <S.Container>
        <S.Headlight>
          {id}
          <S.Image
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`}
          />
        </S.Headlight>
        <S.Headlight>
          STATIS
          <S.Stats>
            <S.LevelUpDown onClick={onLevelUp}>LEVEL UP</S.LevelUpDown>
            <div>LVL : {championLevel}</div>
            <div>HP : {championStats.hp}</div>
            <div>MP : {championStats.mp}</div>
            <div>Move Speed : {championStats.movespeed}</div>
            <div>Armor :{championStats.armor}</div>
            <div>Spell Block : {championStats.spellblock}</div>
            <div>HP Regen : {championStats.hpregen}</div>
            <div>MP Regen : {championStats.mpregen}</div>
            <div>Crit : {championStats.crit}</div>
            <div>Attack Damage : {championStats.attackdamage}</div>
            <div>Attack Speed : {championStats.attackspeed}</div>
            <S.LevelUpDown onClick={onLevelDown}>LEVEL DOWN</S.LevelUpDown>
          </S.Stats>
        </S.Headlight>
        <S.Headlight>
          CHAMPION ABILITIES
          <S.ChampionTooltip title={id}>
            <S.SpellContainer>
              {championInfo?.spells.map((spell) => (
                <S.Passive
                  src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/spell/${spell.id}.png`}
                ></S.Passive>
              ))}
            </S.SpellContainer>
          </S.ChampionTooltip>
        </S.Headlight>
        <S.Headlight>
          CHAMPION PASSIVE
          <S.ChampionTooltip title={championInfo?.passive.name}>
            <S.SpellContainer>
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/passive/${championInfo?.passive.image.full}`}
              ></img>
            </S.SpellContainer>
          </S.ChampionTooltip>
        </S.Headlight>

        <S.Headlight>
          CHAMPION SPOTLIGHT
          <S.SpotlightContainer>
            <iframe
              width="560"
              height="315"
              src={championSpotlight?.url}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </S.SpotlightContainer>
        </S.Headlight>
        <S.Headlight>
          LORE
          <S.Text>{championInfo?.lore}</S.Text>
        </S.Headlight>
      </S.Container>
      <S.SkinContainer>
        {championInfo?.skins.map((skin) => (
          <S.Skin
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_${skin.num}.jpg`}
          ></S.Skin>
        ))}
      </S.SkinContainer>
      <S.BottomPage></S.BottomPage>
    </S.Background>
  );
};

export default ChampionInfo;
