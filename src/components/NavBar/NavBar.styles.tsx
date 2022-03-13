import styled from "styled-components";
import { Link } from "react-router-dom";
import * as T from "./NavBar.types";

export const NavBarContainer = styled.nav<T.NBar>`
  width: 100%;
  height: ${(props) => (props.extendNavBar ? "100vh" : "80px")};
  background-color: black;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex: 70%;
  align-items: center;
  padding-left: 2%;
`;

export const RightContainer = styled.div`
  display: flex;
  flex: 30%;
  justify-content: flex-end;
  padding-left: 50px;
`;

export const NavBarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavBarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 14px;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
  margin: 10px;
  margin-right: 26px;
  width: 300px;
  height: 60px;
`;
export const RiotLogo = styled.img`
  margin: 10px;
  width: 70px;
  height: 100%;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border-style: none;
  border-radius: 8px;
  color: white;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtension = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;
