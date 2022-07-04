import { useEffect, useState } from "react";
import { img } from "../fetchLinks";
import axios from "axios";

const MangaChapterImages = ({ id }) => {
  const [data, setData] = useState(null);

  async function handleChapterImages(url) {
    const data = await axios.get(`${img}${url}?forcePort443=false`);
    setData(data.data);
  }

  useEffect(() => {
    id && handleChapterImages(id);
  }, [id]);

  return (
    <div className="chapter">
      {data &&
        data.chapter.dataSaver.map((img) => (
          <img
            key={img}
            src={`https://uploads.mangadex.org/data-saver/${data.chapter.hash}/${img}`}
            alt="manga-page"
          />
        ))}
    </div>
  );
};

export default MangaChapterImages;
