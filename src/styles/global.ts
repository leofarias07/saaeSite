import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
      transition:.3s;
    }
    ::-webkit-scrollbar-thumb {
      background: #0252d8;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
      background: #fff;
      border-radius: 10px;
    }
  }

  body {
    background: rgb(2,129,216);
background: linear-gradient(90deg, rgba(2,129,216,1) 23%, rgba(2,117,216,1) 36%, rgba(2,115,216,1) 37%, rgba(2,73,216,1) 65%);
    color: #fff;
    font: 400 1rem 'Montserrat', sans-serif;
  }

  body,
  input,
  textarea,
  button {
    font: 500 1.3rem 'Source Sans Pro', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  
  ul{
    list-style:none;
  }

  img {
    width: 100%;
    max-width: 100%;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  .container {
    width: 100%;
    margin: 0 auto;
    max-width: 85rem;
    padding: 0 1rem;
    @media(max-width:1450px) {
      max-width: 70rem;
    }
    @media(max-width:1000px) {
      max-width: 50rem;
    }
    @media(max-width:700px) {
      //padding: 0 2rem;
    }
  }

`;
