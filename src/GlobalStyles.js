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
    font-size: 22px;
    font-weight: 400;
    background: ${({ theme }) => theme.background};
     color: ${({ theme }) => theme.color};
}
h1,h2,h3,h4,h5,h6 {
  color: ${({ theme }) => theme.headings};
  transition: ${({ theme }) => theme.transitionTime};
  margin: 2rem auto;
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
svg {
  font-size: 2rem;
  @media (max-width: 400px) {
    font-size: 1.7rem;
  }
}
`;

export default GlobalStyles;

export const Container = styled.main`
  margin: 4rem auto;
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

export const Button = styled.button`
  border-radius: ${({ bigRadius }) => (bigRadius ? '30px' : '20px')};
  background: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.color};
  padding: ${({ big }) => (big ? '18px 30px' : '10px 28px')};
  font-size: ${({ bigFont }) => (bigFont ? '20px' : '18px')};
  outline: none;
  cursor: pointer;
  border: none;
  transition: all 0.5s ease;
  &:hover {
    transform: translateY(-0.5rem) scale(1.02);
    color: #000;
  }
  &:active {
    transform: translateY(0.5rem);
  }
  @media only screen and (max-width: 1000px) {
    /* width: 100%; */
    padding: ${({ big }) => (big ? '18px 30px' : '10px 20px')};
  }
  @media only screen and (max-width: 375px) {
    padding: ${({ big }) => (big ? '12px 20px' : '10px 20px')};
    font-size: ${({ bigFont }) => (bigFont ? '16px' : '18px')};
  }
`;

export const OutlineButton = styled.button`
  border-radius: ${({ bigRadius }) => (bigRadius ? '40px' : '30px')};
  border: 2px solid #333;
  color: #333;
  outline: none;
  padding: ${({ big }) => (big ? '15px 60px' : '13px 55px')};
  font-size: ${({ fontBig }) => (fontBig ? '22px' : '18px')};
  transition: all 0.5s ease;
  background-color: #fefefe;
  &:hover {
    background-color: #333;
    color: #fff;
    border: none;
    transform: translateY(-0.5rem) scale(1.02);
  }
  &:active {
    transform: translateY(0.5rem);
  }
  @media only screen and (max-width: 1200px) {
    border-radius: ${({ bigRadius }) => (bigRadius ? '20px' : '18px')};
    padding: ${({ big }) => (big ? '9px 30px' : '8px 28px')};
    font-size: ${({ fontBig }) => (fontBig ? '18px' : '16px')};
  }
  @media only screen and (max-width: 780px) {
    border: none;
    color: #e38b06;
    padding: 1rem 2rem;
    background: none;
    transition: all 0.4s ease;
    &:hover {
      border-bottom: 1px solid #e38b06;
      background: none;
      border-radius: 0;
      color: #e38b06;
    }
  }
`;
