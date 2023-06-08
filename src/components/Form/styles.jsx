import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  max-width: 111rem;
  width: 100%;
  border-radius: 2rem;
  box-shadow: 7px 7px 15px rgba(0, 0, 0, 0.08);
  margin: 3.3rem auto;
  background: #f7f7f7;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const FormContainer = styled.form`
  padding-top: 3.3rem;
  margin: 0 9.5rem;
  display: flex;
  flex-direction: column;

  > h2 {
    text-align: center;
    font-size: clamp(1rem, 3.2rem, 4rem);
    font-weight: 400;
    font-family: "Prata", serif;
    margin-bottom: 8rem;
  }
`;

export const DivH2 = styled.div`
  text-align:center;
`;

export const SubTitle = styled.h2`
  display: inline-block;
  color: #6278F7;
  font-family: 'Prata';
  font-size: 4rem;
  font-weight: 400;
  border-bottom: 4px solid #6278F7;
  margin-bottom: 5rem;
`;


