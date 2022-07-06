import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Input = () => {
  const [search, setSearch] = useState("");
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();
  function handleKey(e) {
    e.key === "Enter" && navigate(`/${search}/1`);
  }

  //the default search length is 6 so that's why im putting 8 as the requirement for the button to be enabled
  //everytime i search i have "title=" as a prefix
  function handleDisable() {
    search.length > 8 ? setDisabled(false) : setDisabled(true);
  }

  useEffect(() => {
    handleDisable();
  }, [search]);

  return (
    <div className="links">
      <input
        onKeyUp={(e) => handleKey(e)}
        type="search"
        onChange={(e) => {
          setSearch(`title=${e.target.value}`);
        }}
        className="search"
      />
      <Link className="link-search" to={`/${search}/1`}>
        <button disabled={disabled} className="btn-search">
          Search
        </button>
      </Link>
    </div>
  );
};

export default Input;
