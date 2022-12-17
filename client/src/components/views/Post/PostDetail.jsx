import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";


const PostDetail = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  

  async function fetchData() {
    const id = params.id.toString();
    const response = await fetch(`http://localhost:5000/posts/${id}`);
    if (!response.ok) {
      const message = `An error has occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const post = await response.json();

    setPost(post);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mb-3" style={{position: 'center', width: '900px'}}>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb p-1 pl-2 pr-2" style={{marginBottom:'40px'}}>
          <li className="breadcrumb-item">
            <a href="/" style={{color: "green"}}>SHARETECH</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/posts" style={{color: "green"}}>수강생 게시판</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page" >
            {post.title}
          </li>
        </ol>
      </nav>
      <div className="card">
        <h5 className="card-header p-2" style={{color:'green', lineHeight:'40px', fontSize:20}}>&nbsp;&nbsp;&nbsp;{post.title}</h5>
        <div className="row">
          <div className="col-md-7 col-lg-8 col-xl-9 order-sm-2 order-md-1">
            <div className="post-body p-2" style={{height:'200px', fontSize:16, margin:'10px'}}>{post.content}</div>
          </div>

          <div className="col-md-5 col-lg-4 col-xl-3 order-sm-1 order-md-2">
            <div className="post-info card m-2 p-2">
              <div>
                <span>작성일</span> : <span>{post.createdAt}</span>
                <br />
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <a className="btn btn-primary" href="/posts"
        style={{fontSize: 19, backgroundColor: 'green', color: "White", width: '100px',marginTop: "20px", marginRight: "20px"}}>
          취소
        </a>
        <a className="btn btn-primary" href={`/posts/${post._id}/edit`}
        style={{fontSize: 19, backgroundColor: 'green', color: "White", width: '100px',marginTop: "20px"}}>
          수정</a>

      </div>
    </div>
  );
};

export default PostDetail;