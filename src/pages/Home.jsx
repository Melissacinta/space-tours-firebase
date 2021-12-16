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

                {/* <section className="section section-colors flow">
                    <h2 className="numbered-title ls-1 uppercase">
                        <span>01</span> COLORS
                    </h2>

                    <div className="colors">
                        <Color
                            txt="uppercase text-light"
                            bg="bg-dark-100"
                            hex="#0b0d17"
                            rgb="11, 13, 23"
                            hsl="230°, 35%, 7%"
                        />

                        <Color
                            txt="uppercase text-dark"
                            bg="bg-accent"
                            hex="#D0D6F9"
                            rgb="208, 214, 249"
                            hsl="231°, 77%, 90%"
                        />

                        <Color
                            txt="uppercase text-dark"
                            bg="bg-light"
                            hex="#0b0d17"
                            rgb="255, 255, 255"
                            hsl="0°, 0%, 100%"
                        />
                    </div>
                </section>

                <section className="section section-typography flow">
                    <h2 className="numbered-title ls-1 uppercase">
                        <span>02</span> TYPOGRAPHY
                    </h2>

                    <div className="even-columns">
                        <div className="col flow">
                            <div>
                                <p className="text-accent">
                                    Heading 1 - Bellefair Regular - 150px
                                </p>
                                <p className="fs-900 ff-serif uppercase">Earth</p>
                            </div>
                            <div>
                                <p className="text-accent">
                                    Heading 2 - Bellefair Regular - 100px
                                </p>
                                <p className="fs-800 ff-serif uppercase">Venus</p>
                            </div>
                            <div>
                                <p className="text-accent">
                                    Heading 3 - Bellefair Regular - 56px
                                </p>
                                <p className="fs-700 ff-serif uppercase">Jupiter & Saturn</p>
                            </div>
                            <div>
                                <p className="text-accent">
                                    Heading 4 - Bellefair Regular - 32px
                                </p>
                                <p className="fs-600 ff-serif uppercase">
                                    Uranus, Neptune, & Pluto
                                </p>
                            </div>
                            <div>
                                <p className="text-accent">
                                    Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character
                                    Space
                                </p>
                                <p
                                    className="
                    text-accent
                    fs-500
                    ff-sans-cond
                    uppercase
                    ls-1
                  "
                                >
                                    So, you want to travel to space
                                </p>
                            </div>
                        </div>
                        <div className="col flow">
                            <div>
                                <p className="text-accent">
                                    Subheading 1 - Bellefair Regular - 28px{' '}
                                </p>
                                <p className="fs-600 ff-serif uppercase">384,400 km </p>
                            </div>
                            <div>
                                <p className="text-accent">
                                    Subheading 2 - Barlow Condensed Regular - 14px - 2.35
                                    Character Space
                                </p>
                                <p className="fs-200 uppercase ff-sans-cond ls-3">
                                    Avg. Distance
                                </p>
                            </div>
                            <div>
                                <p className="text-accent">
                                    Nav Text - Barlow Condensed Regular - 16px - 2.7 Character
                                    Space
                                </p>
                                <p className="fs-300 uppercase ff-sans-cond ls-2">Europa</p>
                            </div>
                            <div>
                                <p className="text-accent">Body Text</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                                    nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                                    pretium, ligula sollicitudin laoreet viverra, tortor libero
                                    sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis.
                                    Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet,
                                    consectetuer adipiscing elit. Phasellus hendrerit.
                                    Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
                                    vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
                                    sollicitudin laoreet viverra, tortor libero sodales leo, eget
                                    blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                                    Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Phasellus hendrerit. Pellentesque aliquet
                                    nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis
                                    vel, nisi.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section section-interactive flow">
                    <h2 className="numbered-title">
                        <span>03</span> INTERACTIVE ELEMENTS
                    </h2>

                    <NavBar txt="uppercase text-light ls-2" />
                    <div className="even-columns">
                        <div className="col explore">
                            <Explore
                                txt="uppercase"
                                bg="bg-light"
                                content="Explore"
                                state="Idle"
                                classname=""
                            />

                            <Explore
                                txt="uppercase"
                                bg="bg-light"
                                content="Explore"
                                state="Hover"
                                classname="hovered"
                            />
                        </div>

                        <div className="col flow flex navs">
                            <Tabs txt="uppercase text-accent ls-2" />
                            <Ellipses />
                            <Numbered txt="uppercase text-accent ls-2" />
                        </div>
                    </div>
                </section > */}
            </div >
        </div >
    );
};

export default Home;
