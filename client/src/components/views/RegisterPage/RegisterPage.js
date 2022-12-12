import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { Button, Form, Checkbox, Divider } from 'semantic-ui-react'
import { useNavigate, Link } from 'react-router-dom'
import { registerUser } from '../../../_actions/user_action'  


function RegisterPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [Name, setName] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")

  const onEmailHandler = (event) => {
      setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
      setPassword(event.currentTarget.value)
  }

  const onNameHandler = (event) => {
      setName(event.currentTarget.value)
  }

  const onConfirmPasswordHandler = (event) => {
      setConfirmPassword(event.currentTarget.value)
  }

  const onSubmitHandler = (event) => {
      event.preventDefault();

      if(Password !== ConfirmPassword) {
          return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
      }

      let body = {
          email: Email,
          password: Password,
          name: Name,
      }

      dispatch(registerUser(body))
      .then(response => {
          if(response.payload.success) {
            navigate('/loginpage')
          } else {
              alert('Failed to sign up')
          }
      }) 
  }

  return (
    <div class="join-page">
      <div class="ui centered grid container">
        <div class="nine wide column" >
          <div class="ui fluid card" style={{padding: '10px'}}>
            <div class="content">

            <Form class="ui form" method="POST" onSubmit = {onSubmitHandler}>
            <div class="field">
                <label style={{color: "green", fontSize: 28, marginBottom: '45px'}}>Join</label>
              </div>

              <div class="field">
                <label style={{color: "green", fontSize: 17, marginBottom: '10px'}}>이메일</label>
                <input type="email" value={Email} onChange={onEmailHandler} name="id" placeholder="이메일" style={{marginBottom: '15px'}}/>
              </div>

              <div class="field">
                <label style={{color: "green", fontSize: 17, marginBottom: '10px'}}>이름</label>
                <input type="text" value={Name} onChange={onNameHandler} name="name" placeholder="이름" style={{marginBottom: '15px'}}/>
              </div>           

              <div class="field">
                <label style={{color: "green", fontSize: 17, marginBottom: '10px'}}>비밀번호</label>
                <input type="password" value={Password} onChange={onPasswordHandler} name="password" placeholder="****" style={{marginBottom: '15px'}}/>
              </div>

              <div class="field">
                <label style={{color: "green", fontSize: 17, marginBottom: '10px'}}>비밀번호 확인</label>
                <input type="password" name="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} placeholder="****" style={{marginBottom: '15px'}}
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
  )
}

export default RegisterPage