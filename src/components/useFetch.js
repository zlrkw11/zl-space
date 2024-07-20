import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        // javascript array
        console.log(data);
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
    return () => console.log("cleanup");
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
