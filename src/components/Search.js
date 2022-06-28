import useFetch from "./useFetch";
import "../styles/Search.css";
import Header from "./Header";
import { Link, useParams } from "react-router-dom";
import { link1, link2 } from "./fetchLinks";

const Search = () => {
  const title = useParams();

  const mangas = useFetch(`${link1}${title.name}${link2}`);
  mangas && console.log(mangas.data.data);

  return (
    <>
      <Header />
      {mangas && (
        <div>
          {mangas.data.data.map((manga) => (
            <div key={manga.id} className="searchBox">
              <h1 className="mangaName">{manga.attributes.title.en}</h1>
              {manga.relationships
                .filter((mango) => mango.type === "cover_art")
                .map((mango) => (
                  <img
                    key={mango.id}
                    className="searchCover"
                    src={`https://uploads.mangadex.org/covers/${manga.id}/${mango.attributes.fileName}`}
                    alt=""
                  />
                ))}
              <p className="desc">{manga.attributes.description.en}</p>
              {manga.attributes.year && (
                <p>Release year: {manga.attributes.year}</p>
              )}
              <p>Status: {manga.attributes.status}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Search;
