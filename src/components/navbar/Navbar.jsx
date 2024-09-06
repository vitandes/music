import { Link } from "react-router-dom";
import { Nav } from "./NavStyles";

const Navbar = () => {
  return (
    <Nav className="navbar">
       
      <ul>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#solutions">Solutions</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="div-sign-in">
        {/* <a href="#login" className="log-in">
          Log In
        </a> */}
        <Link to="/login" className="log-in">
          Log In
        </Link>
        <a href="#signin" className="sign-in">
          Sig In
        </a>
      </div>
    </Nav>
  );
};

export default Navbar;
