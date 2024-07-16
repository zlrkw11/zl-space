import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [name, setName] = useState("rukawa");

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

  return (
    <div className="home">
      {isPending && (
        <div>
          <p>Loading...</p>
        </div>
      )}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      <button onClick={() => setName("kaede")}>change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
