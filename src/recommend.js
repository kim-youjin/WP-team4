import React from 'react'
import { Card } from 'semantic-ui-react'

import Drawing from "./img/drawing.png"
import Music from "./img/music.png"
import Programming from "./img/programming.png"
import Photo from "./img/photo.png"

// const src1 = "./img/banner1.png"
// const src2 = "./img/banner1.png"
// const src3 = "./img/banner1.png"
// const src4 = "./img/banner1.png"

const CardExampleColumnCount = () => (
  <Card.Group style={{width: 1200, margin: '0 auto'}} itemsPerRow={4} >
    <Card style={{ padding: 10,margin: 30, width: 240}} href='#' raised image={Drawing} />
    <Card style={{ padding: 10,margin: 30, width: 240}} href='#' raised image={Music} />
    <Card style={{ padding: 10,margin: 30, width: 240}} href='#' raised image={Programming} />
    <Card style={{ padding: 10,margin: 30, width: 240}} href='#' raised image={Photo} />

  </Card.Group>
)

export default CardExampleColumnCount
