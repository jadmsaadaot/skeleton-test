import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import logo from "../../assets/Images/logo-banner.png";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        {/* <a href="/foi/dashboard" alt="British Columbia">
          <img src={logo} />
        </a> */}
        <Toolbar disableGutters>
          {/* <Link
            to="/foi/dashboard"
            alt="British Columbia"
            component={RouterLink}
            sx={{ mr: 2 }}
          >
            <img src={logo} />
          </Link> */}
          <Typography variant="h6" noWrap component="div" sx={{ mr: 2 }}>
            MET
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
