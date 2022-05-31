import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <Link to="/" className="title">
          Carpart365
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
