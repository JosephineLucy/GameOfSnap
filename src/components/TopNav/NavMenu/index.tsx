import {
  faArrowRotateRight,
  faCog,
  faListUl,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavMenu() {
  return (
    <div className="nav-menu">
      <div className="nav-menu-item-wrapper" title="Restart game">
        <FontAwesomeIcon icon={faArrowRotateRight} />
      </div>
      <div className="nav-menu-item-wrapper" title="Game history">
        <FontAwesomeIcon icon={faListUl} />
      </div>
      <div className="nav-menu-item-wrapper" title="Settings">
        <FontAwesomeIcon icon={faCog} />
      </div>
    </div>
  );
}

export default NavMenu;
