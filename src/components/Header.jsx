import { useState } from 'react';
// @ts-ignore
import close from '../assets/shared/icon-close.svg';
// @ts-ignore
import bars from '../assets/shared/icon-hamburger.svg';
// @ts-ignore
import Logo from '../assets/shared/logo.svg';
import NavBar from '../components/NavBar';
// import MobileMenu from '../components/MobileMenu';

const Header = () => {
  const [show, setShow] = useState();

  return (
    <>
      <div className="flow">
        <header className="design-system__header">
          <img src={Logo} alt="site logo" className="design-logo" />
          <NavBar
            txt="uppercase text-light ls-4"
            className={`${show ? 'mobile-menu' : 'NavBar'} flow`}
          />
          <button
            className="bars"
            // @ts-ignore
            onClick={() => setShow(!show)}
            style={{ backgroundImage: `url(${show ? close : bars})` }}
          >
            {' '}
            <span className="sr-only">Menu</span>
          </button>
        </header>
      </div>
    </>
  );
};

export default Header;
