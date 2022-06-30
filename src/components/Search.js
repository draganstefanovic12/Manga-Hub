import useFetch from "./useFetch";
import "../styles/Search.css";
import Header from "./Header";
import { useParams, Link } from "react-router-dom";
import { searchLink1, searchLink2 } from "./fetchLinks";

const Search = () => {
  const title = useParams();
  const mangas = useFetch(`${searchLink1}${title.name}${searchLink2}`);

  return (
    <>
      <Header />
      {mangas && (
        <div className="grid">
          {mangas.data.data.map((manga) => (
            <div key={manga.id} className="search-box">
              <Link className="manga-name" to={`/manga/${manga.id}`}>
                <h1>{manga.attributes.title.en}</h1>
              </Link>
              {manga.relationships
                .filter((mango) => mango.type === "cover_art")
                .map((mango) => (
                  <img
                    key={mango.id}
                    className="search-cover"
                    src={`https://uploads.mangadex.org/covers/${manga.id}/${mango.attributes.fileName}`}
                    alt=""
                  />
                ))}
              <p className="desc">{manga.attributes.description.en}</p>
              {manga.attributes.year ? (
                <p>Release year: {manga.attributes.year}</p>
              ) : (
                <p>Release year: N/A </p>
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
