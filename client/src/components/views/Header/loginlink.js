import React , { useEffect } from 'react';
import { useSelector } from "react-redux";
import {Button} from 'semantic-ui-react'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { logoutUser } from "../../../_actions/user_action";

function Loginlink () {

  const user = useSelector(state => state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(logoutUser())
      .then((res) => {
        console.log(res);
        if (res.payload.success) {
          navigate("/loginpage");
        } else {
          alert("로그아웃에 실패하였습니다");
        }
      })
      .catch((err) => console.log(err));
  };

  if (user.userData && !user.userData.isAuth) {
  return (
    <div style={{marginTop: 30, marginRight: 30}}>
          <Link to="/LoginPage">
          <Button class="ui primary labeled icon button" type="submit" style={{backgroundColor: 'white', color: "green", marginTop: '10px', marginBottom: '20px'}}>
                  <i class="unlock alternate icon"></i>
                  Login
                </Button></Link>
          <Link to="/RegisterPage"><Button class="ui primary labeled icon button" type="submit" style={{backgroundColor: 'white', color: "green", marginTop: '10px', marginBottom: '20px'}}>
                  join
                </Button></Link>
                
    </div>
  )
  } else {
    return(
    <div style={{marginTop: 30, marginRight: 30}}>
                <Button class="ui primary labeled icon button" onClick={onClickHandler} type="submit" style={{backgroundColor: 'white', color: "green", marginTop: '10px', marginBottom: '20px'}}>
                <i class="unlock alternate icon"></i>
                  Logout
                </Button>
    </div>)
  }
} 

export default Loginlink
