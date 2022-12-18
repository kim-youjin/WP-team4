import React from 'react';
import {Image} from 'semantic-ui-react'
import "./searchpage.css";

import { Link, Routes, Route,BrowserRouter } from "react-router-dom";

import Lecture13 from "../../../img/lecture13.png"
import Lecture14 from "../../../img/lecture14.png"
import Lecture15 from "../../../img/lecture15.png"



function ProgrammingPage() {
    return (
        <div className="container">
           <div className="row" style={{display: 'flex', justifyContent: 'space-evenly', width: '100%', marginBottom: '70px'}}>
                
            <Link to="/classpage">
                <div className="lecture">
                <Image src={Lecture13} alt="" width="300px" rounded/>
                <h3>강의13</h3>
                </div>
            </Link>
            
            <Link to="/classpage">
                <div className="lecture">
                    <Image src={Lecture14} alt="" width="300px" rounded/>
                <h3>강의14</h3>
                </div>
            </Link>
                
                <div className="lecture">
                    <Image src={Lecture15} alt="" width="300px" rounded/>
                <h3>강의15</h3>
                </div>
            </div>
            
          
        </div>
      );
    // <Image src={Slide1} size='medium' rounded />
}
export default ProgrammingPage;