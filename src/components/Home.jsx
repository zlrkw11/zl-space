import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "blog 1", body: "texts", author: "zl", id: 1 },
    { title: "blog 2", body: "texts", author: "zl", id: 2 },
    { title: "blog 3", body: "texts", author: "zl", id: 3 },
  ]);
  return <div className="home"></div>;
};

export default Home;
