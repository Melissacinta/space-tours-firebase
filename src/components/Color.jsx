const Color = ({ txt = '', bg = '', hex = '', rgb = '', hsl = '' }) => {
  return (
    <div className="color flow">
      <div className={`box ${bg} ${txt} ff-serif fs-500`}>{hex}</div>
      <p>
        <span className="text-accent">RGB</span>
        {rgb}
      </p>
      <p>
        <span className="text-accent">HSL</span>
        {hsl}
      </p>
    </div>
  );
};

export default Color;
