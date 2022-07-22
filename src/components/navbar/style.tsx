import styled from "styled-components";

export const Anchor = styled('a')`
  min-width: 8rem;
  min-height: 2rem;
  color: #ffd841;
  font-weight: bold;
  line-height: 2rem;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  transition: all 0.25s ease;
  background-color: #ffffff;
  
  @media(max-width: 800px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  &:hover {
    color: #f2b542;
    background-color: #f9f9f9;
  }
`;

export const Container = styled('div')`
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  height: 10rem;
  z-index: 1000;
  position: fixed;
  align-items: center;
  background-color: #60c0ef;
  justify-content: space-around;

  @media(max-width: 800px) {
    height: 15rem;
    flex-direction: column;
  }
`;

export const Logo = styled('img')`
  width: 25rem;
  height: 25rem;

  @media(max-width: 800px) {
    width: 20rem;
    height: 20rem;
  }
`;
