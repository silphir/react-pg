import styled from "styled-components";

export const Button = styled.button`
  padding: 7px 15px;
  font-size: 1rem;
  color: #fff;
  border: solid 0px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #006188;
  &:hover {
    background-color: #0097d3;
  }
`;
export const ButtonXs = styled(Button)`
  padding: 5px 10px;
  font-size: 0.7rem;
`;
export const ButtonSm = styled(Button)`
  padding: 6px 12px;
  font-size: 0.85rem;
`;
export const ButtonLg = styled(Button)`
  padding: 8px 18px;
  font-size: 1.25rem;
`;
export const ButtonXl = styled(Button)`
  padding: 9px 25px;
  font-size: 1.5rem;
`;
