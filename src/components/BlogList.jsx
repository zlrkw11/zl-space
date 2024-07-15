const BlogList = ({ blogs, title }) => {
  //   const blogs = props.blogs;
  //   const title = props.title;
  return (
    <div className="home">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <div className="blog-preview" key={blog.id}>
            <div>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </div>
            <button className="delete-button">Delete Blog</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
