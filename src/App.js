import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextFrom';
import Alert from './components/Alert';
import About from './components/About';
import {               // THIS CODE FRAGMENT IS USED FOR REACT ROUTER
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light'); // Weather dark mode is enable or not
  const [alert, setAlert] = useState(null)



  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toogleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "black"
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "danger")
    }
  }
  return (
    <>
      {/* <Navbar title="pizza" aboutText="Aboutus" mode={mode} toogleMode={toogleMode} />
      <Alert alert={alert} /> */}
      {/* <div className='container'>
        <TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode} />
      </div> */}

      {/* <div className='container'>
      <About/>
    </div>
   */}

      {/* react router */}
      <Router>
        <Navbar title="pizza" aboutText="Aboutus" mode={mode} toogleMode={toogleMode} />
        <Alert alert={alert} />
        <div className='container'>
          <Routes>
            <Route path='/about' element={<About />}> </Route>
            <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode} />}></Route>
          </Routes>

        </div>
      </Router>

    </>




  );
}

export default App;
