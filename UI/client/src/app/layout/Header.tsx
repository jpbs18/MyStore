import { AppBar, Switch, Toolbar, Typography } from '@mui/material';

interface Props {
  darkMode: true | false;
  handleDarkModeToggle: () => void;
}

const Header = ({ darkMode, handleDarkModeToggle }: Props) => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">ReStore</Typography>
        <Switch checked={darkMode} onChange={handleDarkModeToggle} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
