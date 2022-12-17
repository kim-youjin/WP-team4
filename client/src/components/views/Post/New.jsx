import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const New = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    // fetch에 옵션 지정하여 서버에 요청을 전달한다.
    await fetch(`http://localhost:5000/posts/`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // 수정 후 이전페이지로 돌아가기
    navigate(`/posts/`);
  }

  return (
    <div className="container mb-3" style={{position: 'center', width: '900px'}}>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb p-1 pl-2 pr-2" style={{marginBottom:'20px'}}>
          <li className="breadcrumb-item">
            <a href="/" style={{color: "green"}}>SHARETECH</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/posts" style={{color: "green"}}>수강 후기</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            글쓰기
          </li>
        </ol>
      </nav>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title"
          style={{color: "green", fontSize: 25, marginTop: '40px', marginBottom: '20px'}}><b>강의명</b></label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            value={form.title}
            onChange={(e) => updateForm({ title: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="content"
          style={{color: "green", fontSize: 25, marginTop: '40px', marginBottom: '20px'}}><b>강의 후기</b></label>
          <textarea
            id="content"
            name="content"
            rows="7"
            className="form-control"
            value={form.content}
            onChange={(e) => updateForm({ content: e.target.value })}
          ></textarea>
        </div>
        <div>
          <a className="btn btn-primary" href={`/posts/`}
          style={{fontSize: 18, backgroundColor: 'green', color: "White", width: '100px',marginTop: "20px", marginRight: "20px"}}>
            취소
          </a>
          <button type="submit" className="btn btn-primary"
          style={{fontSize: 18, backgroundColor: 'green', color: "White", width: '100px',marginTop: "20px"}}>
            등록
          </button>
        </div>
      </form>
    </div>
  );
};

export default New;