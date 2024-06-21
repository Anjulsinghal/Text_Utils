// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
import About from './components/About'
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

//This is on github repos

function App() {
  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=> {
    setAlert({
      msg: message,
      ty: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = ()=> {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = '#22113e';
      showAlert("Darkmode has been enable","success");
      document.title = "TextUtil-darkmode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Lightmode has been enable","success");
      document.title = "TextUtil-lightmode";
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} about="about"/>
    <Alert alert={alert}/>
    <Routes>
          <Route exect path="/about" element={<About mode={mode} />}/>
          <Route exect path="/" element={<TextForm mode={mode} showAlert={showAlert}/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
