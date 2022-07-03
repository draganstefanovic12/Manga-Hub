import { idLink } from "./fetchLinks";
import Tags from "./Tags";
import useFetch from "./useFetch";
import { yotsu1, yotsu2, yotsu3, yotsu4, yotsu5 } from "./yotsubaImg";

const MangaCard = ({ id }) => {
  const info = useFetch(
    `${idLink}${id}?includes%5B%5D=author&includes%5B%5D=artist&includes%5B%5D=cover_art`
  );

  return (
    <>
      <div className="big-container">
        {info &&
          info.data.data.relationships
            .filter((img) => img.type === "cover_art")
            .map((img) => (
              <img
                className="manga-img"
                src={`https://uploads.mangadex.org/covers/${id}/${img.attributes.fileName}`}
                alt="hi"
              />
            ))}
        <div className="cover">
          <div className="author">
            <h3>Author: </h3>
            {info &&
              info.data.data.relationships
                .filter((author) => author.type === "author")
                .map((name) => (
                  <h3 className="author-name">{name.attributes.name}</h3>
                ))}
          </div>
          {info && (
            <>
              <h1 className="name">{info.data.data.attributes.title.en}</h1>
              {info.data.data.attributes.year && (
                <h3 className="release-year">
                  Release date: {info.data.data.attributes.year}
                </h3>
              )}
              <p className="manga-desc">
                {info.data.data.attributes.description.en}
              </p>
              <div className="manga-info">
                <h3 className="status-demographic">Status: </h3>
                <h3 className="status">{info.data.data.attributes.status}</h3>
              </div>
              {info.data.data.attributes.publicationDemographic && (
                <div className="demographic-div">
                  <h3 className="status-demographic">Demographic: </h3>
                  <h3 className="demographic">
                    {info.data.data.attributes.publicationDemographic}
                  </h3>
                </div>
              )}
            </>
          )}
        </div>
        <Tags id={info} />
      </div>
    </>
  );
};

export default MangaCard;
