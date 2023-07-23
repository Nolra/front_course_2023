import React from "react";


const Card = ({ children }) => {

  return (
    <>
      <div style={{color: "red"}}>
        { children }
      </div>
    </>
  )
}

export default Card;