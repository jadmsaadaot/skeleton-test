import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="l">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div" sx={{ mr: 2 }}>
            MET
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
