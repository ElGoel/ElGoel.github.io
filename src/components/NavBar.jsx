import React from 'react';
import { StyledToggleButtonGroup } from './material/StyledToggleButtonGroup';
import { MaterialUISwitch } from './material/MaterialSwitch';
import {
  AppBar,
  Toolbar,
  ToggleButton,
  Typography,
  Box,
  Menu,
  MenuItem,
  IconButton
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom'; 

const pages = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "education", path: "/education" },
  { name: "skills", path: "/skills" },
  { name: "projects", path: "/projects" },
];    

const NavBar = () => {
  const currentPage = useLocation();
  const current = currentPage.pathname.slice(1, currentPage.pathname.length);
  const [pagesValue, setPagesValue] = React.useState(current ? current : 'home');
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handlePagesChange = (event, updatedPages) => {
    setPagesValue(updatedPages);
  }
  const handleClick = () => {
    setPagesValue('home');
  }
    
  return (
    <AppBar position="static" sx={{ bgcolor: "white", boxShadow: 4 }}>
      <Toolbar>
        <Typography
          noWrap
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "helvetica",
            fontWeight: 500,
            letterSpacing: ".1rem",
            color: "primary.main",
          }}
          onClick={handleClick}
          color="primary"
          variant="h5"
          component={Link}
          to="/"
        >
          {"<"}
          <Typography
            color="primary.contrastText"
            variant="h5"
            component="span"
            letterSpacing=".1rem"
          >
            Ángelo colmenares
          </Typography>{" "}
          {"/>"}
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem component={Link} to={page.path} key={page.name} onClick={handleCloseNavMenu}>
                <Typography 
                  textAlign="center"
                >
                  {page.name}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Typography
          onClick={handleClick}
          color="primary"
          variant="h5"
          component={Link}
          to="/"
          noWrap
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontSize:'1.1rem'
          }}
        >
          {"<"}
          <Typography
            color="primary.contrastText"
            variant="h5"
            component="span"
            letterSpacing=".1rem"
            fontSize='1.1rem'
          >
            Ángelo colmenares
          </Typography>{" "}
          {"/>"}
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex", justifyContent: 'flex-start' } }}>
          <StyledToggleButtonGroup
            aria-label="alignment button group"
            value={pagesValue}
            onChange={handlePagesChange}
            size="large"
            exclusive
          >
            {pages.map((page) => (
              <ToggleButton
                key={page.name}
                onClick={handleCloseNavMenu}
                component={Link}
                to={page.path}
                value={page.name}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page.name}
              </ToggleButton>
            ))}
          </StyledToggleButtonGroup>
        </Box>
        <MaterialUISwitch />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar

/** 
 *    <Toolbar display="flex" sx={{ justifyContent: "space-between" }}>
        <Typography onClick={handleClick} color="primary" variant="h5" component={Link} to='/'>
          {"<"}
          <Typography
            color="primary.contrastText"
            variant="h5"
            component="span"
            letterSpacing='.1rem'
          >
            Ángelo colmenares
          </Typography>{" "}
          {"/>"}
        </Typography>
        <StyledToggleButtonGroup
          aria-label="alignment button group"
          value={pagesValue}
          onChange={handlePagesChange}
          size="large"
          exclusive
        >
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {pages.map((page) => (
            <ToggleButton component={Link} to={page.path} value={page.name}>
              {page.name}
            </ToggleButton>
          ))}
        </StyledToggleButtonGroup>
      </Toolbar>
 */
