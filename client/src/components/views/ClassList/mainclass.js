import React from 'react';

import Recommend from "./recommend.js"
import Bannerslide from "../BannerSlide/bannerslide.js"
import LectureList1 from "../Lecture/LectureList1"
import LectureList2 from '../Lecture/LectureList2.jsx';

const MainClass = () => (
    <div>
      <Bannerslide />
        <div>
        <p style={{margin: 30, fontSize: 30, textAlign: 'center'}}> 추천 카테고리 </p>
        <Recommend style={{display: 'inline-block'}} />
      </div>

      <div>
        <p style={{margin: 30, fontSize: 30, textAlign: 'center'}}> TOP 10 클래스 </p>
        <LectureList1 style={{display: 'inline-block'}}/>
        <br/>
        <br/>
      </div>

      <div>
        <p style={{margin: 30, fontSize: 30, textAlign: 'center'}}> 인기있는 신규 클래스 </p>
        <LectureList2 style={{display: 'inline-block'}} />
        <br/>
        <br/>
      </div>

    </div>
    )

export default MainClass