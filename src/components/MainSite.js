import "../styles/MainSite.css";
import Header from "./Header";
import RecentUpdates from "./RecentUpdates";
import TopRated from "./TopRated";

export default function MainSite() {
  return (
    <>
      <Header />
      <TopRated />
      <RecentUpdates />
    </>
  );
}
