const Home = () => {
  const handleClick = () => {
    console.log("Hello World");
  };

  const handleClickAgain = (name) => {
    console.log("hello" + name);
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
        Click me
      </button>
    </div>
  );
};

export default Home;
