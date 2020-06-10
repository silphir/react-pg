import styled from "styled-components";

export const StButton = styled.button`
padding: 5px 15px;
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
export const StButtonMd = styled(StButton)`
font-size: 1.5rem;
padding: 5px 20px;
`;
export const StButtonLg = styled(StButton)`
font-size: 2rem;
padding: 5px 30px;
`;
