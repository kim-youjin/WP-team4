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
            <b>1. 프로크리에이트의 핵심 사용법을 배워보아요.</b><br/>
            일러스트 툴 '프로크리에이트'를 써본 적 없어도 괜찮아요. <br/>
            기본 설정과 인터페이스부터 수업에 필요한 필수적인 기능을 알려드립니다. <br/>
            핵심 기능을 먼저 배우고 나면, 수업을 들으면서 큰 어려움 없이 예쁜 일러스트를 그려볼 수 있습니다.<br/><br/>
            <b>2. 기본기가 없어도 쉽게 라이브 일러스트를 완성해봐요.</b> <br/>
            화려한 테크닉이나, 전문 지식이 없어도 괜찮아요. <br/>
            약간의 애니메이팅 효과만으로도 내 그림을 더욱 생동감 있고 분위기 있게 만들 수 있습니다. <br/>
            기초 이론부터 소품, 캐릭터, 애니메이팅의 단계별 과정으로 풀 일러스트를 완성해 보세요.<br/>
        </p>

        
        <Divider/>

        </div>

        );
}

export default VideoPage;