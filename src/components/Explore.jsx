const Explore = ({ txt = '', bg = '', content = '', state = '', classname = '' }) => {
  return (
    <div className="flow">
      <a href="" className={`btn-explore ${classname} ${bg} ${txt} ff-serif fs-600`}>{content}</a>
      <p>
        <span className={`${classname} text-accent`}>Landing Page Main Button - {state}</span>
      </p>
    </div>
  );
};

export default Explore;
