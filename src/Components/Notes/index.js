import React, {useState, useEffect} from 'react';
import { 
    Container, 
    HeaderInformation,
    Title,
    Context 
} from './styles';

import NoteBody from '../NoteBody';
import {GetNote as SerachNotes} from '../../Api/GetNotes';
function Notes() {

  const [notes, setNotes] = useState([]);
  localStorage.removeItem('NoteDelete');
  useEffect(() => {
    GetNote();
  },[])

  const GetNote = async () => {
    const id = await localStorage.getItem('uid');
    const result = await SerachNotes(id);
    setNotes(result);
  }

  return (
    <Container>
        <HeaderInformation>
            <Title>Notes</Title>
        </HeaderInformation>
        <Context>
          {
            notes.map((item, key) => {
              console.log(item);
              return(
                <NoteBody item={item} key={key} />
              )
            })
          }
        </Context>
    </Container>
  );
}

export default Notes;