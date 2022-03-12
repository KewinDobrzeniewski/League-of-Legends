import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AllChampions from "../AllChampions/AllChampions";
import ChampionInfo from "../ChampionInfo/ChampionInfo";
import HomePage from "../HomePage/HomePage";
import NavigationBar from "../NavBar/NavBar";
import { NavBar } from "../LevelUp/LevelUp.styles";

const Website = () => {
  return (
    <Router>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/Champions" element={<AllChampions />}></Route>
        <Route path="/Champions/:id" element={<ChampionInfo />}></Route>
        <Route path="/" element={<HomePage></HomePage>}></Route>
      </Routes>
    </Router>
  );
};
export default Website;
