import { Link } from 'react-router-dom';

const NavBar = ({ txt = '' }) => {
  return (
    <div className="NavBar flow">
      <nav className={`${txt} ff-sans-cond`}>
        <ul className="nav-links flex underline-indicators">
          <li className="active">
            <Link to="./active" className="nav-link">
              <span>00</span> Home
            </Link>
          </li>
          <li>
            <Link to="./hover" className="nav-link">
              <span>01</span> Destination
            </Link>
          </li>
          <li>
            <Link to="./idle" className="nav-link">
              <span>02</span> Crew
            </Link>
          </li>
          <li>
            <Link to="./idle" className="nav-link">
              <span>03</span> Technology
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
