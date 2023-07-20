import React from "react";
import UserInfo from "./UserInfo";

const Comment = ({ 
  userInfo, 
  text, 
  date
}) => {
  return (
    <div className="comment">
      <UserInfo {...userInfo} />
      <div className="comment-text">{text}</div>
      <div className="comment-date">{date}</div>
    </div>
  )
}

export default Comment;