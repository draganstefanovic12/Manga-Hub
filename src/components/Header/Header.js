import "./Header.css";
import Input from "../Input/Input";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="welcome">
        Manga
      </Link>
      <Input />
    </header>
  );
};

export default Header;
