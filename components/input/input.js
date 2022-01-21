import styled from "styled-components";

const Input = styled.input`
  min-height: 20px;
  min-width: 300px;
  border-radius: 25px;
  padding: 12px;
  border: ${(props) => (props.isError ? "red" : "grey")} 1px solid;
  background-color: ${(props) => (props.isError ? "red" : "white")};

  :hover {
    background: peach;
  }
`;

export default Input;
