import { NavLink } from 'react-router-dom';

const NavBar = ({ txt, className }) => {
  return (
    <div className={className}>
      <nav className={`${txt} ff-sans-cond`}>
        <ul className="nav-links flex underline-indicators">
          <li>
            <NavLink to="/" className="nav-link">
              <span>00</span> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="destination" className="nav-link">
              <span>01</span> Destination
            </NavLink>
          </li>
          <li>
            <NavLink to="crew" className="nav-link">
              <span>02</span> Crew
            </NavLink>
          </li>
          <li>
            <NavLink to="technology" className="nav-link">
              <span>03</span> Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
