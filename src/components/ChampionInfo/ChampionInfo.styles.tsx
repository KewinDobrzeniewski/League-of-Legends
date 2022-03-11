import styled from "styled-components";
import { Paper, Typography, Tooltip } from "@material-ui/core";

export const Container = styled.div`
  padding: 10px;
  margin: 20px;
  border-radius: 8px;
  border-color: #dbc557;
  border-style: groove;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #0a3057;
  justify-content: center;
`;
export const SkinContainer = styled.div`
  padding: 10px;
  margin: 20px;
  border-radius: 8px;
  height: 240px;
  border-color: #dbc557;
  border-style: groove;
  background-color: #0e3b68;
  display: flex;
`;

export const SpellContainer = styled.div`
  padding: 10px;
  margin: 20px;
  border-radius: 8px;
  border-color: #dbc557;
  border-style: groove;
  display: flex;
  flex-direction: column;
  flex-direction: row;
  background-color: #0e3b68;
  flex-wrap: wrap;
`;

export const SpotlightContainer = styled.div`
  padding: 10px;
  margin: 20px;
  border-radius: 8px;
  border-color: #dbc557;
  border-style: groove;
  display: flex;
  align-items: center;
  background-color: #0e3b68;
`;

export const Image = styled.img`
  margin: 8px;
`;

export const Stats = styled.div`
  font-family: "Bangers", cursive;
  color: white;
  font-size: 26px;
  margin: 14px;
  border-radius: 8px;
  border: 4px;
  padding: 20px;
  width: 200px;
  background-color: #0e3b68;
  border-color: #dbc557;
  border-style: groove;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Text = styled.div`
  color: black;
  font-size: 28px;
  margin: 14px;
  border-radius: 8px;
  border: 4px;
  padding: 20px;
  width: 320px;
  height: 100%;
  background-color: #0e3b68;
  border-color: #a38f1d;
  border-style: groove;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  object-fit: contain;
`;

export const Skin = styled.img`
  margin: 8px;
  height: 220px;
  width: 150px;
  display: flex;
  flex-direction: row;
`;

export const Spells = styled.img`
  border-radius: 8px;
  border-color: black;
  border-style: groove;
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: space-between;
  margin: 8px;
`;
export const Passive = styled.img`
  border-radius: 8px;
  border-color: black;
  border-style: groove;
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: space-between;
  margin: 8px;
`;

export const Background = styled.div`
  border: 1px solid #000;
  background-image: url(${"https://wallpapercave.com/wp/wp7309744.jpg"});
  width: 100%;
  height: 100%;
`;

export const Headlight = styled.div`
  border-radius: 8px;
  font-family: "Bangers", cursive;
  font-size: 40px;
  color: #dbc557;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LevelUpDown = styled.button`
  font-family: "Bangers", cursive;
  font-size: 26px;
  margin: 16px;
  border: 4px;
  border-radius: 4px;
  border-color: black;
  border-style: groove;
  border-width: 2px;
  width: 150px;
  padding: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChampionTooltip = styled(({ className, ...props }) => (
  <Tooltip
    enterNextDelay={500}
    arrow
    {...props}
    classes={{ popper: className }}
  />
))`
  & .MuiTooltip-tooltip {
    font-size: 16px;
  }
`;
