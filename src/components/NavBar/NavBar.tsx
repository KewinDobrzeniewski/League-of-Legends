import * as S from "./NavBar.styles";
import { useState } from "react";

const NavigationBar = () => {
  const [extendedNavBar, setExtendedNavBar] = useState(false);
  return (
    <S.NavBarContainer extendNavBar={extendedNavBar}>
      <S.NavBarInnerContainer>
        <S.LeftContainer>
          <S.RiotLogo
            src={"https://static.developer.riotgames.com/img/logo.png"}
          ></S.RiotLogo>
          <S.NavBarLinkContainer>
            <S.NavbarLink to={"/"}>Home</S.NavbarLink>
            <S.NavbarLink to={"/Champions"}>Champions</S.NavbarLink>
            <S.NavbarLink to={"/News"}>News</S.NavbarLink>
            <S.NavbarLink to={"/Patch-Notes"}>Patch Notes</S.NavbarLink>
            <S.OpenLinksButton
              onClick={() => {
                setExtendedNavBar((curr) => !curr);
              }}
            >
              {extendedNavBar ? <>&#8801;</> : <>&#8801;</>}
            </S.OpenLinksButton>
          </S.NavBarLinkContainer>
        </S.LeftContainer>
        <S.RightContainer>
          <S.Logo
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/League_of_Legends_2019_vector.svg/1200px-League_of_Legends_2019_vector.svg.png"
            }
          ></S.Logo>
        </S.RightContainer>
      </S.NavBarInnerContainer>
      {extendedNavBar && (
        <S.NavbarExtension>
          <S.NavbarLinkExtended to={"/Esports"}>Esports</S.NavbarLinkExtended>
          <S.NavbarLinkExtended to={"/Patch-Notes"}>
            Universe
          </S.NavbarLinkExtended>
          <S.NavbarLinkExtended to={"/Patch-Notes"}>Merch</S.NavbarLinkExtended>
          <S.NavbarLinkExtended to={"/Patch-Notes"}>
            Support
          </S.NavbarLinkExtended>
        </S.NavbarExtension>
      )}
    </S.NavBarContainer>
  );
};

export default NavigationBar;
