function App() {
  // any JavaScript before return
  const title = "Welcome to the new blog";
  const likes = 50;
  const person = { name: "zl", age: 20 };
  const link = "http://www.google.com";
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{10}</p>
        <p>{"Hello World"}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 10}</p>

        <a href={link}></a>
      </div>
    </div>
  ); // div injected into index.html
}

export default App;
