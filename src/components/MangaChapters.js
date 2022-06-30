import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const MangaChapters = ({ id }) => {
  const [chapt, setChapt] = useState("");
  const getChapters = useFetch(
    `https://api.mangadex.org/manga/${id}/aggregate`
  );

  function handleChapters() {
    const chapters = [];
    let objKeys = Object.keys(getChapters.data.volumes);
    for (let chap in Object.keys(objKeys)) {
      chapters.push(getChapters.data.volumes[objKeys[chap]].chapters);
    }
    setChapt(chapters);
  }

  //using gethapters as a dependency otherwise the function would run on every render
  useEffect(() => {
    getChapters && handleChapters();
  }, [getChapters]);

  return (
    <div className="select-center">
      <h3>Chapter: </h3>
      <select className="select-chapter">
        <option className="default-chapter">Select a chapter</option>
        {Object.keys(chapt).map((volume) =>
          Object.keys(chapt[volume]).map((chapter) => (
            <option
              key={chapt[volume][chapter].id}
              value={chapt[volume][chapter].id}
            >
              {chapt[volume][chapter].chapter}
            </option>
          ))
        )}
      </select>
    </div>
  );
};

export default MangaChapters;

// end my fucking existence
