import React from "react";

const Button = ({ onClickHandler, children }) => {

  return (
    <button onClick={onClickHandler}>
      {children}
    </button>
  )
}

export default Button;