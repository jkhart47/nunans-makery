//components/Header/styles.ts

import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  background: #009999;
  height: 100px;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  font-size:1.5em;
  color: #fff;
`;

export const TitleContainer = styled.div`
  margin: auto;
`
export const IconContainer = styled.div`
  padding: 10px;
  cursor: pointer;

  & svg {
    height: 30px;
  }
`;