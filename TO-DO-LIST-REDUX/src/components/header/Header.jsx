import { Link } from "react-router-dom";
import { StHeader } from "./styled";

function Header() {
    return(
      <StHeader>
        <Link to={"/"}>
          <span>My Todo List</span>
        </Link>
        <span>React</span>
      </StHeader>
    );
};

export default Header;