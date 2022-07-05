import useFetch from "../useFetch";
import { recentUpdates, showMoreRecentUpdates } from "../fetchLinks";
import { Link } from "react-router-dom";
import MainCover from "./MainCover";

const MainRecentUpdates = () => {
  const updated = useFetch(recentUpdates);

  return (
    <>
      <section className="section">
        <Link className="link-recent" to={`/${showMoreRecentUpdates}/1`}>
          <h1 className="section-text">Recently updated</h1>
        </Link>
        <div className="section-cover-cont">
          <MainCover data={updated} />
        </div>
      </section>
    </>
  );
};

export default MainRecentUpdates;
