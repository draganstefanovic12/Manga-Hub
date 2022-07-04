import useFetch from "./useFetch";
import { latestUpdates, showMoreLatest } from "./fetchLinks";
import { Link } from "react-router-dom";
import ShowCoversMap from "./ShowCoversMap";

const RecentUpdates = () => {
  const updated = useFetch(latestUpdates);

  return (
    <>
      <section className="section">
        <Link className="link-recent" to={`/${showMoreLatest}`}>
          <h1 className="section-text">Recently updated</h1>
        </Link>
        <div className="section-cover-cont">
          <ShowCoversMap data={updated} />
        </div>
      </section>
    </>
  );
};

export default RecentUpdates;
