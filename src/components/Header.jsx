import siteLogo from '../assets/shared/logo.svg';
import NavBar from '../components/NavBar';
// import MobileMenu from '../components/MobileMenu';

const Header = () => {
  return (
    <>
      <div className="flow">
        <header className="design-system__header">
          <img src={siteLogo} alt="site logo" className="design-logo" />
          <NavBar txt="uppercase text-light ls-2" />
        </header>
      </div>
    </>
  );
};

export default Header;
