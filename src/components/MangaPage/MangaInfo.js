import { Link } from "react-router-dom";

const MangaInfo = ({ manga }) => {
  return (
    <div className="cover">
      <div className="author">
        <h3>Author: </h3>
        {manga &&
          manga.data.data.relationships
            .filter((data) => data.type === "author")
            .map((author) => (
              <Link
                key={author.attributes.name}
                className="author-name"
                to={`/author/${author.id}`}
              >
                <h3>{author.attributes.name}</h3>
              </Link>
            ))}
      </div>
      {manga && (
        <>
          <h1 className="name">{manga.data.data.attributes.title.en}</h1>
          {manga.data.data.attributes.year && (
            <h3 key={manga.data.data.attributes.year} className="release-year">
              Release date: {manga.data.data.attributes.year}
            </h3>
          )}
          <p className="manga-desc">
            {manga.data.data.attributes.description.en}
          </p>
          <h3 className="status">
            Status: {manga.data.data.attributes.status}
          </h3>
          <h3 className="demographic">
            Demographic: {manga.data.data.attributes.publicationDemographic}
          </h3>
        </>
      )}
    </div>
  );
};

export default MangaInfo;
