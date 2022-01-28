import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
html {
    box-sizing: border-box;
    font-size: 62.5%;
    @media only screen and (max-width: 1200px){
        font-size: 58%;
    }
    @media only screen and (min-width: 1980px){
        font-size: 70%;
    }
}
body { 
    font-family: 'Space Mono', monospace;
    line-height: 1.5;
    font-size: 18px;
    font-weight: 400;
    color: darkgray;
}
h1,h2,h3,h4,h5,h6 {
  color: darkgray;
  transition: .25s;
  
}
h1 {
  font-weight: 700;
  font-size: 4rem;
  @media (max-width: 600px) {
    font-size: 3rem;
  }
}
h2 {
 
  font-size: 2.5rem;
  @media (max-width: 600px) {
    font-size: 1.7rem;
  }
}
h3 {
  font-weight: 700;
  font-size: 3rem;
  margin: 1.4rem;
  @media (max-width: 400px) {
    font-size: 1.7rem;
  }
}
`;

export default GlobalStyles;

export const Container = styled.main`
  margin: 0 auto;
  padding: 0 50px;
  max-width: 1300px;
  width: 100%;
  @media (max-width: 400px) {
    padding: 0 10px;
  }
  @media (max-width: 991px) {
    padding: 0 30px;
  }
  @media (min-width: 1500px) {
    max-width: 1500px;
  }
  @media (min-width: 1800px) {
    max-width: 1800px;
    padding: 0 30px;
  }
`;

export const Section = styled.section`
  margin: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
