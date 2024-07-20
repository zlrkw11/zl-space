import BlogList from "./components/BlogList";
import useFetch from "./components/useFetch";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {<p>{error}</p>}
      {isPending && (
        <div>
          <p>Loading...</p>
        </div>
      )}
      {data && <BlogList blogs={data} title="All Blogs" />}
    </div>
  );
};

export default Home;
