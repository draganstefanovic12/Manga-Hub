import { Link } from "react-router-dom";
import { search2 } from "../fetchLinks";

const MangaTags = ({ id }) => {
  return (
    <div className="tags">
      {id &&
        id.data.data.attributes.tags.map((tag) => (
          <p key={tag.attributes.name.en} className="tag">
            <Link
              className="link-tag"
              to={`/includedTags%5B%5D=${tag.id}${search2}/1`}
            >
              {tag.attributes.name.en}
            </Link>
          </p>
        ))}
    </div>
  );
};

export default MangaTags;

//includedTags%5B%5D=
