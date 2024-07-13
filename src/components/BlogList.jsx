const BlogList = () => {
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

export default BlogList;
