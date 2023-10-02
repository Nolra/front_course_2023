import { loremIpsum } from "lorem-ipsum";
import React from "react";

function About() {
  return (
      <>
        <h1> About us </h1>
        <p>
          {loremIpsum({count: 5})}
          <br/><br/>
          {loremIpsum({count: 5})}
        </p>
      </>
  );
}


export default About;


