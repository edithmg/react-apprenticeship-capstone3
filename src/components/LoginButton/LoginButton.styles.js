import styled from 'styled-components';

export const LoginContainer = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 2px 6px 2px rgba(60, 64, 67, 0.15);
  width: auto;
  border-radius: 8px;
  margin: 20px auto;
  padding: 20px;
`;

export const LogBtn = styled.button`
  text-align: center;
  width: 4rem;
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
