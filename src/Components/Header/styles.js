import styled, {css} from 'styled-components';
import {Plus, Trash, Notepad, Exit}  from '../../Styles/Icons';
export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 110px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary);
`;

export const TopSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    flex: 1;
`;

const ButtonsIcons = css`
    width: 55px;
    height: 55px;
    background-color: var(--white);
    border-radius: 50%;
    padding: 10px;
    color: var(--secondary);
    fill: var(--secondary);
    margin-top: 10px;
    cursor: pointer;
    transition: .5s;
    &:hover{
        fill: var(--save);
    }
`;

export const ButtonNotes = styled(Notepad)`${ButtonsIcons}`;

export const BackSide = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
`;

export const AddNote = styled(Plus)`${ButtonsIcons}`;

export const DeleteNote = styled(Trash)`${ButtonsIcons}`;

export const Logout = styled(Exit)`width: 55px;
    ${ButtonsIcons}
    color: var(--exit);
    fill: var(--exit);
`;