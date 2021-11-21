import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import { Container, Search, Logo, Wrapper, Map, CarouselTitle } from './style';


const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,

  }
  return (

    <Wrapper>

      <Container>
        <Search>
          <Logo src={logo} alt="Logo do restaurante" />
          <TextField
            label='Pesquisar Restaurantes'
            outlined
            //helperText={<HelperText>Help Me!</HelperText>}

            trailingIcon={<MaterialIcon role="button" icon="search" />}
          ><Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)} />
          </TextField>
          <CarouselTitle>Na sua Área</CarouselTitle>
        </Search>
      </Container>
      <Map />
    </Wrapper>
  );
};
export default Home;