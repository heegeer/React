import { Link } from "react-router-dom";
import './header.css'

function Header() {
    return(
      <div className="header">
        <Link to={"/"}>
          <span>My Todo List</span>
        </Link>
        <span>React</span>
      </div>
    );
};

export default Header;