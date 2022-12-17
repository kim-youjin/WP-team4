import React from "react";
import { useEffect, useState } from "react";
import PostItem from "./PostItem"
const PostList = () => {

    const [posts, setPosts] = useState([]);

     // 1. 
  async function getPosts() {
    const response = await fetch("http://localhost:5000/posts");

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    // 2.
    const postlist = await response.json();
    setPosts(postlist);
  }

  useEffect(() => {
    getPosts();
  }, []);
  

  // 3.
  const postItems = posts.map((post, idx) => (
    <PostItem post={post} key={idx}  style={{height:'40px',margin:'10px'}}/>
  ));
  return (
    <div className="container mb-3" style={{position: 'center', width: '900px'}}>
      <h1 className="mb-3" style={{color: "green"}}>수강 후기</h1>
      <table className="board-table table table-sm border-bottom" style={{marginTop:'35px'}}>
        <thead className="thead-light">
          <tr style={{lineHeight:'40px'}}>
            <th scope="col" style={{color: "green", fontSize:18}}>&nbsp;&nbsp;&nbsp;강의명</th>
            <th scope="col" className="date" style={{color: "green", fontSize:18}}>
              작성일
            </th>
          </tr>
        </thead>
        <tbody>
            {postItems}
        </tbody>
      </table>
      <div>
        <a className="btn btn-primary" href="/posts/new"
        style={{fontSize: 19, backgroundColor: 'green', color: "White", width: '150px',marginTop: "20px"}}>
          글쓰기
        </a>
      </div>
    </div>
  );
};

export default PostList;