import React from 'react';
import {Image} from 'semantic-ui-react'

import Sharetech from "./img/sharetechlogo.png"
import Category from "./category.js"
import Search from "./search.js"
import Loginlink from "./loginlink.js"
import { Link, Routes, Route,BrowserRouter } from "react-router-dom";

const Header = () => (
    <div>
    <div style={{position: 'fixed', zIndex: '1', background: 'white', width: "100%"}}>
    <div style={{display: 'flex', justifyContent: 'flex-start'}}>
    <Link to="/"><Image src = {Sharetech} width="200" style={{marginLeft: 50}}/></Link>
    <Search />
    <div style={{display: 'flex', marginLeft: 'auto'}}>
      <Loginlink/>
    </div>
  </div>
    <Category/>
  </div>
    </div>
    )

export default Header