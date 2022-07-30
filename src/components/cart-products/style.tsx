import styled from "styled-components"

export const AddButton = styled('button')`
  width: 2rem;
  height: 2rem;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  background-color: #60c0ef;
`;

export const RemoveButton = styled('button')`
  width: 2rem;
  height: 2rem;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  background-color: #eb2848;
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
  border-radius: 5px;
  align-items: center;
  background-color: #ffffff;
`;

export const ProductImage = styled('img')`
  width: 4rem;
  height: 4rem;
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
