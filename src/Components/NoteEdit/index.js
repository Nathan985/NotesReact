import React, {useState} from 'react';

import { Container } from './styles';

import Header from '../Header';
import Edit from '../Edit';

const noteid = localStorage.getItem('Note');

function NoteEdit() {
  return (
    <Container>
        <Header Trash={noteid ? true : false} Plus={false} />
        <Edit />
    </Container>
  );
}

export default NoteEdit;