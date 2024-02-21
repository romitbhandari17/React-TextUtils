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

  function toggleMode() {
    if (mode === 'light') {
      SetMode('dark');
      document.body.style.backgroundColor = '#172150';
      showAlert("Dark Mode has been enabled","success");
      document.title = "TextUtils - Dark mode enabled";
    } else {
      SetMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
      document.title = "TextUtils - Light mode enabled";
    }
  }


  return (
      <>
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
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
