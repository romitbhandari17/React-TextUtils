import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, SetMode] = useState('light');
  const [alert, SetAlert] = useState(null);

  const showAlert = (message, type) => {
    SetAlert({
      msg:message,
      type: type
    })

    setTimeout(() =>{
      SetAlert(null);
    },2000)
  }

  let removeBgClasses = ()=>{
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
  }

  function toggleMode(cls) {
    console.log(cls);
    removeBgClasses();
    
    if(cls==='dark')
      document.body.style.backgroundColor = '#172150';
    else
      document.body.classList.add('bg-'+cls);

    showAlert(cls+" Mode has been enabled","success");
      //document.title = "TextUtils - Dark mode enabled";
    
  }

  function toggleModeOld() {
    if (mode === 'light') {
      SetMode('dark');
      document.body.style.backgroundColor = '#172150';
      showAlert("Dark Mode has been enabled","success");
      //document.title = "TextUtils - Dark mode enabled";
    } else {
      SetMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
      //document.title = "TextUtils - Light mode enabled";
    }
  }


  return (
      <>
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleModeOld={toggleModeOld}/>
      <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About/>}>
            {/* <About /> */}
          </Route>
          <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text to Analyse below" mode={mode}/> }>
          </Route>
        </Routes>
      </Router>
      </>
  );
}

export default App;
