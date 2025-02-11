import styled from 'styled-components';
import { Container } from '../../../GlobalStyles';

export const Nav = styled.nav`
  font-size: 18px;
  position: sticky;
  top: 0;
  z-index: 999;
  height: 80px;
  background-color: ${(theme) => theme.navBg};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(60, 64, 67, 0.2);
`;

export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  ${Container};
`;
export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 1.6rem;
    margin-bottom: 4px;
    background: #515d90;
  }
  @media (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 15px;
    right: 20px;
  }
`;

export const NavLogo = styled.img`
  width: 40px;
  height: 40px;
`;

export const MenuLink = styled.a`
  cursor: pointer;
  font-size: 2rem;
  margin-top: 1rem;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  color: ${(theme) => theme.link};
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Menu = styled.div`
  display: flex;
  width: 530px;
  margin-left: auto;
  position: relative;
  background-color: ${(theme) => theme.navBg};
  transition: ${({ theme }) => theme.transitionTime};
  @media (max-width: 768px) {
    align-items: flex-end;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    margin-right: -30px;
    margin-top: -85px;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    height: ${({ isOpen }) => (isOpen ? '150px' : '0px')};
  }
`;
export const Logo = styled.a`
  color: ${(theme) => theme.link};
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: 800;
  transition: ${({ theme }) => theme.transitionTime};
  &:hover {
    transform: scale(1.08);
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
