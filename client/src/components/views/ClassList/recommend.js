import React from 'react'
import { Card } from 'semantic-ui-react'

import { Link, Routes, Route,BrowserRouter } from "react-router-dom";

import Drawing from "../../../img/drawing.png"
import Music from "../../../img/music.png"
import Programming from "../../../img/programming.png"
import Photo from "../../../img/photo.png"

// const src1 = "./img/banner1.png"
// const src2 = "./img/banner1.png"
// const src3 = "./img/banner1.png"
// const src4 = "./img/banner1.png"

const CardExampleColumnCount = () => (
  <Card.Group style={{width: 1200, margin: '0 auto'}} itemsPerRow={4} >

  <Link to="/drawingpage">
      <Card style={{ padding: 10,margin: 30, width: 240}} raised image={Drawing} />
  </Link>
  <Link to="/musicpage">
    <Card style={{ padding: 10,margin: 30, width: 240}} href='#' raised image={Music} />
  </Link>
  <Link to="/programmingpage">
    <Card style={{ padding: 10,margin: 30, width: 240}} href='#' raised image={Programming} />
  </Link>    
  <Link to="/photopage">
    <Card style={{ padding: 10,margin: 30, width: 240}} href='#' raised image={Photo} />
  </Link>    
     
  
    </Card.Group>
)

export default CardExampleColumnCount
