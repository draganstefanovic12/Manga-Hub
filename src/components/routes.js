import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainSite from "./MainSite";
import Manga from "./Manga";
import Search from "./Search";

const BrowserRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route to="/" index element={<MainSite />}></Route>
        <Route path="/:name" element={<Search />}></Route>
        <Route path="/manga/:manga" element={<Manga />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default BrowserRoutes;
