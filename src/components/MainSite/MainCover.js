import { Link } from "react-router-dom";

const MainCover = ({ data }) => {
  return (
    <>
      {data &&
        data.data.data.map((manga) =>
          manga.relationships
            .filter((data) => data.type === "cover_art")
            .map((image) => (
              <div key={manga.id} className="card">
                <Link to={`/manga/${manga.id}`}>
                  <img
                    className="main-img"
                    src={`https://uploads.mangadex.org/covers/${manga.id}/${image.attributes.fileName}.256.jpg`}
                    alt=""
                  />
                </Link>
              </div>
            ))
        )}
    </>
  );
};

export default MainCover;
