import React from "react";
import { Link } from "react-router-dom";

function ProfilePages() {
  return (
    <>
      <h1> Profile Pages</h1>
      <Link to="Gena_Profile">Gena Profile</Link>
      <br/>
      <Link to="Klava_Profile">Klava Profile</Link>
    </>
  );
}


export default ProfilePages;


