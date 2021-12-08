import { createContext, useContext } from 'react';
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const { data, fetchError, isLoading } = useAxiosFetch('');

  return (
    <DataContext.Provider
      value={{
        data,
        isLoading,
        fetchError,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useGlobalContext = () => useContext(DataContext);

export default useGlobalContext;
