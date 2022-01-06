import siteLogo from '../assets/shared/logo.svg';
import { useState } from "react";
import bars from '../assets/shared/icon-hamburger.svg';
import close from '../assets/shared/icon-close.svg';
import NavBar from '../components/NavBar';
// import MobileMenu from '../components/MobileMenu';

const Header = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => { setShow(!show) }

  return (
    <>
      <div className="flow">
        <header className="design-system__header">
          <img src={siteLogo} alt="site logo" className="design-logo" />
          <NavBar txt="uppercase text-light ls-4" mVisibility={`${show ? "true" : "false"}`} />
          <button className="bars" onClick={toggleShow} aria-expanded={show ? 'true' : 'false'}> <span className="sr-only">Menu</span>
          </button>
        </header>
      </div>
    </>
  );
};

export default Header;
