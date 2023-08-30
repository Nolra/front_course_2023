import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
    return (
      <input ref={ref} />
    )
  } 
);

export default Input;