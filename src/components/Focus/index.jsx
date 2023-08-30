import { useRef } from "react";
import Input from "./Input";
import Button from "./Button";


const Form = () => {
  const inputRef = useRef(null);

  const focusHandler = () => {
    inputRef.current.focus();
  }

  return (
    <>
      <Input ref={inputRef} />
      <Button focusHandler={focusHandler} />
    </>
  )
}

export default Form;