import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Input = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  function handleKey(e) {
    e.key === "Enter" && navigate(`/${search}`);
  }

  return (
    <div className="links">
      <input
        onKeyUp={(e) => handleKey(e)}
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
