import { Routes, Route, HashRouter } from "react-router-dom";
import Author from "./Author/Author";
import MainSite from "./MainSite/MainSite";
import MangaPage from "./MangaPage/MangaPage";
import Search from "./Search/Search";

const BrowserRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route to="/home" index element={<MainSite />}></Route>
        <Route path="/:name/:page" element={<Search />}></Route>
        <Route path="/manga/:manga" element={<MangaPage />}></Route>
        <Route path="author/:author" element={<Author />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default BrowserRoutes;
