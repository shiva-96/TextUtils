import './App.css';
import About from './component/About';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [mode, changeMode] = useState("light");
  const changeNavBarMode = () => {
    if (mode === "light") {
      changeMode("dark")
      document.body.style.background = "#042743";
      showAlert("Dark mode is activated.", "success");
      document.title = 'Textutils - Dark Mode'
      // setInterval(() => {
      //   document.title = "TextUtils is amazing site !!!"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now !!!"
      // }, 1500);

    } else {
      changeMode("light")
      document.body.style.background = "white";
      showAlert("Light mode is activated.", "warning");
      document.title = 'Textutils - Light Mode'
    }
  }

  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      mssg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }


  return (
    <>
      <Router>
        <Navbar title="Textutils" aboutTitle="About Textutils" mode={mode} changeMode={changeNavBarMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter text to analyze" alert={showAlert} mode={mode} />} />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
        {/* <Alert alert={alert} /> */}
        {/* <Navbar/> */}
      </Router>









      {/* <Navbar title="Textutils" aboutTitle="About Textutils" mode={mode} changeMode={changeNavBarMode} />
      <Alert alert={alert} />
      <TextForm heading="Enter text to analyze" alert={showAlert} mode={mode} />
      <About mode={mode} /> */}
    </>
  );
}

export default App;
