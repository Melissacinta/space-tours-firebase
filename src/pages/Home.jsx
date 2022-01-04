import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="section home">
      <div className="even-columns">
        <div className="col">
          <p className="text-accent fs-500 ff-sans-cond uppercase ls-1">
            So, you want to travel to
          </p>
          <p className="fs-900 ff-serif uppercase">Space</p>

          <p className="text-accent ff-sans home-text">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of
            it. Well sit back, and relax because we’ll give you a truly out of
            this world experience!
          </p>
        </div>
        <div className="col flex">
          <Link
            to="destination"
            className="btn-explore bg-light uppercase ff-serif fs-600"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
