import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/NavBar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [Text, setText] = useState("Enable Dark Mode");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  };
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      setText("Disable Dark Mode");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      setText("Enable Dark Mode");

      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const clk = (e) => {
    document.body.style.backgroundColor = e.target.id;

    console.log(e.target.id);
    showAlert(`${e.target.id} mode has been enabled`, "success");
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="Testutils"
          Mode={Mode}
          toggleMode={toggleMode}
          Text={Text}
          clk={clk}
          About="About"
        />
        {/* <About /> */}
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze"
                  Mode={Mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route path="/About" element={<About Mode={Mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
