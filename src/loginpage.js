import React from 'react'
import { Button,Divider, Form } from 'semantic-ui-react'
import { Link, Routes, Route,BrowserRouter } from "react-router-dom";

function LoginPage() {
  return (
    <div class="login-page">
      <div class="ui centered grid container">
        <div class="nine wide column" >
          <div class="ui icon warning message" style={{color: "green", marginBottom:'30px'}}>
              <i class="lock icon"></i>
              <div class="content" style={{marginBottom: '15px', marginTop: '15px'}}>
                <div class="header" style={{color: "green"}}> 
                  로그인에 실패하였습니다 ㅠㅅㅠ
                </div>
                <p>ID 또는 Password를 잘못 입력하셨습니다.</p>
              </div>
            </div>
          <div class="ui fluid card" style={{padding: '10px'}}>
            <div class="content">
            <form class="ui form" method="POST">
              <div class="field">
                <label style={{color: "green", fontSize: 25, marginBottom: '40px'}}>Login</label>
              </div>
              <div class="field">
                <label style={{color: "green", fontSize: 17, marginBottom: '10px'}}>ID</label>
                <input type="text" name="id" placeholder="id" style={{marginBottom: '20px'}}/>
              </div>
              <div class="field">
                <label style={{color: "green", fontSize: 17, marginBottom: '10px'}}>Password</label>
                <input type="password" name="pass" placeholder="Password" style={{marginBottom: '20px'}}/>
              </div>
              <Button class="ui primary labeled icon button" type="submit" style={{color: "green", marginTop: '10px', marginBottom: '20px'}}>
                <i class="unlock alternate icon"></i>
                Login
              </Button>
              <Divider/>
              <div style={{color: "gray", fontSize: 15, marginBottom: '10px'}}>
                <p style={{display: 'flex' ,justifyContent:'center'}}> 계정이 없으신가요?</p>
                <p style={{display: 'flex' ,justifyContent:'center'}}><Link to="/joinpage" style={{color: "green"}}>회원가입</Link></p>
                
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
);
}
export default LoginPage;
