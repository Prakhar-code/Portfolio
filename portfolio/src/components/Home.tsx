import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import TypewriterText from './TypewriterText';

const HomeContainer = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.backgroundGradient};
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
`;

const BackgroundOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.secondary} 100%
  );
  opacity: 0.05;
  z-index: 0;
  transition: all 0.3s ease;
`;

const Content = styled(motion.div)`
  max-width: 1200px;
  text-align: center;
  position: relative;
  z-index: 1;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 16px;
  box-shadow: 0 4px 6px ${({ theme }) => theme.colors.shadow};
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const TitleContainer = styled.div`
  height: 120px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 100px;
  }
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.5px;
  position: absolute;
  white-space: nowrap;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.fonts.secondary};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const CTAButton = styled(motion.button)`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 2px;
  box-shadow: 0 2px 4px ${({ theme }) => theme.colors.shadow};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px ${({ theme }) => theme.colors.shadow};
  }
`;

const Home: React.FC = () => {
  const texts = [
    "Hi,  I'm  Prakhar  Kabra",
    "A  Software  Engineer",
    "A  Passionate  Developer",
    "A  Problem  Solver"
  ];

  return (
    <HomeContainer>
      <Content>
        <TypewriterText texts={texts} />
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Crafting elegant web experiences with modern technologies
        </Subtitle>
        <CTAButton
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onClick={() => window.location.href = '/projects'}
        >
          View My Work
        </CTAButton>
      </Content>
    </HomeContainer>
  );
};

export default Home; 