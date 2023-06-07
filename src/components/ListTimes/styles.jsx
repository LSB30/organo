import styled from "styled-components";

export const Container = styled.div``;

export const Label = styled.label`
  color: #212121;
  font-size: clamp(1rem, 1, 8rem, 2rem);
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
`;

export const Select = styled.select`
  max-width: 93rem;
  width: 100%;
  height: 8rem;
  margin-top: 0.8rem;
  margin-bottom: 3.9rem;
  padding: 2rem;
  border: none;
  border-radius: 0px;
  outline: none;

  background-color: #ffff;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  
`;
