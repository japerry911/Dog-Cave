import React, { Fragment } from "react";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./NavToolbarStyles";

const NavToolbar = ({ title, onMenuClick }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar>
        <Toolbar className={classes.toolbarStyle}>
          <a href="/" className={classes.linkStyle}>
            <img
              src="https://dog-cave2134912939213.s3.us-east-2.amazonaws.com/Logo/your-logo.png"
              className={classes.imageStyle}
              alt="Dog Cave Logo"
            />
          </a>
          <div className={classes.menuDivStyle}>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={onMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" color="inherit" className={classes.flex}>
              {title}
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};

export default NavToolbar;
