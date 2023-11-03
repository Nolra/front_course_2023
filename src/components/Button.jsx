import styled, { keyframes, css } from "styled-components";

const Button = ( {onClick, mode, fontStyles} ) => {
  // как будто из стора взяли через setSelector
  // const mode = 'light'; // а может быть еще light

  return <StyledButton $mode={mode} onClick={onClick} $fontStyles={fontStyles} >Это кнопка</StyledButton>
}

export default Button;

const fade = keyframes`
  from { opacity: 1 }
  to { opacity: 0 }
`;

const fontStyles = css`
  font-size: 20px;
  line-height: 30px;
  font-weight: bold;
`;

const StyledButton = styled.button`
  margin: 20px;
  padding: 10px 20px;
  background: ${(props) => props.$mode === 'dark' ? '#000' : '#fff'};
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  &:hover {
    background: #000;
    color: #fff;
  }
  &:active {
    background: #gray;
    color: #fff;
  }
  animation: ${fade} 2s linear infinite alternate;
  ${fontStyles}
`;
