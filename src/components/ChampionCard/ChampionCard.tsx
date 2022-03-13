import { useNavigate } from "react-router-dom";
import * as T from "./ChampionCard.types";
import * as S from "./ChampionCard.styles";

const CharacterCard = ({
  name,
  title,
  blurb,
  image,
  tags,
  id,
}: T.CharacterCard) => {
  const navigate = useNavigate();
  return (
    <S.Columns>
      <S.Container>
        <S.Tags>
          {tags.map((spec) => (
            <S.Tags>{spec}</S.Tags>
          ))}
        </S.Tags>
        <S.Name>{name}</S.Name>
        <S.ButtonContainer
          onClick={() => {
            navigate(id);
          }}
        >
          <S.ImgContainer
            src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${image.full}`}
          />
        </S.ButtonContainer>
        <S.Name>{title}</S.Name>
        <S.Text>{blurb}</S.Text>
      </S.Container>
    </S.Columns>
  );
};

export default CharacterCard;
