import { useParams } from "react-router-dom";
import { search1, search2 } from "../fetchLinks";
import useFetch from "../useFetch";
import Header from "../Header/Header";
import SearchCards from "./SearchCards";
import SearchPagination from "./SearchPagination";
import "./Search.css";

const Search = () => {
  const title = useParams();
  const mangas = useFetch(
    `${search1}${title.name}${search2}&offset=${parseInt(
      (title.page - 1) * 12
    )}`
  );

  mangas && console.log(mangas);

  return (
    <>
      <Header />
      <SearchCards mangas={mangas} />
      <SearchPagination mangas={mangas} title={title} />
    </>
  );
};

export default Search;
