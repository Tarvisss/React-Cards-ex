import React, {useEffect, useState} from "react";
import axios from "axios";
import {v1 as uuid} from "uuid";

function useAxios(url, options = {}) {
  const [APIdata, setAPIData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAPIData = async () => {
    try {
      const response = await axios.get(url);
      setAPIData(data => [...data, { ...response.data, id: uuid() }]);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  // If url changes, fetch new data
  useEffect(() => {
    getAPIData();
  }, [url]);

  return [APIdata, isLoading, error, getAPIData]; // return the fetch function
}

export default useAxios;
