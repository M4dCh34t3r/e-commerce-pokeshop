import styled from "styled-components";

export const EntryButton = styled('button')`
  border: none;
  height: 2rem;
  margin: 0.5rem;
  color: #f2b542;
  font-weight: bold;
  border-radius: 5px;
  transition: all 0.25s ease;
  background-color: #ffffff;

  @media(max-width: 800px) {
    width: 50%;
  }

  &:hover {
    color: #d78c42;
    background-color: #e6e6e6;
  }
`;

export const EntryLabel = styled('label')`
  margin: 0.5rem;
  color: #ffffff;
  font-weight: bold;
  font-size: 1.25rem;
  text-align: center;
`;

export const EntryWrapper = styled('div')`
  margin: auto;
  width: 87.5%;
  display: flex;
  margin-top: 2rem;
  min-height: 4rem;
  border-radius: 5px;
  align-items: center;
  background-color: #f2b542;
  justify-content: space-evenly;

  @media(max-width: 800px) {
    flex-direction: column;
  }
`;

export const MessageInput = styled('input')`
  width: 50%;
  border: none;
  z-index: 1500;
  height: 1.5rem;
  margin: 0.5rem;
  border-radius: 5px;
  
  @media(max-width: 800px) {
    width: 75%;
  }
`;

export const NameInput = styled('input')`
  border: none;
  z-index: 1500;
  height: 1.5rem;
  margin: 0.5rem;
  border-radius: 5px;
`;
