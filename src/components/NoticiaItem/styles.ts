import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: co;
  margin-bottom: 2rem;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  .cardNoticia {
    border-radius: 5px;
    width: 400px;
    height: 28rem;
    text-align: center;
    box-shadow: 0 0 0.1em #cfd4d1;
    transition: 0.5s;
    img {
      height: 300px;
      width: 500px;
      margin-bottom: 0.8rem;
    }
    h1 {
      font-size: 1.5rem;
    }
    &:hover {
      filter: brightness(1.3);
      transform: translateY(-20px);
    }
  }

  @media (max-width: 1000px) {
    display: flex;
    gap: 3rem;
    margin-top: 0;
    .cardNoticia {
      width: 200px;
      height: 20rem;
      margin: 0;
      text-align: center;

      img {
        height: 200px;
        width: 250px;
        margin-bottom: 1rem;
      }
      h1 {
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    .cardNoticia {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      width: 100%;
      height: auto;
      text-align: center;
      transition: none;
      a {
        display: flex;
        align-items: center;
        > div {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      img {
        height: 100%;
        margin: 0;
        max-width: 100px;
        object-fit: cover;
      }
      h1 {
        padding: 0.8rem;
        font-size: 1rem;
      }
    }
  }
`;
