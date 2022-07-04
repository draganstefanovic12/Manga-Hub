import { useParams } from "react-router-dom";
import { useState } from "react";
import { search1, search2 } from "../fetchLinks";
import useFetch from "../useFetch";
import Header from "../Header/Header";
import SearchCards from "./SearchCards";
import SearchPagination from "./SearchPagination";
import "./Search.css";

const Search = () => {
  const [offset, setOffset] = useState(0);
  const title = useParams();
  const mangas = useFetch(`${search1}${title.name}${search2}&offset=${offset}`);

  return (
    <>
      <Header />
      <SearchCards mangas={mangas} />
      <SearchPagination mangas={mangas} offset={offset} setOffset={setOffset} />
    </>
  );
};

export default Search;
