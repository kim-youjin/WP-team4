import React from 'react';
import {Image} from 'semantic-ui-react'
import "./searchpage.css";

import Slide1 from "./img/slide01.jpg"
import Slide2 from "./img/slide02.jpg"
import Slide3 from "./img/slide03.jpg"
import Slide4 from "./img/slide04.jpg"

function SearchPage() {
    return (
        <div className="container">
           <div className="row" style={{display: 'flex', justifyContent: 'space-evenly', width: '100%', marginBottom: '70px'}}>
                <div className="lecture">
                <Image src={Slide1} alt="" width="300px" rounded/>
                <h3>강의1</h3>
                </div>
    
                <div className="lecture">
                    <Image src={Slide1} alt="" width="300px" rounded/>
                <h3>강의2</h3>
                </div>
                <div className="lecture">
                    <Image src={Slide1} alt="" width="300px" rounded/>
                <h3>강의3</h3>
                </div>
            </div>
            
            <div className="row" style={{display: 'flex', justifyContent: 'space-evenly', width: '100%', marginBottom: '70px'}}>
                <div className="lecture">
                <Image src={Slide1} alt="" width="300px" rounded/>
                <h3>강의4</h3>
                </div>
                <div className="lecture">
                <Image src={Slide1} alt="" width="300px" rounded/>
                <h3>강의5</h3>
                </div>
                <div className="lecture">
                <Image src={Slide1} alt="" width="300px" rounded/>
                <h3>강의6</h3>
                </div>
            </div>

            <div className="row" style={{display: 'flex', justifyContent: 'space-evenly', width: '100%', marginBottom: '70px'}}>
                <div className="lecture">
                <Image src={Slide1} alt="" width="300px" rounded/>
                <h3>강의7</h3>
                </div>
                <div className="lecture">
                <Image src={Slide1} alt="" width="300px" rounded/>
                <h3>강의8</h3>
                </div>
                <div className="lecture">
                <Image src={Slide1} alt="" width="300px" rounded/>
                <h3>강의9</h3>
                </div>

            </div>

            <div className="row" style={{display: 'flex', justifyContent: 'space-evenly', width: '100%', marginBottom:'70px'}}>
                <div className="lecture">
                <Image src={Slide1} alt="" width="300px" rounded/>
                <h3>강의10</h3>
                </div>
                <div className="lecture">
                <Image src={Slide1} alt="" width="300px" rounded/>
                <h3>강의11</h3>
                </div>
                <div className="lecture">
                <Image src={Slide1} alt="" width="300px" rounded/>
                <h3>강의12</h3>
                </div>
            </div>
            
            <div className="row" style={{display: 'flex', justifyContent: 'space-evenly', width: '100%', marginBottom: '70px'}}>
                <div className="lecture">
                <Image src={Slide1} alt="" width="300px" rounded/>
                <h3>강의13</h3>
                </div>
                <div className="lecture">
                <Image src={Slide1} alt="" width="300px" rounded/>
                <h3>강의14</h3>
                </div>
                <div className="lecture">
                <Image src={Slide1} alt="" width="300px" rounded/>
                <h3>강의15</h3>
                </div> 
            </div>
            
          
        </div>
      );
    // <Image src={Slide1} size='medium' rounded />
}
export default SearchPage;