import { Link } from "react-router-dom";

const SearchCards = ({ mangas }) => {
  return (
    <>
      {mangas && (
        <div className="grid">
          {mangas.data.data.map((manga) => (
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
                  <Link
                    key={manga.id}
                    className="search-cover"
                    to={`/manga/${manga.id}`}
                  >
                    <img
                      className="search-cover"
                      src={`https://uploads.mangadex.org/covers/${manga.id}/${mango.attributes.fileName}.256.jpg`}
                      alt="cover"
                    />
                  </Link>
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

export default SearchCards;
