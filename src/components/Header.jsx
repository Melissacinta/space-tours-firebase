import siteLogo from '../assets/shared/logo.svg';
import { useState } from "react";
import bars from '../assets/shared/icon-hamburger.svg';
import NavBar from '../components/NavBar';
// import MobileMenu from '../components/MobileMenu';

const Header = () => {
  const [show, setShow] = useState();
  return (
    <>
      <div className="flow">
        <header className="design-system__header">
          <img src={siteLogo} alt="site logo" className="design-logo" />
          <NavBar txt="uppercase text-light ls-2" className={`${show ? "mobile-menu" : "NavBar"} flow`} onClick={() => { console.log("after clicked"); }} />
          <img src={bars} alt="mobile menu" className="bars" onClick={() => setShow(!show)} />
        </header>
      </div>
    </>
  );
};

export default Header;
