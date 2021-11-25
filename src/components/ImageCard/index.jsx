import React from 'react';
import styled from 'styled-components';


const Card = styled.div`
display:flex;
justify-content:center;
width:90px;
height:90px;
padding:5px;
color: white;
border-radius:6px;
background-image: url(${(props) => props.photo});
background-size:cover;
`;

const Title = styled.span`
font-family:${(props) => props.theme.fonts.regular}
font-size:16px;

`;

const ImageCard = ({ photo }) => (
  <Card photo={photo}>
    <Title>Nome do Restaurante</Title>
  </Card>
);
export default ImageCard;
