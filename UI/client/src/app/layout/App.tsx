import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './Header';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? '#121212' : '#eaeaea'
      }
    }
  });

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleDarkModeToggle={toggleDarkMode}/>
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}

export default App;
