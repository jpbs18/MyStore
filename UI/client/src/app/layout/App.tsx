import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Catalog from '../../features/catalog/Catalog';
import Header from './Header';
import { useState } from 'react';

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
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
