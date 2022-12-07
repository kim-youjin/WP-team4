import React from 'react'
import {Button} from 'semantic-ui-react'
import { Link, Routes, Route,BrowserRouter } from "react-router-dom";

import LoginPage from './loginpage';

const Loginlink = () => (
  <BrowserRouter>
  <div style={{marginTop: 30, marginRight: 30}}>

    <Button.Group basic position='right'>
        <Link to="loginpage"><Button>Login</Button></Link>
        <Button>Join</Button>
      </Button.Group>

      <Routes>
        <Route path="loginpage" element={< LoginPage />}></Route>
      </Routes>

  </div>
  </BrowserRouter>
)

export default Loginlink
