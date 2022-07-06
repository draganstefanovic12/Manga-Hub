import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import MangaChapters from "./MangaChapters";
import MangaCard from "./MangaCard";
import "./Manga.css";

const Manga = () => {
  const id = useParams();
  return (
    <>
      <Header />
      <MangaCard id={id.manga} />
      <MangaChapters id={id.manga} />
    </>
  );
};

export default Manga;
