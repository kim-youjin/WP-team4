import React from 'react';
import { Image, Feed, Divider,Header, Embed } from 'semantic-ui-react'
// import Drawing1 from "./img/ipaddrawing.jpg"
// import DrawingVideo from "./img/drawing1.mp4"
import Profile from "../../../img/profile.png"

function VideoPage() {
    return (
        <div style={{marginLeft:'230px', marginRight:'360px'}}>
        <Header as='h1' style={{fontSize: 40,color: 'green',marginTop: "10px",marginBottom: "30px"}}>
        아이패드 드로잉
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

        <Embed
            id='193251592'
            placeholder='/images/vimeo-example.jpg'
            source='vimeo'
        />

        <Header as='h3' dividing style={{fontSize: 25, color: 'green',marginTop: "30px",marginBottom: "30px"}}>
        커리큘럼
        </Header>
        <p>
            1.<br/>
            2.<br/>
        </p>

        
        <Divider/>

        </div>

        );
}

export default VideoPage;