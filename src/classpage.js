import React from 'react';
import { Image, Card, Icon, Button, Label, Feed, Divider, Comment,Form,Header,Container } from 'semantic-ui-react'
//import './App.css';
import Slide1 from "./img/slide01.jpg"
import Slide2 from "./img/slide02.jpg"
import Slide3 from "./img/slide03.jpg"
import Slide4 from "./img/slide04.jpg"
import Profile from "./img/profile.png"

import { Link, Routes, Route,BrowserRouter } from "react-router-dom";

function ClassPage() {
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

            <Button class="ui primary labeled icon button" type="submit" 
            style={{fontSize: 25, backgroundColor: 'green', color: "White", width: '300px',marginTop: "50px"}}>
                수강 신청
              </Button>

        </div>

        <div style={{marginLeft:'230px', marginRight:'360px'}}>
        <Header as='h1' style={{fontSize: 40,color: 'green',marginTop: "10px",marginBottom: "30px"}}>
        강의 이름
        </Header>
            <Feed>
            <Feed.Event>
            <Feed.Label style={{width: "200"}}>
                <img src={Profile} style={{width: "200"}}/>
            </Feed.Label>
            <Feed.Content style={{fontSize: 20}}>
                이소흔 튜터
            </Feed.Content>
            </Feed.Event>
            <Divider/>
        </Feed>
        <Image src={Slide1} width="700"/>

        <Header as='h3' dividing style={{fontSize: 25, color: 'green',marginTop: "30px",marginBottom: "30px"}}>
        커리큘럼
        </Header>
        <p>
            1.<br/>
            2.<br/>
        </p>

        
        <Divider/>

        <Comment.Group>
    <Header as='h3' dividing style={{fontSize: 25, color: 'green',marginTop: "50px"}}>
      수강 후기
    </Header>

    <Comment>
      <Comment.Avatar src={Profile} />
      <Comment.Content>
        <Comment.Author as='a'>Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar src={Profile} />
      <Comment.Content>
        <Comment.Author as='a'>Elliot Fu</Comment.Author>
        <Comment.Metadata>
          <div>Yesterday at 12:30AM</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>This has been very useful for my research. Thanks as well!</p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src={Profile} />
          <Comment.Content>
            <Comment.Author as='a'>Jenny Hess</Comment.Author>
            <Comment.Metadata>
              <div>Just now</div>
            </Comment.Metadata>
            <Comment.Text>Elliot you are always so right :)</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Comment>

    <Comment>
      <Comment.Avatar src={Profile} />
      <Comment.Content>
        <Comment.Author as='a'>Joe Henderson</Comment.Author>
        <Comment.Metadata>
          <div>5 days ago</div>
        </Comment.Metadata>
        <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Form reply>
      <Form.TextArea />
      <Button content='수강 후기 작성' labelPosition='left' icon='edit' primary 
      style={{fontSize: 20, backgroundColor: 'green', color: "White", width: '300px',marginBottom: "50px"}}/>
    </Form>
    </Comment.Group>
        </div>
    </div>
    

  );
}

export default ClassPage;
