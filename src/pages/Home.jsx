import siteLogo from '../assets/shared/logo.svg';
// import Color from './Color';
// import Ellipses from './Ellipses';
// import Explore from './Explore';
// import NavBar from '../components/NavBar';
// import Numbered from './Numbered';
// import Tabs from './Tabs';
import Header from '../components/Header';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <div className="container flow">
                <div className="even-columns">
                    <div className="col flow">
                        <p className="text-accent fs-500 ff-sans-cond uppercase ls-1">
                            So, you want to travel to space
                        </p>
                        <p className="fs-900 ff-serif uppercase">Space</p>

                        <p className="text-accent ff-sans home-text">
                            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                        </p>
                    </div>
                    <div className="col flex">
                        <a href="./explore" className="btn-explore bg-light uppercase ff-serif fs-600">Explore</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
