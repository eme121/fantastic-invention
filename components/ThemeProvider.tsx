import React from 'react';
import { ThemeProvider as StyledComponentsProvider } from 'styled-components/native';

const theme = {
  colors: {
    primary: '#003366',
    secondary: '#FFD700',
    background: '#F0F0F0',
    text: '#333333',
    error: '#FF0000',
  },
  fonts: {
    regular: 'Roboto-Regular',
    bold: 'Roboto-Bold',
  },
};

export const ThemeProvider: React.FC = ({ children }) => (
  <StyledComponentsProvider theme={theme}>{children}</StyledComponentsProvider>
);

