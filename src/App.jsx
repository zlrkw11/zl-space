import Navbar from "./components/Navbar";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>App Component</h1>
        <Home />
      </div>
    </div>
  );
}

export default App;
