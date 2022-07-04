import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  async function handleData(url, abortCont) {
    const data = await axios
      .get(url, { signal: abortCont.signal })
      .catch((err) => {
        if (err.message === "CanceledError") {
          console.log("hello");
        } else if (err.message === "TypeError") {
          return;
        }
      });

    setData(data);
  }

  useEffect(() => {
    const abortCont = new AbortController();
    handleData(url, abortCont);
    return () => abortCont.abort();
  }, [url]);
  return data;
};

export default useFetch;
