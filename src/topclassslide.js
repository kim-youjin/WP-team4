// import React from 'react';
// import "./topclassslide.css";

import React, { Component } from "react";
import Slider from "react-slick";
import { Link, Routes, Route,BrowserRouter } from "react-router-dom";

import "./topclassslide.css";
import "./slick.css";
import "./slick-theme.css";

import Slide1 from "./img/slide01.jpg"
import Slide2 from "./img/slide02.jpg"
import Slide3 from "./img/slide03.jpg"
import Slide4 from "./img/slide04.jpg"

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      arrows : true,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
    };
    return (
      <div className="container">
        <Slider {...settings} style={{margin: 30}}>

          <Link to="/classpage">
          <div>
            <img src={Slide1} alt="" width="300px"/>
            <h3>강의1</h3>
          </div>
          </Link>

          <div>
            <img src={Slide2} alt="" width="300px"/>
            <h3>강의2</h3>
          </div>
          <div>
            <img src={Slide3} alt="" width="300px"/>
            <h3>강의3</h3>
          </div>
          <div>
            <img src={Slide4} alt="" width="300px"/>
            <h3>강의4</h3>
          </div>
          <div>
            <img src={Slide1} alt="" width="300px"/>
            <h3>강의5</h3>
          </div>
          <div>
            <img src={Slide1} alt="" width="300px"/>
            <h3>강의6</h3>
          </div>
          <div>
            <img src={Slide1} alt="" width="300px"/>
            <h3>강의7</h3>
          </div>
          <div>
            <img src={Slide1} alt="" width="300px"/>
            <h3>강8</h3>
          </div>
          <div>
            <img src={Slide1} alt="" width="300px"/>
            <h3>강8</h3>
          </div>
          <div>
            <img src={Slide1} alt="" width="300px"/>
            <h3>강8</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
