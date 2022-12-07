import React from 'react';
import './bannerslide.css';
//import './App.css';

import { Link, Routes, Route,BrowserRouter } from "react-router-dom";

import Header from './header.js';
import Bannerslide from "./bannerslide.js"
import MainClass from './mainclass';
import LoginPage from './loginpage';
import JoinPage from './joinpage';

//import banner1 from "./banner1.png"
//import banner2 from "./banner2.png"

function App() {
  return (
    <BrowserRouter>    
      <div>

      <Header />

      <div style={{ height: '200px', display:'block' }}></div>

      

      

    </div>

    <Routes>
    <Route path="/loginpage" element={< LoginPage />}></Route>
    <Route path="/joinpage" element={< JoinPage />}></Route>
    <Route path="/" element={<MainClass />}></Route>
    
    </Routes>
    </BrowserRouter>


  );
}

export default App;
