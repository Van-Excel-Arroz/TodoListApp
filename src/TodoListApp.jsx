import { useState } from 'react';
import TodoList from './TodoList';
import TodoListNavbar from './TodoListNavbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

export default function TodoListApp(params) {
  const [themeMode, setThemeMode] = useState('light');

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            boxShadow:
              themeMode === 'light'
                ? '0px 4px 8px rgba(0, 0, 0, 0.1)'
                : '0px 4px 8px rgba(255, 255, 255, 0.1)',
          },
        },
      },
    },
  });

  const handleThemeChange = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TodoListNavbar theme={themeMode} onThemeChange={handleThemeChange} />
      <TodoList />
    </ThemeProvider>
  );
}
