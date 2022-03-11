import * as S from "./HomePage.styles";
import {
  CarouselProvider,
  Slider,
  Slide,
  Dot,
  Image,
  ButtonPlay,
  ImageWithZoom,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const HomePage = () => {
  return (
    <S.Container>
      <S.Logo
        src={
          "https://www.leagueoflegends.com/static/logo-1200-589b3ef693ce8a750fa4b4704f1e61f2.png"
        }
      ></S.Logo>

      <CarouselProvider
        visibleSlides={3}
        totalSlides={4}
        step={3}
        naturalSlideWidth={520}
        naturalSlideHeight={300}
        hasMasterSpinner
      >
        <S.Container>
          <Slider>
            <Slide index={0}>
              <ImageWithZoom src="https://wallpaperaccess.com/full/7485842.jpg"></ImageWithZoom>
            </Slide>
            <Slide index={1}>
              <ImageWithZoom src="https://9to5fortnite.com/wp-content/uploads/2022/02/League-of-Legends-Patch-125-Yi-and-Gwen-Nerfs-Samira.jpg"></ImageWithZoom>
            </Slide>
            <Slide index={2}>
              <ImageWithZoom src="https://images.hdqwalls.com/wallpapers/lol-world-championship-2020-4k-b0.jpg"></ImageWithZoom>
            </Slide>

            <Slide index={3}>
              <ImageWithZoom src="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LeagueofLegends_RiotGames_S1_2560x1440-ee500721c06da3ec1e5535a88588c77f"></ImageWithZoom>
            </Slide>
          </Slider>
        </S.Container>
        <S.NextSlide>
          <ButtonPlay> O </ButtonPlay>
          <Dot slide={0}> O </Dot>
          <Dot slide={1}> O </Dot>
          <Dot slide={2}> O </Dot>
          <Dot slide={3}> O </Dot>
        </S.NextSlide>
        <S.Tags> NEW SEASON STARTING SOON</S.Tags>
        <S.Ranks
          src={
            "https://static.developer.riotgames.com/img/docs/lol/emblems_and_positions.png"
          }
        ></S.Ranks>
      </CarouselProvider>
    </S.Container>
  );
};

export default HomePage;
