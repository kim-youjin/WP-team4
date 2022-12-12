import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Divider } from 'semantic-ui-react'
import { loginUser } from '../../../_actions/user_action'
import { Link, Routes, Route,BrowserRouter, useNavigate } from "react-router-dom";

function LoginPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            email: Email,
            password: Password
        }

        dispatch(loginUser(body))
        .then(response => {
            if(response.payload.loginSuccess) {
                navigate('/')
            } else {
                alert('Error')
            }
        }) 
    }

    return (
      <div class="login-page">
      <div class="ui centered grid container">
        <div class="nine wide column" >
          <div class="ui fluid card" style={{padding: '10px'}}>
            <div class="content">
            <form class="ui form" onSubmit = {onSubmitHandler} method="POST">
              <div class="field">
                <label style={{color: "green", fontSize: 25, marginBottom: '40px'}}>Login</label>
              </div>


              <div class="field">
                <label style={{color: "green", fontSize: 17, marginBottom: '10px'}}>ID</label>
                <input type="email" value={Email} onChange={onEmailHandler} name="id" placeholder="Email" style={{marginBottom: '20px'}} required/>
              </div>


              <div class="field">
                <label style={{color: "green", fontSize: 17, marginBottom: '10px'}}>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} name="pass" placeholder="Password" style={{marginBottom: '20px'}} required/>
              </div>


              <Button class="ui primary labeled icon button" type="submit" style={{color: "green", marginTop: '10px', marginBottom: '20px'}}>
                <i class="unlock alternate icon"></i>
                Login
              </Button>
              <Divider/>
              <div style={{color: "gray", fontSize: 15, marginBottom: '10px'}}>
                <p style={{display: 'flex' ,justifyContent:'center'}}> 계정이 없으신가요?</p>
                <p style={{display: 'flex' ,justifyContent:'center'}}><Link to="/registerpage" style={{color: "green"}}>회원가입</Link></p>
                
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default LoginPage