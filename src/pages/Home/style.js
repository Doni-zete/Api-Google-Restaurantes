import styled from "styled-components";
export const Container = styled.aside`
background-color:${(props) => props.theme.colors.background};
width:360px;
height: 100vh;
overflow-y:auto;
`;

export const Search = styled.section`
display: flex;
flex-direction: column;
justify-center:center;
background-color: #ffffff;
padding:16px;
`