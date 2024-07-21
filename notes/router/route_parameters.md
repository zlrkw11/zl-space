# Route parameter

```
:id
```

to dynamically render

inside App.jsx:

```
<Route path="/blogs/:id" element={<BlogDetails />} />
```

doing this is essentially initializing a path to /blogs/whatever id.

So, inside BlogList.jsx:

```
<div className="blog-preview" key={blog.id}>
    <Link to={`/blogs/${blog.id}`}>
        <div>
        <h2>{blog.title}</h2>
        <p>Written by {blog.author}</p>
        </div>
    </Link>
</div>
```

since every blog item is a json object which contains an 'id'. We extract that id and make up a link using the id to generate a route dynamically.

say we have blogs/1 as the first blog item, we can then have unlimited new blogs with blogs/xxx as the route.
