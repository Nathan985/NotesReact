import React from 'react';

import { Container, Title, Body } from './styles';

function NoteBody({item}) {
  return (
    <Container
      onClick={() => {
        localStorage.setItem("Note", item.id);
        localStorage.setItem("NoteDelete", item.id);
        window.location.assign('/NoteEdit');
      }}
    >
        <Title>{item.Title}</Title>
        <Body>
          {item.Body}
        </Body>
    </Container>
  );
}

export default NoteBody;