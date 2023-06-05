import React from "react";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<TextArea />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>

      {/* components */}
    </>
  );
};

export default App;
