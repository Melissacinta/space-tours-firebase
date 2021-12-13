import { useEffect, useState } from 'react';
import DesignSystem from './components/DesignSystem';
import { BASE_URL } from './constants';
import useFetch from './hooks/useAxiosFetch';

const App = () => {
  const [crew, setCrew] = useState([]);
  const { data, isLoading, isError } = useFetch(`${BASE_URL}/crew`);

  console.log(crew);
  useEffect(() => {
    setCrew(data);
  }, [data]);

  return (
    <>
      <DesignSystem />;
    </>
  );
};

export default App;
