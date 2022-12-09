import React from 'react';
import './bannerslide.css';
//import './App.css';

import { Link, Routes, Route,BrowserRouter } from "react-router-dom";

import Header from './header.js';
import Bannerslide from "./bannerslide.js"
import MainClass from './mainclass';
import LoginPage from './loginpage';
import JoinPage from './joinpage';
import SearchPage from './searchpage';
import ClassPage from './classpage';
import { Search } from 'semantic-ui-react';

function App() {
  return (
    <BrowserRouter>    
      <div>

      <Header />

      <div style={{ height: '180px', display:'block' }}></div>

    </div>

    <Routes>
    <Route path="/loginpage" element={< LoginPage />}></Route>
    <Route path="/joinpage" element={< JoinPage />}></Route>
    <Route path="/" element={<MainClass />}></Route>
    <Route path="/searchpage" element={<SearchPage />}></Route>
    <Route path="/classpage" element={<ClassPage />}></Route>
    
    </Routes>
    </BrowserRouter>


  );
}

export default App;
