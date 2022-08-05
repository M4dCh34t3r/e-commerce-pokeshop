import styled from "styled-components";

export const CardWrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const MessageAuthor = styled('h1')`
  width: 100%;
  height: 4rem;
  color: #ffffff;
  text-align: left;
  line-height: 4rem;
  border-radius: 5px;
  text-align: center;
  background-color: #eb2848;
`;

export const MessageCard = styled('div')`
  width: 75%;
  height: 15rem;
  display: grid;
  border-radius: 5px;
  grid-template-rows: 30% 55%;
`;

export const MessageText = styled('h3')`
  width: 100%;
  height: 8rem;
  border-radius: 5px;
  text-align: center;
  background-color: #f0f0f0;
`;

export const MessageDate = styled('h4')`
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  background-color: #f9f9f9;
`;
