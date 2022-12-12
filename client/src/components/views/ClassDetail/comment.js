import React from 'react';
import { Image, Card, Icon, Button, Divider, Comment, Form, Header } from 'semantic-ui-react'
import Profile from "../../../img/profile.png"
import moment from 'moment/moment';

function SingleComment (detail) {
    return(<Comment>
        <Comment.Avatar src={Profile} />
        <Comment.Content>
            <Comment.Author as='a'>20101213</Comment.Author>
            <Comment.Metadata>
            <div>{detail.info.time}</div>
            </Comment.Metadata>
            <Comment.Text>{detail.info.content}</Comment.Text>

        </Comment.Content>
        </Comment>)
    
}

class Comments extends React.Component{

constructor(){
    super()
    this.state={
        inputContent : "",
        commentsList: []

    }
}

    render() { 
        console.log(this.state.commentsList)
        return(<Comment.Group>
    <Header as='h3' dividing style={{fontSize: 25, color: 'green',marginTop: "50px"}}>
      수강 후기
    </Header>

    {this.state.commentsList.map(comments => 
    <SingleComment info={comments}/>
    )}

    <Form reply>
      <Form.TextArea value={this.state.inputContent} placeholder={"수강후기를 입력해주세요!"} onChange={(e)=>this.setState({inputContent : e.target.value})}/>
      <Button content='수강 후기 작성' labelPosition='left' icon='edit' primary 
      style={{fontSize: 20, backgroundColor: 'green', color: "White", width: '300px',marginBottom: "50px"}}
      onClick = {()=> 
      this.setState((prevState)=>{ 
        return{
            commentsList : [...prevState.commentsList, 
                {content: this.state.inputContent,
                    time: moment().format("YYYY년 MM월 DD일 HH시 mm분 ss초"),
                }],
            inputContent: ""
                };
            })
        }/>
    </Form>
    </Comment.Group>)
    }
    
    }
    export default Comments;