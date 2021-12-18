const Numbered = ({ txt = '' }) => {
  return (
    <div className="flow">
      <div className={`numbered ff-sans-cond flex fs-600`}>
        <button
          role="tab"
          aria-selected="true"
          className={`${txt} btn btn-numbered`}
        >
          1
        </button>

        <button
          role="tab"
          aria-selected="false"
          className={`${txt} hovered btn btn-numbered`}
        >
          2
        </button>

        <button
          role="tab"
          aria-selected="false"
          className={`${txt} btn btn-numbered`}
        >
          3
        </button>
      </div>
      <p>
        <span className="text-accent">Numbered(Active, Hover & Idle)</span>
      </p>
    </div>
  );
};

export default Numbered;
