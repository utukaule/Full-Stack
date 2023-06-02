import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setDarkMode] = useState("light");

  const toggleMode = () => {
    if (mode == "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        about="About us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert Alert="this is alert"/>
      {/* this title is props that we are passing to navbar through component Navbar*/}
      <TextForm heading="Enter the text to analyze below" mode={mode} />
      <About />
    </>
  );
}

export default App;
