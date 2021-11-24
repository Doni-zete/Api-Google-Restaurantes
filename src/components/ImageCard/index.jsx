import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
width:90px;
height:90px;
border-radius:6px;
background-image: url(${(props) => props.photo});
background-size:cover;
`;

const Title =styled.span`
font-family:${(props)=>props.theme.fonts.regular}
color: #ffffff;
font-size:16px;
margin:30px;
`;

const ImageCard = ({ photo }) => (
  <Card photo={photo}>
    <Title>Nome do Restaurante</Title>
  </Card>
);
export default ImageCard;
