const Home = () => {
  let name = "Ray";
  const handleClick = () => {
    name = "Z.L";
  };

  return (
    <div className="home">
      <h1>Home</h1>
      <p>{name}</p>
      <button onClick={handleClick}>Click me</button>
      Click me again!
    </div>
  );
};

export default Home;
