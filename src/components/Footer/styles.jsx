import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 15rem;
  background-color: #6278f7;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem;

  > p {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 2rem;
    color: #fff;
  }
`;

export const ListSocial = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 3.4rem;
`;

export const SocialItems = styled.li`
  cursor: pointer;

  > img {
    max-width: 3rem;
    width: 100%;
  }
`;


