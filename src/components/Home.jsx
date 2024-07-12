import { useState } from "react";
const Home = () => {
  const [name, setName] = useState("Ray");
  const [age, setAge] = useState(20);
  const handleClick = () => {
    setName("Z.L");
    setAge(30);
  };

  return (
    <div className="home">
      <h1>Home</h1>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click me</button>
      Click me again!
    </div>
  );
};

export default Home;
