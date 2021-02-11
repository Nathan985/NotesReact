import React from 'react';
import { Login } from 'styled-icons/heroicons-solid';

import { 
  Container,
  TopSide,
  ButtonNotes,
  BackSide,
  AddNote,
  DeleteNote,
  Logout
} from './styles';
import {SignOut} from '../../Api/SignOut';
import {RemoveNote} from '../../Api/RemoveNote';
import {Alerts} from '../../Events/Alerts';
function Header({Trash = true, Plus = true}) {
  return (
    <Container>
      <TopSide>
        <ButtonNotes onClick={()  => {window.location.assign('/Notes')}} />
      </TopSide>
      <BackSide>
        <AddNote style={{display: !Plus ? "none" : "flex"}} onClick={() => {
          window.location.assign('/NoteEdit');
        }} />
        <DeleteNote 
        onClick={() => {
          const NoteDelete = localStorage.getItem("NoteDelete");
          const uid = localStorage.getItem("uid");
          RemoveNote(uid,NoteDelete);
          Alerts("Nota Removida com sucesso", 'success');
          setTimeout(() => {window.location.assign('/Notes')}, 3000);
        }}
        style={{display: !Trash ? "none" : "flex"}} />
        <Logout 
          onClick={() => {
            SignOut();
            localStorage.removeItem('Note');
            setTimeout(() => {window.location.assign('/SignIn')}, 1000);
          }}
        />
      </BackSide>
    </Container>
  );
}

export default Header;