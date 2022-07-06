import "./MainSite.css";
import Header from "../Header/Header";
import MainRecentUpdates from "./MainRecentUpdates";
import MainTopRated from "./MainTopRated";
import MainAbout from "./MainAbout";

export default function MainSite() {
  return (
    <>
      <Header />
      <MainTopRated />
      <MainRecentUpdates />
      <MainAbout />
    </>
  );
}
