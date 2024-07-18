import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  return (
    <div className="home">
      {<p>{error}</p>}
      {isPending && (
        <div>
          <p>Loading...</p>
        </div>
      )}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
