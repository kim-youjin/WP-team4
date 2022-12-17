import React, { Suspense, useEffect, useState } from 'react';
import '../src/components/views/BannerSlide/bannerslide.css';
//import './App.css';

import { Routes, Route,BrowserRouter } from "react-router-dom";

import Header from './components/views/Header/header.js';
import MainClass from './components/views/ClassList/mainclass.js';
import LoginPage from './components/views/LoginPage/LoginPage.js';
import RegisterPage from './components/views/RegisterPage/RegisterPage.js';
import SearchPage from './components/views/List/searchpage';
import VideoPage from './components/views/ClassDetail/videopage';
import Auth from './hoc/auth'

import PostList from './components/views/Post/PostList';
import PostDetail from './components/views/Post/PostDetail'
import New from './components/views/Post/New';
import Edit from './components/views/Post/Edit'
import LectureList1 from './components/views/Lecture/LectureList1';
import LectureList2 from './components/views/Lecture/LectureList2';
import LectureDetail from './components/views/Lecture/LectureDetail';

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
    <Route path="/loginpage" element={<AuthenticLoginPage />}></Route>
    <Route path="/registerpage" element={<AuthenticRegisterPage />}></Route>
    <Route path="/" element={<MainClass />}></Route>
    <Route path="/searchpage" element={<SearchPage />}></Route>
    <Route path="/videopage" element={<VideoPage />}></Route>
    <Route path="/posts" element={<PostList />}></Route>
    <Route path="/posts/:id" element={<PostDetail />}></Route>
    <Route path="/posts/:id/edit" element={<Edit />}></Route>
    <Route path="/posts/new" element={<New />}></Route>
    <Route path="/lectures" element={<LectureList1 />}></Route>
    <Route path="/lectures" element={<LectureList2 />}></Route>
    <Route path="/lectures/:id" element={<LectureDetail />}></Route>
    </Routes>

    </BrowserRouter>
    </Suspense>


  );
}

export default App;