import styled, {css} from 'styled-components';
import {Notepad} from '../../Styles/Icons'
export const Container = styled.div`
    display: flex;
    height: 80px;
    justify-content: space-between;
    background: var(--secondary);
    align-items: center;
    padding: 25px;
`;

export const NavInfo = styled.div`
    display: flex;
    align-items: center;
`;

export const NoteIcon = styled(Notepad)`
    width: 45px;
    height: 45px;
    fill: var(--white);
    color: var(--white);
`;

export const Title = styled.div`
    font-size: 22px;
    color: var(--white);
`;

export const Buttons = styled.div`
    margin-right: 25px;
    display: flex;
`;

const ButtonsStyles = css`
    display: flex;
    cursor: pointer;
    padding: 20px;
    font-size: 19px;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 20px;
    height: 40px;
    align-items: center;
    justify-content: center;
    width: 110px;
    background: none;
    transition: .5s;
`;

export const SingIn = styled.button`
    ${ButtonsStyles}
    color: var(--save); 
    border: 1px solid var(--save);
    &:hover{
        background: var(--save);
        color: var(--white);
    }
`;

export const Register = styled.button`
    ${ButtonsStyles}
    color: var(--exit); 
    border: 1px solid var(--exit); 
    &:hover{
        background: var(--exit);
        color: var(--white);
    }
    
`;