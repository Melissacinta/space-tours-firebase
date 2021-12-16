import siteLogo from '../assets/shared/logo.svg';
// import Color from './Color';
// import Ellipses from './Ellipses';
// import Explore from './Explore';
import NavBar from '../components/NavBar';
// import Numbered from './Numbered';
// import Tabs from './Tabs';
import MobileMenu from '../components/MobileMenu';

const Header = () => {
    return (
        <div className="">
            <div className="flow">
                <header className="design-system__header">
                    <img src={siteLogo} alt="site logo" className="design-logo" />
                    <NavBar
                        txt="uppercase text-light ls-2"
                    />
                </header>
            </div >
        </div >
    );
};

export default Header;
