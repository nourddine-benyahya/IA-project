import React from "react";
import Header from "./Components/Header";
import "./App.css";
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Chat from "./Components/Chat";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} >
          <Route index element={<Home/>} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Chat' element={<Chat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
