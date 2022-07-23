import { useEffect, useState } from "react";
import { img } from "../fetchLinks";
import axios from "axios";

const MangaChapterImages = ({ id }) => {
  const [data, setData] = useState(null);

  // using the abort controller if the chapters are being changed through fast with the arrow key
  // will abort downloading
  const abortCont = new AbortController();
  async function handleChapterImages(url) {
    const data = await axios
      .get(`${img}${url}`, {
        signal: abortCont.signal,
      })
      .catch((err) => {
        if (err.message === "CanceledError") {
          return;
        }
      });
    setData(data);
  }

  useEffect(() => {
    id && handleChapterImages(id);
    return () => abortCont.abort();
  }, [id]);

  return (
    <div className="chapter">
      {data &&
        data.data.chapter.dataSaver.map((img) => (
          <img
            key={img}
            src={`https://uploads.mangadex.org/data-saver/${data.data.chapter.hash}/${img}`}
            alt="manga-page"
          />
        ))}
    </div>
  );
};

export default MangaChapterImages;
