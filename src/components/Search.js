import { useParams, Link } from "react-router-dom";
import { search1, search2 } from "./fetchLinks";
import useFetch from "./useFetch";
import Header from "./Header";
import "../styles/Search.css";

const Search = () => {
  const title = useParams();
  const mangas = useFetch(`${search1}${title.name}${search2}`);

  return (
    <>
      <Header />
      {mangas && (
        <div className="grid">
          {mangas.data.map((manga) => (
            <div key={manga.id} className="search-box">
              <Link className="manga-name" to={`/manga/${manga.id}`}>
                {!manga.attributes.title.en && (
                  <h1>{manga.attributes.title.ja}</h1>
                )}
                <h1>{manga.attributes.title.en}</h1>
              </Link>
              {manga.relationships
                .filter((mango) => mango.type === "cover_art")
                .map((mango) => (
                  <img
                    key={mango.id}
                    className="search-cover"
                    src={`https://uploads.mangadex.org/covers/${manga.id}/${mango.attributes.fileName}.256.jpg`}
                    alt="cover"
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
