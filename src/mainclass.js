import React from 'react';

import Recommend from "./recommend.js"
import Topclassslide from "./topclassslide.js"
import Newclassslide from "./newclassslide.js"
import Bannerslide from "./bannerslide.js"

const MainClass = () => (
    <div>
      <Bannerslide />
        <div>
        <p style={{margin: 30, fontSize: 30, textAlign: 'center'}}> 추천 카테고리 </p>
        <Recommend style={{display: 'inline-block'}} />
      </div>

      <div>
        <p style={{margin: 30, fontSize: 30, textAlign: 'center'}}> TOP 10 클래스 </p>
        <Topclassslide style={{display: 'inline-block'}} />
        <br/>
        <br/>
      </div>

      <div>
        <p style={{margin: 30, fontSize: 30, textAlign: 'center'}}> 인기있는 신규 클래스 </p>
        <Newclassslide style={{display: 'inline-block'}} />
        <br/>
        <br/>
      </div>

    </div>
    )

export default MainClass