import React from 'react';
import {Image} from 'semantic-ui-react'
import "./searchpage.css";

import { Link, Routes, Route,BrowserRouter } from "react-router-dom";

import Lecture13 from "../../../img/lecture13.png"
import Lecture14 from "../../../img/lecture14.png"
import Lecture15 from "../../../img/lecture15.png"



function ProgrammingPage() {

    const lec13 = '639f5d8ffb794eb9609a25ca';
    const lec14 = '639f5da0fb794eb9609a25cb';
    const lec15 = '639f5db0fb794eb9609a25cc';

    return (
        <div className="container">
           <div className="row" style={{display: 'flex', justifyContent: 'space-evenly', width: '100%', marginBottom: '70px'}}>
                
           <a href={`/lectures/${lec13}`}>
                <div className="lecture">
                <Image src={Lecture13} alt="" width="300px" rounded/>
                <h3>강의13</h3>
                </div>
            </a>
            
            <a href={`/lectures/${lec14}`}>
                <div className="lecture">
                    <Image src={Lecture14} alt="" width="300px" rounded/>
                <h3>강의14</h3>
                </div>
            </a>
                <a href={`/lectures/${lec15}`}>
                <div className="lecture">
                    <Image src={Lecture15} alt="" width="300px" rounded/>
                <h3>강의15</h3>
                </div>
                </a>
            </div>
            
          
        </div>
      );
    // <Image src={Slide1} size='medium' rounded />
}
export default ProgrammingPage;