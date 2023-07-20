import React from "react";

const UserInfo = ({ 
  userAvatar, userAltAvatar,
  username, nick 
}) => {
  return (
    <div className="user-info">
      <img src={userAvatar} alt={userAltAvatar}/>
      <div className="user-name">{username}</div>
      <div className="user-nick">{nick}</div>
    </div>
  )
}

export default UserInfo;