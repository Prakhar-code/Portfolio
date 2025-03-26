import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  margin-bottom: ${theme.spacing.md};
  position: relative;
  overflow: hidden;
  width: 100%;

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 100px;
  }
`;

const Word = styled.span`
  display: inline-block;
  margin: 0 0.3em;
`;

const Letter = styled(motion.span)`
  display: inline-block;
  font-size: 4rem;
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.primary};
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 3rem;
  }
`;

interface TypewriterTextProps {
  texts: string[];
  interval?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ texts, interval = 3000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[0]);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      // Typing effect
      if (currentText.length < texts[currentTextIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(texts[currentTextIndex].slice(0, currentText.length + 1));
        }, 50); // Typing speed
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1000); // Pause before deleting
      }
    } else {
      // Deleting effect
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 30); // Deleting speed
      } else {
        // Move to next text
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isTyping, currentTextIndex, texts]);

  const renderText = () => {
    const words = currentText.split(' ');
    return words.map((word, wordIndex) => (
      <Word key={wordIndex}>
        {word.split('').map((letter, letterIndex) => (
          <Letter
            key={`${wordIndex}-${letterIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.1 }}
          >
            {letter}
          </Letter>
        ))}
      </Word>
    ));
  };

  return (
    <TextContainer>
      {renderText()}
    </TextContainer>
  );
};

export default TypewriterText; 