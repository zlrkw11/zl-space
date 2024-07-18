const useFetch = () => {
  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        // javascript array
        console.log(data);
        setBlogs(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);
};
