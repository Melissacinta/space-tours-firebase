import Tabs from '../components/Tabs';

const Destination = () => {
  const array = ['Moon', 'Mars', 'Europa', 'Titan'];

  return (
    <section className='section section-destination'>
      <h2 className="numbered-title ls-1 uppercase">
        <span>01</span> Pick your destination
      </h2>
      <article className="even-columns">
        <img src="./assets/destination/image-moon.png" alt="Moon" />
        <div className="col">
          <Tabs txt="uppercase text-accent ls-2" array={array} />
          <h3 className="fs-800 ff-serif uppercase">Moon</h3>
          <p className="text-accent">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>{' '}
          <div className="flex">
            <div>
              <p className="text-accent fs-200 uppercase ff-sans-cond ls-3">
                Avg. Distance
              </p>{' '}
              <p className="fs-500 ff-serif uppercase">384,400 km</p>
            </div>
            <div>
              <p className="text-accent fs-200 uppercase ff-sans-cond ls-3">
                Est. travel time
              </p>{' '}
              <p className="fs-500 ff-serif uppercase">3 days</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Destination;
