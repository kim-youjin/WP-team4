import React from 'react';
import './bannerslide.css';
//import './App.css';

import Header from './header.js';
import Bannerslide from "./bannerslide.js"
import MainClass from './mainclass';

//import banner1 from "./banner1.png"
//import banner2 from "./banner2.png"

function App() {
  return (
    <div>

      <Header />

      <div style={{ height: '200px', display:'block' }}></div>

      <Bannerslide />

      <MainClass />

    </div>
  );
}

export default App;
