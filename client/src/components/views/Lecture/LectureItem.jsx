import React from "react";
import Lecture01 from "../../../img/lecture1.png"


const LectureItem = (props) => {
    console.log(props);
    const { lecture } = props;

  return (
        <a href={`/lectures/${lecture._id}`}>
          <div>
            <img src={Lecture01} alt="" width="300px"/>
            <h3>{lecture.title}</h3>
          </div>
        </a>
  );
};

export default LectureItem;