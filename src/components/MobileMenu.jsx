import { NavLink } from 'react-router-dom';

const MobileMenu = ({ txt = '' }) => {
  return (
    <div className="mobile-menu flow">
      <nav className={`${txt} ff-sans-cond`}>
        <ul className="nav-links flex underline-indicators">
          <li>
            <NavLink to="/" className={`nav-link ${txt}`}>
              <span>00</span> Home
            </NavLink>
          </li>
          <li className="hovered">
            <NavLink to="/destination" className={`nav-link ${txt}`}>
              <span>01</span> Destination
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew" className={`nav-link ${txt}`}>
              <span>02</span> Crew
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology" className={`nav-link ${txt}`}>
              <span>03</span> Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
