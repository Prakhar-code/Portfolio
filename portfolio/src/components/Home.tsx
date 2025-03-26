import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import TypewriterText from './TypewriterText';

const HomeContainer = styled(motion.div)`
  min-height: calc(100vh - 80px); // Subtract navbar height
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.backgroundGradient};
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  max-width: 1400px;
  margin: 0 auto;
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

const ContentSection = styled(motion.div)`
  flex: 1;
  max-width: 1000px;
  position: relative;
  z-index: 1;
  padding: ${({ theme }) => theme.spacing.md} 0;
  margin-right: ${({ theme }) => theme.spacing.xl};
`;

const ImageSection = styled(motion.div)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const ProfileImage = styled(motion.img)`
  width: 350px;
  height: 350px;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 0 8px 16px ${({ theme }) => theme.colors.shadow};
  border: 4px solid ${({ theme }) => theme.colors.cardBackground};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 12px 24px ${({ theme }) => theme.colors.shadow};
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin: ${({ theme }) => theme.spacing.lg} 0;
  font-family: ${({ theme }) => theme.fonts.secondary};
  max-width: 600px;
  line-height: 1.6;
`;

const CTAButton = styled(motion.button)`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
  box-shadow: 0 2px 4px ${({ theme }) => theme.colors.shadow};
  position: relative;
  overflow: hidden;
  margin-top: ${({ theme }) => theme.spacing.lg};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px ${({ theme }) => theme.colors.shadow};

    &::before {
      left: 100%;
    }
  }
`;

const Home: React.FC = () => {
  const texts = [
    "Hi, I'm Prakhar Kabra",
    "Software Engineer",
    "Passionate Developer",
    "Problem Solver"
  ];

  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BackgroundOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
      />
      <ContentSection
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
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
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = '/projects'}
        >
          View My Work
        </CTAButton>
      </ContentSection>
      <ImageSection
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <ProfileImage
          src="/assets/IMG_20221214_221602.jpg"
          alt="Prakhar Kabra"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        />
      </ImageSection>
    </HomeContainer>
  );
};

export default Home; 