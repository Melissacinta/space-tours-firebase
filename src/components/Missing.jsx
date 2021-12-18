import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <main className="error-page">
      <h2>404!!! Page Not Found</h2>
      <p>Well, that's disappointing.</p>
      <p className="uppercase">
        <Link to="/">Visit our homepage</Link>
        or you're feeling adventourous,{' '}
        <Link to="/destination">move on to Mars</Link>
      </p>
    </main>
  );
};

export default Missing;
