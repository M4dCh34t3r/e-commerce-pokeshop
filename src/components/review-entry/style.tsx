import styled from "styled-components";

export const EntryButton = styled('button')`
  border: none;
  height: 2rem;
  color: #f2b542;
  font-weight: bold;
  border-radius: 5px;
  transition: all 0.25s ease;
  background-color: #ffffff;

  &:hover {
    color: #d78c42;
    background-color: #f0f0f0;
  }
`;

export const EntryLabel = styled('label')`
  color: #ffffff;
  font-weight: bold;
  font-size: 1.25rem;
`;

export const EntryWrapper = styled('div')`
  margin: auto;
  width: 87.5%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  min-height: 4rem;
  border-radius: 5px;
  align-items: center;
  background-color: #f2b542;
  justify-content: space-evenly;
`;

export const MessageInput = styled('input')`
  width: 50%;
  border: none;
  border-radius: 5px;
`;

export const NameInput = styled('input')`
  border: none;
  border-radius: 5px;
`;
