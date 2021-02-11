import React from 'react';
import Header from '../Header'
import Notes from '../Notes'
import { Container } from './styles';

function App() {
  return (
    <Container>
        <Header Trash={false} />
        <Notes />
    </Container>
  );
}

export default App;