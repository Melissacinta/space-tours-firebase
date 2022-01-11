const Tabs = ({ txt = '' }) => {
  return (
    <div className="tabs flow">
      <div className={`ff-sans-cond flex underline-indicators`}>
        <button
          role="tab"
          aria-selected="true"
          className={`${txt} btn btn-tab`}
        >
          Moon
        </button>
        <button
          role="tab"
          aria-selected="false"
          className={`${txt} hovered btn btn-tab`}
        >
          Mars
        </button>
        <button
          role="tab"
          aria-selected="false"
          className={`${txt} btn btn-tab`}
        >
          Europa
        </button>
      </div>
      <p>
        <span className="text-accent">Tabs(Active, Hover & Idle)</span>
      </p>
    </div>
  );
};

export default Tabs;
