import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 95%;
  height: 120px;
  border-radius: 20px;
  padding: 20px;
  margin-top: 12px;
  margin-bottom: 5px;
  background-color: var(--note);
  cursor: pointer;
  flex-direction: column;
  &:hover{
      background-color: var(--light-hover)
  }
`;

export const Title = styled.div`
    font-size: 20px;
    font-weight: bolder;
`;

export const Body = styled.div`
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 80%;
    max-height: 80px;
`;