# Reusing components

### Using blogList component as the example

By using the filter() method, it returns the item in the list if the item returns true for
the condition

```
<BlogList
        blogs={
          (blogs.filter((blog) => blog.author === "zl"), (title = "zl's blogs"))
        }
      />
```

In this case, only the blogs with author = 'zl' will be returned for this blogList component
