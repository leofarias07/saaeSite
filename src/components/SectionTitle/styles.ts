import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  border-bottom: 2px solid #fff;
  h1 {
    color: #fff;
    font-size: 3rem;
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 2.4rem;
    }
  }
  @media (max-width: 500px) {
    border-bottom: 2px solid #fff;
    margin-top: 0.8rem;
    > div {
      display: flex;
      flex-direction: row;
      gap: 0;
    }
    h1 {
      font-size: 1.8rem;
    }
  }
`;
