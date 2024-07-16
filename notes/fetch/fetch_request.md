# Fetch request in useEffect hook

### Fetch the data ONCE when the component first renders

1. empty out the states
2. set the blogs (list) to be null

```
useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // javascript array
        console.log(data);
        setBlogs(data);
      });
  }, []);
```

.then() function runs a function right after the fetch action. In this case, we return the .json() object of the response object. Followed by another .then() to set our blogs value to this json object (which is an array).

## Loading
