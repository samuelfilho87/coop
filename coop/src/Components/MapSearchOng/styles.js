import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width:1024px) {
    max-width: 100%;
  }
`;

export const Filtro = styled.div`
  margin-bottom: 16px;
  display: flex;

  select {
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 700;
    color: var(--roxo);
    text-transform: uppercase;
    border: none;
    border-radius: 10px;
    background: var(--cinza);

    &:last-child {
      margin-left: 8px;
      flex-grow: 1;
    }
  }
`;

export const Mapa = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 400px;
  border: solid 2px var(--roxo);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    height: 390px;
  }
`;