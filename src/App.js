import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextBoxForm from "./components/TextBoxForm";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!mode);
    document.body.style.backgroundColor = !mode ? "#121212" : "white";
  };

  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className={`container mt-3 ${mode ? "text-light" : "text-dark"}`}>
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<TextBoxForm mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
