import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Layout = () => {
  return (
    <div className="home">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;

// function Layout() {
//   return (
//     <div>
//       <h1>Welcome to the app!</h1>
//       <nav>
//         <Link to="invoices">Invoices</Link> |{' '}
//         <Link to="dashboard">Dashboard</Link>
//       </nav>
//       <div className="content">
//         <Outlet />
//       </div>
//     </div>
//   );
// }
