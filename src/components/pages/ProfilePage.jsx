import React from "react";
import { useParams } from "react-router-dom";

function ProfilePage() {

  const params = useParams();
  console.log(params)


  return (
    <>
      <h1> Profile Pages</h1>
      <h2>{params.userId}</h2>
    </>
  );
}


export default ProfilePage;


