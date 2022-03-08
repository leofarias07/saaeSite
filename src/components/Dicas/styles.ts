import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  .dicas {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 2rem;
    gap: 1rem;
  }
  .cardD {
    display: flex;
    height: 100px;
    width: 100%;
    padding: 1rem;
    align-items: center;
    box-shadow: 0 0 0.1em #cfd4d1;
    background-color: #fff;
    transition: 0.5s;
    img {
      margin-right: 1rem;
      width: 120px;
      height: 100%;
    }
    p {
      font-size: 1.5rem;
      font-weight: bold;
      color: #111;
    }
    &:hover {
      filter: brightness(1.3);
      transform: translateY(-10px);
    }
  }

  @media (max-width: 1000px) {
    .dicas {
      display: flex;
      flex-direction: column;
    }
  }
  @media (max-width: 500px) {
    display: none;
  }
`;
