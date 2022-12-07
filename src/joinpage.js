import React from 'react';
import {Button, Image} from 'semantic-ui-react'

import Category from "./category.js"
import Search from "./search.js"
import Loginlink from "./loginlink.js"

import Sharetech from "./img/sharetechlogo.png"

const JoinPage = () => (
    <div>
      <div style={{width: '100%' , background: 'white', position: 'fixed', zIndex: 100}}>
      <Loginlink style={{display: 'inline-block'}}/>
      <Image src = {Sharetech} width="200" style={{display: 'inline-block', marginLeft: 50}}/>
      <Search style={{display: 'inline-block'}}/>
      <Category position='middle'/>
      </div>
      <h1>test</h1>
    </div>

    )
export default JoinPage
