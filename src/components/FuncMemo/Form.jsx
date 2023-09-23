import React, { useState, memo } from "react";

const Form = memo(function ({ handleSubmit }) {
  const [orderDetails, setOrderDetails] = useState({});

  return (
      <>
        <input />
        <input />
        <input />
        <button onClick={() => handleSubmit(orderDetails)}></button>
      </>
  );
});


export default Form;


