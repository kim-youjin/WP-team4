import React from "react";

const PostItem = (props) => {
    const { post } = props;
  return (
    <tr>
      <td>
        <a href={`/posts/${post._id}`}>
          <div className="ellipsis" style={{marginTop:'10px',marginBottom:'10px'}}>
            <h5 style={{color: "#413F42", fontSize:16}}>&nbsp;&nbsp;&nbsp;{post.title}</h5></div>
        </a>
      </td>
      <td className="작성일">
        <div style={{color: "#413F42", marginTop:'10px',marginBottom:'10px', fontSize:16}}>{post.createdAt}</div>
      </td>
    </tr>
  );
};

export default PostItem;