import { loremIpsum } from "lorem-ipsum";
import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
      <>
        <h1> Home Page </h1>
        <p>
          {loremIpsum({count: 5})}
          <br/><br/>
          {loremIpsum({count: 5})}
        </p>
        <ul>
          <li>
            <Link to="/test_repo/one">Page one</Link>
          </li>
          <li>
            <Link to="/test_repo/two">Page two</Link>
          </li>
        </ul>
      </>
  );
}


export default HomePage;


