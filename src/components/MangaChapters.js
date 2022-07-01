import { useEffect, useState } from "react";
import ChapterImages from "./ChapterImages";
import { chLink } from "./fetchLinks";
import useFetch from "./useFetch";

const MangaChapters = ({ id }) => {
  const [chapt, setChapt] = useState("");
  const [chaptId, setChaptId] = useState(null);

  const getChapters = useFetch(
    `${chLink}${id}/aggregate?translatedLanguage%5B%5D=en`
  );

  function handleChapters() {
    const chapters = [];
    let objKeys = Object.keys(getChapters.data.volumes);
    for (let chap in Object.keys(objKeys)) {
      chapters.push(getChapters.data.volumes[objKeys[chap]].chapters);
    }
    setChapt(chapters);
  }

  //using getchapters as a dependency otherwise the function would run on every render
  useEffect(() => {
    getChapters && handleChapters();
  }, [getChapters]);

  return (
    <>
      <div className="select-center">
        <h3>Chapter: </h3>
        <select
          onChange={(e) => setChaptId(e.target.value)}
          className="select-chapter"
        >
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
      <ChapterImages id={chaptId} />
    </>
  );
};

export default MangaChapters;

// end my fucking existence
