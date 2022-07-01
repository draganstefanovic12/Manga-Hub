import axios from "axios";
import { useEffect, useState } from "react";
import { imgLink } from "./fetchLinks";

const ChapterImages = ({ id }) => {
  const [data, setData] = useState(null);

  async function handleChapterImages(url) {
    const data = await axios.get(`${imgLink}${url}?forcePort443=false`);
    setData(data);
    console.log(data.data.chapter);
  }

  useEffect(() => {
    id && handleChapterImages(id);
  }, [id]);

  return (
    <div className="chapter">
      {data &&
        data.data.chapter.data.map((img) => (
          <img
            src={`https://uploads.mangadex.org/data/${data.data.chapter.hash}/${img}`}
            alt=""
          />
        ))}
    </div>
  );
};

export default ChapterImages;
