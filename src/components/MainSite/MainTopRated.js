import useFetch from "../useFetch";
import { topRated, showMoreTopRated } from "../fetchLinks";
import { Link } from "react-router-dom";
import MainCover from "./MainCover";

const MainTopRated = () => {
  const top = useFetch(topRated);

  return (
    <section className="section">
      <Link className="link" to={`/${showMoreTopRated}`}>
        <h1 className="section-text">Top rated</h1>
      </Link>
      <div className="section-cover-cont">
        <MainCover data={top} />
      </div>
    </section>
  );
};

export default MainTopRated;
