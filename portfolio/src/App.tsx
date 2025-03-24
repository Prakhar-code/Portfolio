import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { ThemeProvider } from './context/ThemeContext';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.3s ease;
`;

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppContainer>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes as you create more components */}
          </Routes>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
};

export default App;
