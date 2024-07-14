import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "blog 1", body: "texts", author: "zl", id: 1 },
    { title: "blog 2", body: "texts", author: "zl", id: 2 },
    { title: "blog 3", body: "texts", author: "not-zl", id: 3 },
  ]);

  const handleDelete = (id) => {};

  useEffect(() => {
    console.log("use effect ran");
  });

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "zl")}
        title="zl's blogs"
      />
    </div>
  );
};

export default Home;
