import { useState } from "react";
import { Link } from "react-router-dom";

const Input = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="links">
      <input
        type="search"
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />
      <Link className="link-search" to={`/${search}`}>
        <button className="btn-search">Search</button>
      </Link>
    </div>
  );
};

export default Input;
