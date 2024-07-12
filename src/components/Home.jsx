import { useState } from "react";
const Home = () => {
  const [name, setName] = useState("Ray");
  const handleClick = () => {
    setName("Z.L");
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
