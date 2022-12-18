import React from "react";

const MyItem = (props) => {
    const { lecture } = props;
  return (
    <tr>
      <td>
        <a href={`/lectures/${lecture._id}`}>
          <div className="ellipsis" style={{marginTop:'10px',marginBottom:'10px'}}>
            <h5 style={{color: "#413F42", fontSize:16}}>&nbsp;&nbsp;&nbsp;{lecture.title}</h5></div>
        </a>
      </td>
      <td className="튜터">
        <div style={{color: "#413F42", marginTop:'10px',marginBottom:'10px', fontSize:16}}>{lecture.tutor}</div>
      </td>
    </tr>
  );
};

export default MyItem;