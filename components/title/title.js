import styled from "styled-components";

const Title = styled.p`
  font-size: 5rem;
  font-weight: bold;

  :hover {
    color: ${(props) => props.customColor};
  }
`;

export default Title;
