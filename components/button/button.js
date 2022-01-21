import styled from "styled-components";

const Button = styled.button`
  min-width: 5vw;
  min-height: 5vh;
  background-color: #b438d7;

  :disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`;

export default Button;
