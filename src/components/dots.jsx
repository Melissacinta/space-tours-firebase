const Dots = () => {
  return (
    <div className="dots flow">
      <div className={`ff-sans-cond flex`}>
        <button role="tab" aria-selected="true" className={`btn btn-dot`}><span className="sr-only">slide title</span></button>

        <button role="tab" aria-selected="false" className={`hovered btn btn-dot`}><span className="sr-only">slide title</span></button>

        <button role="tab" aria-selected="false" className={`btn btn-dot`}><span className="sr-only">slide title</span></button>
      </div>
      <p>
        <span className="text-accent">Dots(Active, Hover & Idle)</span>
      </p>
    </div>
  );
};

export default Dots;
