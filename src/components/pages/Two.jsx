import { loremIpsum } from "lorem-ipsum";
import React from "react";

function PageTwo({index}) {
  return (
      <>
        <h1> Page {index} </h1>
        <p>
          {loremIpsum({count: 5})}
        </p>
      </>
  );
}


export default PageTwo;


