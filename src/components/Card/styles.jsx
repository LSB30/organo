import styled from "styled-components";
export const Container = styled.div`
  max-width: 26.2rem;
  width: 100%;
  height: 27.2rem;
  background-color: #ffffff;
  border-radius: 1rem;
  position: relative;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
`;

export const Header = styled.header`
  height: 9.9rem;
  margin-bottom: 7.8rem;
  border-radius: 10px 10px 0px 0px;
  background-color: #d8d8d8;
  position: relative;
  > img {
    position: absolute;
    max-width: 12rem;
    border-radius: 99rem;
    left: 27.1%;
    right: 27.1%;
    top: 14.85%;
    bottom: 40.59%;
  }

  > svg {
    position: absolute;
    right: 0;
    margin-right: 1rem;
    margin-top: 2rem;
    color: #fff;
    cursor:pointer;
    transition: transform 1s linear;

    &:hover {
      transform: translateY(-10%)
    }
  }
`;

export const Details = styled.div``;

export const NameCollaborator = styled.h4`
  color: #6278f7;
  font-family: "Montserrat", sans-serif;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
`;

export const CargoCollaborator = styled.h5`
  color: #212121;
  font-family: "Montserrat", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
`;
