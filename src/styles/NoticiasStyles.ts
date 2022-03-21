import styled from 'styled-components';

export const NoticiasContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > main {
    margin-top: 5rem;
    margin-bottom: 5rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    @media (max-width: 1450px) {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
    }
    @media (max-width: 1000px) {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
    }

    @media (max-width: 500px) {
      grid-template-columns: 1fr;
    }
  }
`;
