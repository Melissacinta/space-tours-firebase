const NavBar = ({ txt = '' }) => {
  return (
    <div className="NavBar flow">
      <nav className={`${txt} ff-sans-cond`}>
        <ul className="nav-links flex underline-indicators">
          <li className="active"><a href="" className={`nav-link ${txt}`}><span>00</span> Active</a></li>
          <li className="hovered"><a href="" className={`nav-link ${txt}`}><span>01</span> Hovered</a></li>
          <li><a href="" className={`nav-link ${txt}`}><span>02</span> Idle</a></li>
        </ul>
      </nav>
      <p className="text-center">
        <span className="text-accent">Different States of Navigation Bar</span>
      </p>
    </div>
  );
};

export default NavBar;
