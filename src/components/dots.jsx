const Dots = ({ txt = '' }) => {
  return (
    <div className="dots flow">
      <div className={`ff-sans-cond flex underline-indicators`}>
        <button aria-selected="true" className={`${txt} btn btn-tab`}>Moon</button>
        <button aria-selected="false" className={`${txt} hovered btn btn-tab`}>Mars</button>
        <button aria-selected="false" className={`${txt} btn btn-tab`}>Europa</button>
      </div>
      <p>
        <span className="text-accent">Dots(Active, Hover & Idle)</span>
      </p>
    </div>
  );
};

export default Dots;
