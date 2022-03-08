import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > main {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    @media (max-width: 1000px) {
      display: flex;
      gap: 2rem;
    }

    @media (max-width: 500px) {
      display: flex;
      gap: 0.5rem;
    }
  }
`;
