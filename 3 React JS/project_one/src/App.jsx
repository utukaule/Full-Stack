import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About us"/>
      {/* this title is props that we are passing to navbar through component Navbar*/}
    </>
  );
}

export default App;
