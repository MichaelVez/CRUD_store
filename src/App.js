import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Store from "./components/Store";
import Videos from "./components/Videos";
import React, { Component } from "react";

function App() {
  return (
    <div className='cont'>
      <Navbar />
      <Route path='/' exact component={Homepage} />
      <Route path='/store' exact component={Store} />
      <Route path='/videos' exact component={Videos} />
    </div>
  );
}

export default App;
