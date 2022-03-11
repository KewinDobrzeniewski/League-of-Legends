import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AllChampions from "../AllChampions/AllChampions";
import ChampionInfo from "../ChampionInfo/ChampionInfo";
import HomePage from "../HomePage/HomePage";

import { NavBar } from "../LevelUp/LevelUp.styles";

const Website = () => {
  return (
    <Router>
      <NavBar>
        <Link to="/Home">Home</Link>
      </NavBar>
      <NavBar>
        <Link to="/Champions">Champions</Link>
      </NavBar>
      {/* <Link to="ChampionInfo">ChampionInfo</Link> */}
      <Routes>
        <Route path="/Champions" element={<AllChampions />}></Route>
        <Route path="/Champions/:id" element={<ChampionInfo />}></Route>
        <Route path="/Home" element={<HomePage></HomePage>}></Route>
      </Routes>
    </Router>
  );
};
export default Website;
