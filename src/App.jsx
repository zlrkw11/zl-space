import Navbar from "./components/Navbar";
import Home from "./Home";
import NewBlog from "./NewBlog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<NewBlog />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
