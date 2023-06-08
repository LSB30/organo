import styled from "styled-components";
import banner from "../../assets/fundo.png"


export const Container = styled.div`
  padding: 3.2rem;
  position: relative;
  text-align: center;
  background-image: url(${banner});
  
  > h3 {
    display: inline-block;
    font-family: "Prata", serif;
    font-size: 3.2rem;
    font-weight: 400;
    margin-bottom: 3.8rem;
    text-align: center;
    border-bottom: 4px solid #000
  }

`;

export const CardContainer = styled.section`
  display: flex;
  justify-content:space-around;
  flex-wrap: wrap;
  margin-top: 3.2rem;
`;

export const InputColor = styled.input`
  position: absolute;
  top: 2rem;
  right: 5rem;
`;

