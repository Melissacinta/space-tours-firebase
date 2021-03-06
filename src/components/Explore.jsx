import { Link } from 'react-router-dom';

const Explore = ({
  txt = '',
  bg = '',
  content = '',
  state = '',
  classname = '',
}) => {
  return (
    <div className="flow">
      <Link
        to="./explore"
        className={`btn-explore ${classname} ${bg} ${txt} ff-serif fs-600`}
      >
        {content}
      </Link>
      <p>
        <span className={`${classname} text-accent`}>
          Landing Page Main Button - {state}
        </span>
      </p>
    </div>
  );
};

export default Explore;
