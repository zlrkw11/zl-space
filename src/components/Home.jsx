const Home = () => {
  const handleClick = (e) => {
    console.log("Hello World", e);
  };

  const handleClickAgain = (name) => {
    console.log("hello " + name);
  };

  return (
    <div className="home">
      <h1>Home</h1>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={() => {
          handleClickAgain("Ray");
        }}
      >
        Click me again!
      </button>
    </div>
  );
};

export default Home;
