import "./MainSite.css";
import Header from "../Header/Header";
import MainRecentUpdates from "./MainRecentUpdates";
import MainTopRated from "./MainTopRated";

export default function MainSite() {
  return (
    <>
      <Header />
      <MainTopRated />
      <MainRecentUpdates />
    </>
  );
}
