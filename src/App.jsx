// import DesignSystem from './components/DesignSystem';
import { Route, Routes } from 'react-router-dom';
import DesignSystem from './components/DesignSystem';
import NotFound from './components/Missing';
import Layout from './layout/layout';
import Crew from './pages/Crew';
import Destination from './pages/Destination';
import Home from './pages/Home';
import Technology from './pages/Technology';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="design" element={<DesignSystem />} />
          <Route path="destination">
            <Route index element={<Destination />} />
          </Route>
          <Route path="crew">
            <Route index element={<Crew />} />
          </Route>
          <Route path="technology">
            <Route index element={<Technology />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
