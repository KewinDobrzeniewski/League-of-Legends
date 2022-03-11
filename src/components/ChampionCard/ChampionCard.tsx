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
    <S.Container>
      <S.Name>{name}</S.Name>
      <S.Tags>
        {tags.map((spec) => (
          <S.Tags>{spec}</S.Tags>
        ))}
      </S.Tags>
      <S.ButtonContainer
        onClick={() => {
          navigate(id);
        }}
      >
        <S.ImgContainer
          src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${image.full}`}
        />
      </S.ButtonContainer>
      <S.Text>{title}</S.Text>
      <S.Text>{blurb}</S.Text>
    </S.Container>
  );
};

export default CharacterCard;
