import styled from "styled-components";

export const Label = styled.label`
  color: #212121;
  font-size: clamp(1rem, 1, 8rem, 2rem);
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
`;

export const InputArea = styled.input`
  margin-top: 0.8rem;
  margin-bottom: 3.9rem;
  padding: 2rem;
  max-width: 93rem;
  height: 8rem;
  width: 100%;
  border: none;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  background-color: #ffff;
  border-radius: 0px;
  outline: none;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));


  ::placeholder {
    font-size: clamp(0.8rem, 1, 6rem, 1.8rem);
    color: #a4a4a4;
    font-family: "Montserrat", sans-serif;
  }

  @media (max-width: 800px) {
    width: 30rem;
  }
`;
