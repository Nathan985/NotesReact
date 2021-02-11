import React, {useState} from 'react';
import {CreateNote as Created} from '../../Api/CreateNote'
import {Alerts} from '../../Events/Alerts';
import {GetOneNote} from '../../Api/GetNote';
import {UpdateNote} from '../../Api/UpdateNote'
import { 
    Container, 
    HeaderInformation,
    Title,
    Context,
    TextField,
    TextArea,
    ButtonSave
} from './styles';
function Edit() {

  const [title, setTitle] = useState("");
  const [idNote, setIdNote] = useState("");
  const [body, setBody] = useState("");
  const id = localStorage.getItem('uid');
  const noteid = localStorage.getItem('Note');

  const SerachNote = () => {
    GetOneNote(id, noteid).then(res =>{
      setTitle(res[1]);
      setBody(res[0]);
      setIdNote(res[2]);
      localStorage.removeItem('Note');
    })
  }

  if(noteid){
    SerachNote();
  }
  
  const CreateNote = () => {
    Created(id, title, body);
    Alerts('Nota Criada!', 'success');
    setTimeout(() => {window.location.assign('/Notes')}, 3000);
  }
  const Update =  async () => {
    const result = await UpdateNote(id, title, body, idNote);
    if(result === true){
      Alerts('Nota Atualizada com Sucesso!', 'success');
      setTimeout(() => {window.location.assign('/Notes')}, 3000);
      localStorage.removeItem('NoteDelete');
    }
  }

  return (
    <Container>
        <HeaderInformation>
            <Title>{title}</Title>
        </HeaderInformation>
        <Context>
            <TextField 
            value={title}
            onChange={(event) => {setTitle(event.target.value)}}
            placeholder="Title"
            />
            <TextArea 
            value={body}
            onChange={(event) => {setBody(event.target.value)}}
            placeholder="..."
            />
        </Context>
        <ButtonSave
          onClick = {() => {idNote ? Update() : CreateNote()}}
        >{idNote ? "Update" : "Save"}</ButtonSave>
    </Container>
  );
}

export default Edit;