import React from "react";
import { loremIpsum } from "lorem-ipsum";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function PageOne({index}) {
  const location = useLocation(); // объект с информацией о том, где мы находимся (url и т.д)
  const navigate = useNavigate(); // програмный аналог компонента Link - когда нужно перекинуть юзера на другую страницу
  const params = useParams();
  

  console.log(params)



  return (
    <>
      <h1> Page {index} </h1>
      <p>
        {loremIpsum({count: 5})}
      </p>
    </>
  );
}


export default PageOne;


