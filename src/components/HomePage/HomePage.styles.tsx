import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  background-color: #153045;
`;

export const Logo = styled.img`
  height: 200px;
  width: 600px;
  margin: 50px;
`;

export const Ranks = styled.img`
  height: 100%;
  width: 100%;
`;

export const Tags = styled.div`
  font-family: "Bangers", cursive;
  font-size: 50px;
  height: 200px;
  width: 500px;
  margin-left: 1020px;
  margin-top: 100px;
`;
export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #153045;
  width: 100%;
  height: 860px;
`;

export const NextSlide = styled.div`
  background-color: grey;
  display: flex;
  flex-direction: row;
  width: 20px;
`;

export const BottomPage = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  background-color: black;
  color: black;
`;
