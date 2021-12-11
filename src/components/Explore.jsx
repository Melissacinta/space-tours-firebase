const Explore = ({ txt = '', bg = '', hex = '', rgb = '', hsl = '' }) => {
  return (
    <div className="color flow">
      <a href="#" className={`${bg} ${txt} ff-serif fs-500`}>{txt}</a>
      <div className={`box ${bg} ${txt} ff-serif fs-500`}>{hex}</div>
      <p>
        <span className="text-accent">RGB</span>
        {rgb}
      </p>
    </div>
  );
};

export default Explore;
