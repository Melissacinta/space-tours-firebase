const NavBar = ({ txt = '' }) => {
    return (
        <div className="mobile-menu flow">
            <nav className={`${txt} ff-sans-cond`}>
                <ul className="nav-links flex underline-indicators">
                    <li className="active"><a href="./active" className={`nav-link ${txt}`}><span>00</span> Home</a></li>
                    <li className="hovered"><a href="./hover" className={`nav-link ${txt}`}><span>01</span> Destination</a></li>
                    <li><a href="./idle" className={`nav-link ${txt}`}><span>02</span> Crew</a></li>
                    <li><a href="./idle" className={`nav-link ${txt}`}><span>03</span> Technology</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
