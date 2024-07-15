import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState("rukawa");

  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName("kaede")}>change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
