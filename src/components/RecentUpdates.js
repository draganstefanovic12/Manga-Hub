import useFetch from "./useFetch";
import { latestUpdates, showMoreLatest } from "./fetchLinks";
import { Link } from "react-router-dom";
import ShowCoversMap from "./ShowCoversMap";

const RecentUpdates = () => {
  const updated = useFetch(latestUpdates);

  return (
    <>
      <section className="section">
        <h1 className="section-text">Recently updated</h1>
        <div className="section-cover-cont">
          <ShowCoversMap data={updated} />
        </div>
        <Link className="show-more" to={`/${showMoreLatest}`}>
          <h3 style={{ margin: "0px" }}>Show More</h3>
        </Link>
      </section>
    </>
  );
};

export default RecentUpdates;
