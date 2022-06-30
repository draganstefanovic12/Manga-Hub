import "../styles/Header.css";
import { Link } from "react-router-dom";
import Input from "./Input";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="welcome">
        Simple manga
      </Link>
      <Input />
    </header>
  );
};

export default Header;
