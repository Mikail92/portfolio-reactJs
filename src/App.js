import React from 'react';
import {BrowserRouter, Switch} from "react-router-dom";
import Routes from "./containers/__Routes";
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App" id='scrool'>
          <Switch>
              <Routes />
          </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;