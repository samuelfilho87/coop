import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 1024px;
  margin: 56px auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media screen and (max-width:1024px) {
    padding: 0 24px;
    flex-direction: column;
  }

  h2 {
    margin-bottom: 28px;
    font-size: 24px;
    font-weight: 700;
    color: var(--preto);
    text-align: center;
  }
`;

export const ListLastOngs = styled.div`
  width: 100%;
  max-width: calc(100% - 400px - 40px); /* 400px do mapa e 40px da margem direita */
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width:1024px) {
    max-width: 100%;
    margin-bottom: 40px;
  }
`;

export const ListLastActions = styled.div`
  margin-top: 56px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;

  @media screen and (max-width:1024px) {
    width: 100%;
  }

  h2 {
    width: 100%;
  }

  & > div {
    width: calc(50% - 8px);

    @media screen and (max-width:1024px) {
      width: calc(100% - 8px);
    }
  }
`;