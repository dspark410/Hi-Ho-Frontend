import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
// import GoogleMaps from '../GoogleMaps';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header({ token }) {
  const classes = useStyles();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location = "/login";
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Hi Ho - It's off to work we go...
          </Typography>
          {/* <GoogleMaps /> */}
          <nav className="nav-links">
            <Link to="/">Search</Link>

            {token === "" ? (
              <>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
              </>
            ) : (
              <>
                <Link to="/profile">Profile</Link>
                <Link to="#" onClick={handleLogout}>
                  Logout
                </Link>
              </>
            )}
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
}
