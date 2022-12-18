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
    return (
        <div className="container">
           <div className="row" style={{display: 'flex', justifyContent: 'space-evenly', width: '100%', marginBottom: '70px'}}>
                
            <Link to="/classpage">
                <div className="lecture">
                <Image src={Lecture11} alt="" width="300px" rounded/>
                <h3>강의11</h3>
                </div>
            </Link>
            
            <Link to="/classpage">
                <div className="lecture">
                    <Image src={Lecture12} alt="" width="300px" rounded/>
                <h3>강의12</h3>
                </div>
            </Link>
                
                <div className="lecture" style={{width:"300px"}}></div>
            </div>
            
          
        </div>
      );
    // <Image src={Slide1} size='medium' rounded />
}
export default PhotoPage;