import useFetch from "./useFetch";
import { top50, showMoreTop50 } from "./fetchLinks";
import { Link } from "react-router-dom";
import ShowCoversMap from "./ShowCoversMap";

const TopRated = () => {
  const topRated = useFetch(top50);

  return (
    <section className="section">
      <h1 className="section-text">Top rated</h1>
      <div className="section-cover-cont">
        <ShowCoversMap data={topRated} />
      </div>
      <Link className="show-more" to={`/${showMoreTop50}`}>
        <h3 style={{ margin: "0px" }}>Show More</h3>
      </Link>
    </section>
  );
};

export default TopRated;
