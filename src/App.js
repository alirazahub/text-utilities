import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';
import About from './components/About';
import Error from './components/Error';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
  }
  const toggle = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been enabled", "danger");
      document.title = "TextUtils - LightMode";
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Light mode has been enabled", "danger");
      document.title = "TextUtils - DarkMode";
    }
  }
  return (
    <>
      <Router>
        <Navbar title="New Project" mode={mode} toggle={toggle} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/">
            <Form showAlert={showAlert} heading="Enter Text To Update" mode={mode} />
          </Route>
        </Switch>
        <Route exact path="/:opt1/:opt2">
                    <Error />
                </Route>
                <Route exact path="/:opt1">
                    <Error />
                </Route>
      </Router>
    </>
  );
}

export default App;