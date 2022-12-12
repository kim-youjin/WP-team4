import React from 'react';
// import {Image} from 'semantic-ui-react'
import Banner1 from "../../../img/banner1.png"
import Banner2 from "../../../img/banner2.png"
import './bannerslide.css';

const EventBanner = () => (

    <div class="section">
      <input type="radio" name="slide" id="slide01" checked/>
      <input type="radio" name="slide" id="slide02"/>

      <div class = "slidewrap">

        <ul class="slidelist">
          <li>
            <a href="#!">
              <label for="slide02" class="left"></label>
              <img src = {Banner1} alt="banner1" />
              <label for="slide02" class="right"></label>
            </a>
          </li>

          <li>
            <a href="#!">
              <label for="slide01" class="left"></label>
              <img src = {Banner2} alt="banner2" />
              <label for="slide01" class="right"></label>
            </a>
          </li>

        </ul>
      </div>

    </div>

)
export default EventBanner;
