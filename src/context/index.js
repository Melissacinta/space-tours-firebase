import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [crew, setCrew] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [technology, setTechnology] = useState([]);

  const fetchData = async (url, func) => {
    try {
      const response = await axios.get(url);
      func(response.data);
    } catch (error) {
      if (error.response) {
        // Not in the 200 response range
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else {
        console.log(`error: ${error.message}`);
      }
    }
  };

  useEffect(() => {
    fetchData('/api/crew', setCrew);
    fetchData('/api/destinations', setDestinations);
    fetchData('/api/technology', setTechnology);
  }, []);


  return (
    <DataContext.Provider
      value={{
        crew,
        technology,
        destinations,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useGlobalContext = () => useContext(DataContext);

export default useGlobalContext;
