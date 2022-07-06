import { useParams, Link } from "react-router-dom";
import { authorMangas } from "../fetchLinks";
import Header from "../Header/Header";
import useFetch from "../useFetch";
import "./Author.css";

const Author = () => {
  const url = useParams();
  const data = useFetch(
    `https://api.mangadex.org/author/${url.author}?includes%5B%5D=manga`
  );
  const covers = useFetch(`${authorMangas}${url.author}`);

  return (
    <div className="page-container">
      <Header />
      {data && (
        <>
          <h1 className="artist-name">{data.data.data.attributes.name}</h1>
          {data.data.data.attributes.biography.en ? (
            <p className="biography">
              {data.data.data.attributes.biography.en}
            </p>
          ) : (
            <p className="biography">No available biography.</p>
          )}
        </>
      )}
      <h2 className="other-works">Works: </h2>
      <div className="card-container">
        {covers &&
          covers.data.data.map((manga) =>
            manga.relationships
              .filter((data) => data.type === "cover_art")
              .map((image) => (
                <div key={manga.id} className="card">
                  <Link className="link-manga-name" to={`/manga/${manga.id}`}>
                    <img
                      className="main-img"
                      src={`https://uploads.mangadex.org/covers/${manga.id}/${image.attributes.fileName}.256.jpg`}
                      alt="cover"
                    />
                    <h2>{manga.attributes.title.en}</h2>
                  </Link>
                </div>
              ))
          )}
      </div>
    </div>
  );
};

export default Author;
