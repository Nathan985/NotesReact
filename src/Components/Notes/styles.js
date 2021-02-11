import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: min(1170px, 100%);
  height: 100vh;
  background-color: var(--search);
  box-shadow: 5px 5px 5px black;
  flex-direction: column;
`;

export const HeaderInformation = styled.div`
    display: flex;
    height: 80px;
    width: 100%;
    align-items: center;
    padding: 30px;
    background-color: var(--secondary);
    border-left: 1px solid var(--primary);
`;

export const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s;
    &:hover{
        color: var(--save)
    }
`;

export const Context = styled.div`
    display:  flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    ::-webkit-scrollbar-button{
        display: none;
    }
    ::-webkit-scrollbar {
        background-color: var(--secondary);
        width: 10px;
        border-radius: 5px;
        margin-right: 3px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: var(--dark-hover);
        border-radius: 5px;
    }
`;