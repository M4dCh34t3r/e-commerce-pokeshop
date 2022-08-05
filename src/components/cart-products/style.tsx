import styled from "styled-components"

export const AddButton = styled('button')`
  width: 2rem;
  border: none;
  font-size: 2rem;
  margin-top: 4rem;
  font-weight: bold;
  line-height: 2rem;
  border-radius: 5px;
  background-color: #60c0ef;
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: #268cbf;
  }
`;

export const RemoveButton = styled('button')`
  width: 2rem;
  border: none;
  font-size: 2rem;
  margin-top: 4rem;
  font-weight: bold;
  line-height: 2rem;
  border-radius: 5px;
  background-color: #eb2848;
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: #cc1424;;
  }
`;

export const ProductsWrapper = styled('div')`
  width: 50%;
  height: 100%;
  margin: auto;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  border-radius: 5px;
  background-color: #f2b542;
  justify-content: space-evenly;
`;

export const ProductCard = styled('div')`
  margin: 1rem;
  height: 6rem;
  display: grid;
  border-radius: 5px;
  background-color: #ffffff;
  grid-template-columns: 25% 50% 25%;
`;

export const ProductImage = styled('img')`
  width: 4rem;
  height: 4rem;
  margin-top: 1rem;
`;

export const ProductPrice = styled('div')`
  width: 6rem;
  height: 2rem;
  font-size: 2rem;
  font-weight: bold;
  line-height: 2rem;
  border-radius: 5px;
  position: absolute;
  text-align: center;
  border-style: solid;
  margin-top: -1.5rem;
  margin-left: 0.825rem;
  border-color: #f2b542;
  background-color: #ffffff;
`;

export const TotalPrice = styled('div')`
  width: 8rem;
  height: 4rem;
  font-size: 2rem; 
  position: fixed;
  color: #ffffff;
  font-weight: bold;
  line-height: 4rem;
  margin-right: 75%;
  border-radius: 5px;
  text-align: center;
  background-color: #d78c42;
`;
