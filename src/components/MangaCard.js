import { coverLink1, coverLink2, idLink } from "./fetchLinks";
import Tags from "./Tags";
import useFetch from "./useFetch";

const MangaCard = ({ id }) => {
  const info = useFetch(`${idLink}${id}`);
  const cover = useFetch(`${coverLink1}${id}${coverLink2}`);

  return (
    <>
      <div className="big-container">
        {cover && (
          <img
            className="manga-img"
            src={`https://uploads.mangadex.org/covers/${id}/${cover.data.data[0].attributes.fileName}`}
            alt="hi"
          />
        )}
        <div className="cover">
          {info && (
            <>
              <div>
                <h1 className="name">{info.data.data.attributes.title.en}</h1>
                {info.data.data.attributes.year && (
                  <h3 className="release-year">
                    Release date: {info.data.data.attributes.year}
                  </h3>
                )}
              </div>
              <p className="manga-desc">
                {info.data.data.attributes.description.en}
              </p>
              <div className="manga-info">
                <p className="status">{info.data.data.attributes.status}</p>
                {info.data.data.attributes.publicationDemographic && (
                  <p className="demographic">
                    {info.data.data.attributes.publicationDemographic}
                  </p>
                )}
              </div>
            </>
          )}
        </div>
        <Tags id={info} />
      </div>
    </>
  );
};

export default MangaCard;
