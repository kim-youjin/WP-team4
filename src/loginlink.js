import React from 'react'
import {Button} from 'semantic-ui-react'
import { Link, Routes, Route,BrowserRouter } from "react-router-dom";

import LoginPage from './loginpage';
import JoinPage from './joinpage';


const Loginlink = () => (
  // <BrowserRouter>
  <div style={{marginTop: 30, marginRight: 30}}>

    <Button.Group basic position='right'>
        <Link to="/loginpage"><Button>Login</Button></Link>
        <Link to="/joinpage"><Button>Join</Button></Link>
      </Button.Group>

      {/* <Routes>
        <Route path="/loginpage" element={< LoginPage />}></Route>
        <Route path="/joinpage" element={< JoinPage />}></Route>
      </Routes> */}

  </div>
  // </BrowserRouter>
)

export default Loginlink
