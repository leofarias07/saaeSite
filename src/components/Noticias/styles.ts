import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 0;
  > section {
    width: 100%;
    margin-top: 3rem;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;

    padding-bottom: 1rem;
    @media (max-width: 1000px) {
      gap: 1rem;
      padding: 0;
    }

    @media (max-width: 700px) {
      > section {
        margin-top: 2rem;
      }
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
      gap: 0.2rem;
      padding: 0;
    }
  }
`;
