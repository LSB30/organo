import styled from "styled-components";

export const ButtonArea = styled.button`
  background-color: #6278f7;
  border: none;
  outline: none;
  border-radius: 10px;
  width: 16.7rem;
  height: 8rem;
  margin-bottom: 3.2rem;
  cursor: pointer;
  transition: background 1s linear;

  > p {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 700;
    font-family: "Montserrat", sans-serif;
  }

  &:hover {
    background-color: #95ffd4;
  }

  &:hover p {
    color: #6278f7;
  }
`;
