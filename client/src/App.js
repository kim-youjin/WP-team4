import React, { Suspense } from 'react';
import '../src/components/views/BannerSlide/bannerslide.css';
//import './App.css';

import { Routes, Route,BrowserRouter } from "react-router-dom";

import Header from './components/views/Header/header.js';
import MainClass from './components/views/ClassList/mainclass.js';
import LoginPage from './components/views/LoginPage/LoginPage.js';
import RegisterPage from './components/views/RegisterPage/RegisterPage.js';
import SearchPage from './components/views/Header/search.js';
import ClassPage from './components/views/ClassDetail/classpage.js';
import VideoPage from './components/views/ClassDetail/videopage';
import Auth from './hoc/auth'

function App() {
  
  const AuthenticLoginPage  = Auth( LoginPage , false)
  const AuthenticRegisterPage = Auth( RegisterPage , false)
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      
    <BrowserRouter>    
      <div>

      <Header />

      <div style={{ height: '180px', display:'block' }}></div>

    </div>

    <Routes>
    <Route path="/loginpage" element={<LoginPage />}></Route>
    <Route path="/registerpage" element={<RegisterPage />}></Route>
    <Route path="/" element={<MainClass />}></Route>
    <Route path="/searchpage" element={<SearchPage />}></Route>
    <Route path="/classpage" element={<ClassPage />}></Route>
    <Route path="/videopage" element={<VideoPage />}></Route>
    
    </Routes>
    </BrowserRouter>
    </Suspense>


  );
}

export default App;