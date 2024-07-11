const Home = () => {
  const handleClick = () => {
    console.log("Hello World");
  };
  return (
    <div className="home">
      <h1>Home</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
