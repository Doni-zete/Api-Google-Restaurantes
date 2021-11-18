import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import TextField, { Input } from '@material/react-text-field';
import { Container, Search } from './style';

const Home = () => {
  const [inputValue, setInputValue] = useState('cachorro');
  return (

    <Container>
      <Search>
        <img src={logo} alt="Logo do restaurante" />
        <TextField
          label='Pesquisar'
          //helperText={<HelperText>Help Me!</HelperText>}
          //onTrailingIconSelect={() => this.setState({ value: '' })}
        //trailingIcon={<MaterialIcon role="button" icon="delete"/>}
        ><Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}/>
        </TextField>
      </Search>
    </Container>
  );
};
export default Home;