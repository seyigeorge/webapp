import React from 'react';
import './App.css';
import Header from './components/Header';
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Tabs from "./components/Tabs";



function App() {
  return (
    <div>
        <Switch>
            <Header />
            <Route exact path="/"  Component={Header} />
            <Route exact path="/login"  Component={Login} />
            <Route path="/signup"  Component={Signup} />
            <Route path="/tabs"   Component={Tabs} />
        </Switch>    
    </div>

            


  );
}

export default App;
