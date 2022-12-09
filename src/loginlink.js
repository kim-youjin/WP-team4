import React from 'react'
import {Button} from 'semantic-ui-react'
import { Link, Routes, Route,BrowserRouter } from "react-router-dom";

import LoginPage from './loginpage';
import JoinPage from './joinpage';


const Loginlink = () => (
  // <BrowserRouter>
  <div style={{marginTop: 30, marginRight: 30}}>

    {/* <Button.Group basic position='right' style={{color: 'green'}}> */}
        <Link to="/loginpage">
        <Button class="ui primary labeled icon button" type="submit" style={{backgroundColor: 'white', color: "green", marginTop: '10px', marginBottom: '20px'}}>
                <i class="unlock alternate icon"></i>
                Login
              </Button></Link>
        <Link to="/joinpage"><Button class="ui primary labeled icon button" type="submit" style={{backgroundColor: 'white', color: "green", marginTop: '10px', marginBottom: '20px'}}>
                join
              </Button></Link>
              <Link to="/joinpage"><Button class="ui primary labeled icon button" type="submit" style={{backgroundColor: 'white', color: "green", marginTop: '10px', marginBottom: '20px'}}>
                수강 목록
              </Button></Link>
      {/* </Button.Group> */}

      {/* <Routes>
        <Route path="/loginpage" element={< LoginPage />}></Route>
        <Route path="/joinpage" element={< JoinPage />}></Route>
      </Routes> */}

  </div>
  // </BrowserRouter>
)

export default Loginlink
