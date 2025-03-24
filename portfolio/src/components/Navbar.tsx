import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const Nav = styled.nav`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.navbar};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.primary};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.navbarText};
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.navbarText};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 400;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: -2px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    
    &:after {
      width: 100%;
    }
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.navbarText};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;
  font-size: 1.2rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Navbar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">Prakhar Kabra</Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
            {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
          </ThemeToggle>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 