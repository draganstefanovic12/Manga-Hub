const Tags = ({ id }) => {
  return (
    <div className="tags">
      {id &&
        id.data.data.attributes.tags.map((tag) => (
          <p key={tag.attributes.name.en} className="tag">
            {tag.attributes.name.en}
          </p>
        ))}
    </div>
  );
};

export default Tags;
