import React from "react";
import { useEffect, useState } from "react";
import MyItem from "./MyItem"

const MyList = () => {

  const [lectures, setLectures] = useState([]);

  // 1. 
async function getLectures() {
 const response = await fetch("http://localhost:5000/lectures");

 if (!response.ok) {
   const message = `에러: ${response.statusText}`;
   window.alert(message);
   return;
 }

 const lecturelist = await response.json();
 setLectures(lecturelist);
}

useEffect(() => {
 getLectures();
}, []);
  

  // 3.
  const myItems = lectures.map((lecture, idx) => (
    <MyItem lecture={lecture} key={idx}  style={{height:'40px',margin:'10px'}}/>
  ));
  return (
    <div className="container mb-3" style={{position: 'center', width: '900px'}}>
      <h1 className="mb-3" style={{color: "green"}}>@@@님의 수강 목록</h1>
      <table className="board-table table table-sm border-bottom" style={{marginTop:'35px'}}>
        <thead className="thead-light">
          <tr style={{lineHeight:'40px'}}>
            <th scope="col" style={{color: "green", fontSize:18}}>&nbsp;&nbsp;&nbsp;강의명</th>
            <th scope="col" className="date" style={{color: "green", fontSize:18}}>
              튜터
            </th>
          </tr>
        </thead>
        <tbody>
            {myItems}
        </tbody>
      </table>
    </div>
  );
};

export default MyList;