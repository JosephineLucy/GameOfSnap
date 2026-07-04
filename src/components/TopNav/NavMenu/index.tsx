import {
  faBars,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavMenu() {
  return (
    <div className="nav-menu">
      <div className="nav-menu-item-wrapper">
        <FontAwesomeIcon className="nav-menu-item" icon={faBars} />
      </div>
      <div className="nav-menu-item-wrapper">
        <FontAwesomeIcon className="nav-menu-item" icon={faMagnifyingGlass} />
      </div>
      <div className="nav-menu-item-wrapper">
        <FontAwesomeIcon className="nav-menu-item" icon={faUser} />
      </div>
    </div>
  );
}

export default NavMenu;
