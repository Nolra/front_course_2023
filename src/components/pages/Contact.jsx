import { loremIpsum } from "lorem-ipsum";
import React from "react";

function Contact() {
  return (
      <>
        <h1> Contact us </h1>
        <p>
          {loremIpsum({count: 5})}
          <br/><br/>
          {loremIpsum({count: 5})}
        </p>
      </>
  );
}


export default Contact;


