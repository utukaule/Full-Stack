import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About us"/>
      {/* this title is props that we are passing to navbar through component Navbar*/}
      <TextForm heading="Enter the text to analyze below"/>
    </>
  );
}

export default App;
