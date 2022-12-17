import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { Image, Card, Icon, Button, Label, Feed, Divider, Comment,Form,Header,Container } from 'semantic-ui-react'
import { auth } from '../../../_actions/user_action';

import Lecture1 from "../../../img/lecture1.png"
import Profile from "../../../img/profile.png"

const LectureDetail = () => {
  const params = useParams();
  const [lecture, setLecture] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(auth())
      .then((res) => {
        console.log(res);
        if (!res.payload.isAuth) {
          alert("로그인이 필요합니다.");
          navigate("/loginpage");
        } else {
          navigate("/videopage");
        }
      })
      .catch((err) => console.log(err));
  };
  
  async function fetchData() {
    const id = params.id.toString();
    const response = await fetch(`http://localhost:5000/lectures/${id}`);
    if (!response.ok) {
      const message = `에러 : ${response.statusText}`;
      window.alert(message);
      return;
    }

    const lecture = await response.json();

    setLecture(lecture);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{}}>
            <div style={{ marginBottom: "100px", position: "fixed", right: "20px", bottom:"-50px", width:"20%" ,backgroundColor:'White'}}>
            <Card.Group>
            <Card fluid color='green' header='👤  초급자 대상 ' />
            <Card fluid color='green' header='👍  강의 만족도 97%' />
            <Card fluid color='green' header='💻  콘텐츠 이용권' />
            <Card fluid color='green' header='🎁  준비물 키트' />
        </Card.Group>
            <Button as='div' labelPosition='right' style={{ marginTop: "50px"}}>
                <Button icon style={{ backgroundColor: '#fff3ce', color: 'green'}}>
                <Icon name='heart' />
                Like
                </Button >
                <Label as='a' basic pointing='left'>
                2,048
                </Label>
            </Button>
            
            <Button as='div' labelPosition='left'>
                <Label as='a' basic>
                2,048
                </Label>
                <Button icon style={{backgroundColor: '#fff3ce', color: 'green'}}>
                <Icon name='fork' />
                </Button>
            </Button>

             <Button class="ui primary labeled icon button" type="submit"  onClick={onClickHandler}
              style={{fontSize: 25, backgroundColor: 'green', color: "White", width: '300px',marginTop: "50px"}}>
                수강하기
            </Button>
           

        </div>

        <div style={{marginLeft:'230px', marginRight:'360px'}}>
        <Header as='h1' style={{fontSize: 40,color: 'green',marginTop: "10px",marginBottom: "30px"}}>
        {lecture.title}
        </Header>
            <Feed>
            <Feed.Event>
            <Feed.Label style={{width: "200"}}>
                <img src={Profile} style={{width: "200"}}/>
            </Feed.Label>
            <Feed.Content style={{fontSize: 20}}>
                {lecture.tutor}
            </Feed.Content>
            </Feed.Event>
            <Divider/>
        </Feed>
        <Image src={Lecture1} width="700"/>

        <Header as='h3' dividing style={{fontSize: 25, color: 'green',marginTop: "30px",marginBottom: "30px"}}>
        커리큘럼
        </Header>
        <p>
            {lecture.detail}
        </p>

        
        <Divider/>

        </div>
    </div>

  );
};

export default LectureDetail;