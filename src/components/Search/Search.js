import { useParams } from "react-router-dom";
import { search1, search2 } from "../fetchLinks";
import useFetch from "../useFetch";
import Header from "../Header/Header";
import "./Search.css";
import SearchCards from "./SearchCards";

const Search = () => {
  const title = useParams();
  const mangas = useFetch(`${search1}${title.name}${search2}`);

  return (
    <>
      <Header />
      <SearchCards mangas={mangas} />
    </>
  );
};

export default Search;
