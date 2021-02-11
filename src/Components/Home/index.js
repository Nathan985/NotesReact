import React from 'react';
import BannerImg from '../../img/App.png'
import { 
  Container,
  Banner,
  Context
} from './styles';
import NavBar from '../NavBar';
function Home() {
  return (
    <Container>
        <NavBar />
        <Context>
          <h1>Preview App</h1>
          <Banner src={BannerImg} />
        </Context>
    </Container>
  );
}

export default Home;