## useState Hook

whenever we need to change a value and re-render the new value.

```
const [name, setName] = useState("Ray");
  const handleClick = () => {
    setName("some value");
  };
```

using the second function to set the first value to the new one passed in.

the value passed in can be any type.

**React Developer Tool installation >> Google Chrome Store**

### useState Hook Practice

must be called in a component

```
const [blogs, setBlogs] = useState([
    { title: "blog 1", body: "texts", author: "zl", id: 1 },
    { title: "blog 2", body: "texts", author: "zl", id: 2 },
    { title: "blog 3", body: "texts", author: "zl", id: 3 },
  ]);
```

### Map the list of items

using curly braces to include javascript and then return some jsx.

```
 <div className="home">
      {blogs.map((blog) => (
        <div key={blog.id}>
          <div className="blog-preview" key={blog.id}></div>
        </div>
      ))}
    </div>
```

also, always include the **key** prop when mapping. Must be unique for each item,
so using id attribute is ideal.

then, we can extract elements / values from each blog object for display:

```
 <div className="blog-preview" key={blog.id}>
        <h2>{blog.title}</h2>
        <p>Written by {blog.author}</p>
  </div>
```
