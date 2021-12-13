import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (dataUrl) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const getData = async (url, isMounted, source) => {
    setIsLoading(true);

    try {
      const response = await axios.get(url, {
        cancelToken: source.token,
      });

      if (isMounted) {
        setData(response.data);
        setIsError(null);
      }
    } catch (error) {
      if (isMounted) {
        setIsError(error.message);
        setData([]);
      }
    } finally {
      isMounted && setIsLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    getData(dataUrl, isMounted, source);

    return () => {
      isMounted = false;
      source.cancel();
    };
  }, [dataUrl]);

  return { data, isError, isLoading };
};

export default useFetch;
