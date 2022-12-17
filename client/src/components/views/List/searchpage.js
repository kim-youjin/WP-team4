import React from 'react';
import { useEffect, useState } from "react";
import {Image} from 'semantic-ui-react'
import "./searchpage.css";

import { Link, Routes, Route,BrowserRouter } from "react-router-dom";

import Lecture1 from "../../../img/lecture1.png"
import Lecture2 from "../../../img/lecture2.png"
import Lecture3 from "../../../img/lecture3.png"
import Lecture4 from "../../../img/lecture4.png"
import Lecture5 from "../../../img/lecture5.png"
import Lecture6 from "../../../img/lecture6.png"
import Lecture7 from "../../../img/lecture7.png"
import Lecture8 from "../../../img/lecture8.png"
import Lecture9 from "../../../img/lecture9.png"
import Lecture10 from "../../../img/lecture10.png"
import Lecture11 from "../../../img/lecture11.png"
import Lecture12 from "../../../img/lecture12.png"
import Lecture13 from "../../../img/lecture13.png"
import Lecture14 from "../../../img/lecture14.png"
import Lecture15 from "../../../img/lecture15.png"


function SearchPage() {

    const [lectures, setLectures] = useState([]);

    // 1. 
 async function getLectures() {
   const response = await fetch("http://localhost:5000/lectures");

   if (!response.ok) {
     const message = `에러: ${response.statusText}`;
     window.alert(message);
     return;
   }

   const lecturelist = await response.json();
   setLectures(lecturelist);
 }

 useEffect(() => {
   getLectures();
 }, []);

 const settings = {
   dots: true,
   infinite: false,
   speed: 500,
   arrows : true,
   slidesToShow: 4,
   slidesToScroll: 4,
   initialSlide: 0,
 };

 const lec01 = '639e20e3645d6267607165ed';
 const lec02 = '639dfc6f645d6267607165ea';
 const lec03 = '639e3382645d6267607165ee';
 const lec04 = '639e33af645d6267607165ef';
 const lec05 = '639e33d1645d6267607165f0';
 const lec06 = '639e33e0645d6267607165f1';
 const lec07 = '639e33ec645d6267607165f2';
 const lec08 = '639e33fc645d6267607165f3';
 const lec09 = '639e340a645d6267607165f4';
 const lec10 = '639e3418645d6267607165f5';

    return (
        <div className="container">
           <div className="row" style={{display: 'flex', justifyContent: 'space-evenly', width: '100%', marginBottom: '70px'}}>
                
           <a href={`/lectures/${lec01}`}>
                <div className="lecture">
                <Image src={Lecture1} alt="" width="300px" rounded/>
                <h3>강의1</h3>
                </div>
            </a>
            
            <a href={`/lectures/${lec02}`}>
                <div className="lecture">
                    <Image src={Lecture2} alt="" width="300px" rounded/>
                <h3>강의2</h3>
                </div>
            </a>
            <a href={`/lectures/${lec03}`}>
                <div className="lecture">
                    <Image src={Lecture3} alt="" width="300px" rounded/>
                <h3>강의3</h3>
                </div>
            </a>   
            </div>
            
            <div className="row" style={{display: 'flex', justifyContent: 'space-evenly', width: '100%', marginBottom: '70px'}}>
            <a href={`/lectures/${lec04}`}>
                <div className="lecture">
                <Image src={Lecture4} alt="" width="300px" rounded/>
                <h3>강의4</h3>
                </div>
            </a>
            <a href={`/lectures/${lec05}`}>
                <div className="lecture">
                <Image src={Lecture5} alt="" width="300px" rounded/>
                <h3>강의5</h3>
                </div>
            </a>
            <a href={`/lectures/${lec06}`}>
                <div className="lecture">
                <Image src={Lecture6} alt="" width="300px" rounded/>
                <h3>강의6</h3>
                </div>
            </a>
            </div>

            <div className="row" style={{display: 'flex', justifyContent: 'space-evenly', width: '100%', marginBottom: '70px'}}>
            <a href={`/lectures/${lec07}`}>
                <div className="lecture">
                <Image src={Lecture7} alt="" width="300px" rounded/>
                <h3>강의7</h3>
                </div>
            </a>
            <a href={`/lectures/${lec08}`}>
                <div className="lecture">
                <Image src={Lecture8} alt="" width="300px" rounded/>
                <h3>강의8</h3>
                </div>
            </a>
            <a href={`/lectures/${lec09}`}>
                <div className="lecture">
                <Image src={Lecture9} alt="" width="300px" rounded/>
                <h3>강의9</h3>
                </div>
            </a>
            </div>

            <div className="row" style={{display: 'flex', justifyContent: 'space-evenly', width: '100%', marginBottom:'70px'}}>
            <a href={`/lectures/${lec10}`}>
                <div className="lecture">
                <Image src={Lecture10} alt="" width="300px" rounded/>
                <h3>강의10</h3>
                </div>
            </a>
                <div className="lecture">
                <Image src={Lecture11} alt="" width="300px" rounded/>
                <h3>강의11</h3>
                </div>
                <div className="lecture">
                <Image src={Lecture12} alt="" width="300px" rounded/>
                <h3>강의12</h3>
                </div>
            </div>
            
            <div className="row" style={{display: 'flex', justifyContent: 'space-evenly', width: '100%', marginBottom: '70px'}}>
                <div className="lecture">
                <Image src={Lecture13} alt="" width="300px" rounded/>
                <h3>강의13</h3>
                </div>
                <div className="lecture">
                <Image src={Lecture14} alt="" width="300px" rounded/>
                <h3>강의14</h3>
                </div>
                <div className="lecture">
                <Image src={Lecture15} alt="" width="300px" rounded/>
                <h3>강의15</h3>
                </div> 
            </div>
            
          
        </div>
      );
    // <Image src={Slide1} size='medium' rounded />
}
export default SearchPage;