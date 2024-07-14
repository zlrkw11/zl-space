# Function as props

## Implement the delete blog function

we have created a delete button to pass in a function when onClick is triggered to handle deleting logic.

Inside Home.jsx (where the states are set):

note: **filter** method does not mutate the original array.

```
 const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

```

meanwhile have the function prop passed in:

```
<BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
```

Then, make sure to receive the handleDelete function prop in the component file as well:

```
const BlogList = ({ blogs, title, handleDelete }) =>
```
