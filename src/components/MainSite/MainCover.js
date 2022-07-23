import { Link } from "react-router-dom";
import useFetch from "../useFetch";

const MainCover = ({ data }) => {
  const cover = useFetch(
    "http://localhost:5000/covers/801513ba-a712-498c-8f57-cae55b38cc92/2a61abcb-8e6e-460d-8551-1caa93e09e39.jpg.256.jpg"
  );
  return (
    <>
      {data &&
        data.data.data.map((manga) =>
          manga.relationships
            .filter((data) => data.type === "cover_art")
            .map((image) => (
              <Link key={image} to={`/manga/${manga.id}`}>
                <img className="main-img" src={cover.data} alt="cover" />
                <p className="main-name">{manga.attributes.title.en}</p>
              </Link>
            ))
        )}
    </>
  );
};

export default MainCover;
