import React from 'react'
import { Button, Form, Checkbox, Divider } from 'semantic-ui-react'
import { Link, Routes, Route,BrowserRouter } from "react-router-dom";

function JoinPage() {
  return (
    <div class="join-page">
      <div class="ui centered grid container">
        <div class="nine wide column" >
          <div class="ui fluid card" style={{padding: '10px'}}>
            <div class="content">
            <Form class="ui form" method="POST">
            <div class="field">
                <label style={{color: "green", fontSize: 28, marginBottom: '45px'}}>Join</label>
              </div>
              <div class="field">
                <label style={{color: "green", fontSize: 17, marginBottom: '10px'}}>이름</label>
                <input type="text" name="name" placeholder="이름" style={{marginBottom: '15px'}}/>
              </div>              
              <div class="field">
                <label style={{color: "green", fontSize: 17, marginBottom: '10px'}}>ID</label>
                <input type="text" name="id" placeholder="id" style={{marginBottom: '15px'}}/>
              </div>
              <div class="field">
                <label style={{color: "green", fontSize: 17, marginBottom: '10px'}}>비밀번호</label>
                <input type="password" name="password" placeholder="****" style={{marginBottom: '15px'}}/>
              </div>
              <div class="field">
                <label style={{color: "green", fontSize: 17, marginBottom: '10px'}}>비밀번호 확인</label>
                <input type="password" name="password" placeholder="****" style={{marginBottom: '15px'}}
                error={{ content: '비밀번호가 다릅니다.' }}/>
              </div>
              <Form.Field
                control={Checkbox}
                label={<label style={{color: "green", fontSize: 15, marginBottom: '20px'}}>로봇이 아닙니다.</label>}
              />
              <Button class="ui primary labeled icon button" type="submit" style={{color: "green", marginBottom: '15px'}}>
                계정 생성하기
              </Button>

              <Divider/>

              <div style={{color: "gray", fontSize: 15, marginBottom: '10px'}}>
                <p style={{display: 'flex' ,justifyContent:'center'}}> 이미 계정이 있으십니까?</p>
                <p style={{display: 'flex' ,justifyContent:'center'}}><Link to="/loginpage" style={{color: "green"}}>로그인</Link></p>
                
              </div>

            </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
);
}
export default JoinPage;
