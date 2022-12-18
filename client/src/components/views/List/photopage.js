import React from 'react';
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


function PhotoPage() {

    const lec11 = '639f5cc4fb794eb9609a25c8';
    const lec12 = '639f5cd9fb794eb9609a25c9';
    
    return (
        <div className="container">
           <div className="row" style={{display: 'flex', justifyContent: 'space-evenly', width: '100%', marginBottom: '70px'}}>
                
           <a href={`/lectures/${lec11}`}>
                <div className="lecture">
                <Image src={Lecture11} alt="" width="300px" rounded/>
                <h3>강의11</h3>
                </div>
            </a>
            
            <a href={`/lectures/${lec12}`}>
                <div className="lecture">
                    <Image src={Lecture12} alt="" width="300px" rounded/>
                <h3>강의12</h3>
                </div>
            </a>
                
                <div className="lecture" style={{width:"300px"}}></div>
            </div>
            
          
        </div>
      );
    // <Image src={Slide1} size='medium' rounded />
}
export default PhotoPage;