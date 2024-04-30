import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Switch } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

export default function TodoListNavbar({ theme, onThemeChange }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todo List
          </Typography>
          <FormControlLabel
            control={
              <Switch checked={theme === 'dark'} onChange={onThemeChange} name="theme-switch" />
            }
            label={
              theme === 'dark' ? (
                <LightModeOutlinedIcon sx={{ marginTop: 1 }} />
              ) : (
                <DarkModeOutlinedIcon sx={{ marginTop: 1 }} />
              )
            }
            labelPlacement="start"
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
