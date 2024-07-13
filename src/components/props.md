# Props

### Making as many reusable components as possible

in this example, we need the blogs data when the component is saved somewhere else.

1. redeclare the blogs data in the new component

2. pass the data into the blogList component as props

## The props passing approach

when pulling a jsx component, pass in the props with the name we want to use (anything)

```
  return (
    <div className="home">
      <BlogList blogs={blogs} />
    </div>
  );
```

inside the component file, extract the value from the props package like so:

```
const BlogList = (props) => {
  const blogs = props.blogs;
  return (
    <div className="home">
      {blogs.map((blog) => (
        <div key={blog.id}>
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
```

### Can pass more than 1 values

```
<BlogList blogs={blogs} title="All Blogs" />
```
