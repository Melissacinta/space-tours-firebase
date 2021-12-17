import { Link } from 'react-router-dom';

const MobileMenu = ({ txt = '' }) => {
  return (
    <div className="mobile-menu flow">
      <nav className={`${txt} ff-sans-cond`}>
        <ul className="nav-links flex underline-indicators">
          <li className="active">
            <Link to="./active" className={`nav-link ${txt}`}>
              <span>00</span> Home
            </Link>
          </li>
          <li className="hovered">
            <Link to="./hover" className={`nav-link ${txt}`}>
              <span>01</span> Destination
            </Link>
          </li>
          <li>
            <Link to="./idle" className={`nav-link ${txt}`}>
              <span>02</span> Crew
            </Link>
          </li>
          <li>
            <Link to="./idle" className={`nav-link ${txt}`}>
              <span>03</span> Technology
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
