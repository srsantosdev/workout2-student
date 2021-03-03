import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;

  > h1 {
    margin: 2.4rem 0;
    font-size: 2.4rem;
    font-weight: 500;
  }

  > form {
    width: 100%;
    max-width: 400px;

    margin-top: 2.4rem;

    > button {
      margin-top: 1.6rem;
    }
  }
`;

