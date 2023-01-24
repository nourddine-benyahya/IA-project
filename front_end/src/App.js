import React from "react";
import Header from "./Components/Header";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Signin from "./Components/Signin";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} >
          <Route index element={<Home/>} />
          <Route path='/Singin' element={<Signin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
