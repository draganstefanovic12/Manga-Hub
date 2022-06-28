import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  async function handleData(url) {
    const data = await axios.get(url);
    setData(data);
  }

  useEffect(() => {
    handleData(url);
  }, [url]);
  return data;
};

export default useFetch;

//mb try getting the img aswell
