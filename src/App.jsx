function App() {
  // any JavaScript before return
  const title = "Welcome to the new blog";
  const likes = 50;
  const person = { name: "zl", age: 20 };
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
      </div>
    </div>
  ); // div injected into index.html
}

export default App;
