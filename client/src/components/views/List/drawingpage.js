import React from 'react';
import {Image} from 'semantic-ui-react'
import { useEffect, useState } from "react";
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

function DrawingPage() {

    const lec01 = '639e20e3645d6267607165ed';
    const lec02 = '639dfc6f645d6267607165ea';
    const lec03 = '639e3382645d6267607165ee';
    const lec04 = '639e33af645d6267607165ef';
    const lec05 = '639e33d1645d6267607165f0';
    const lec06 = '639e33e0645d6267607165f1';
    const lec07 = '639e33ec645d6267607165f2';
    const lec08 = '639e33fc645d6267607165f3';

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
                <div className="lecture" style={{width:"300px"}}></div>
            </div>
            
          
        </div>
      );
}
export default DrawingPage;