import styled from 'styled-components';

export const Container = styled.div`
  width: max-width;
  height: 16rem;
  background: #0275d8;
  .creditos {
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: flex-end;
    gap: 45rem;
    padding-right: 1rem;
  }
  > main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5rem;

    .logoFooter {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .endRedes {
      display: flex;
      padding-top: none;
      padding: 1rem;
      text-align: center;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      border-right: 2px solid #fff;
      border-left: 2px solid #fff;
      h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
      }
      strong {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
      }
    }
    .sociais {
      display: flex;
      gap: 3rem;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      h1 {
        font-size: 2rem;
      }

      span {
        display: flex;
        gap: 2rem;
      }
    }
  }

  @media (max-width: 1000px) {
    .creditos {
      display: flex;
      height: 120px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-top: 1rem;
      margin-bottom: 0;
      p {
        font-size: 1rem;
      }
      span {
        font-size: 0.9rem;
      }
    }
    > main {
      display: flex;
      flex-direction: column;
      height: auto;
      .logoFooter {
        display: none !important;
      }
      .sociais {
        display: flex;
        display: none !important;
      }
      .endRedes {
        height: 160px;
        display: flex;
        padding-top: none;
        padding: 0.5rem;
        text-align: center;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        border-left: none !important;
        border-right: none !important;
        h1 {
          font-size: 1.5rem;
          margin-bottom: 0.8rem;
        }
        strong {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
        }
      }
    }
  }
  @media (max-width: 500px) {
    .creditos {
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        font-size: 0.8rem;
      }
      span {
        display: none;
      }
    }
    > main {
      display: flex;
      flex-direction: column;
      height: auto;
      .logoFooter {
        display: none !important;
      }
      .sociais {
        display: flex;
        display: none !important;
      }
      .endRedes {
        height: 160px;
        display: flex;
        padding-top: none;
        padding: 0.5rem;
        text-align: center;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        border-left: none !important;
        border-right: none !important;
        h1 {
          font-size: 1.5rem;
          margin-bottom: 0.8rem;
        }
        strong {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
        }
      }
    }
  }
`;
