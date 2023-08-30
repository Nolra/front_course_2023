import { useRef } from "react";

const Button = ({focusHandler}) => <button onClick={focusHandler}>focus the input!</button>;

export default Button;