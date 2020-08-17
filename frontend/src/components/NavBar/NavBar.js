import React, { useState } from "react";
import NavToolbar from "../NavToolbar/NavToolbar";
import NavDrawer from "../NavDrawer/NavDrawer";
import { useStyles } from "./NavBarStyles";

const NavBar = () => {
  const classes = useStyles();

  const [drawer, setDrawer] = useState(false);
  const [title, setTitle] = useState("Home");

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <div className={classes.root}>
      <NavToolbar title={title} onMenuClick={toggleDrawer} />
      <NavDrawer open={drawer} onClose={toggleDrawer} setTitle={setTitle} />
    </div>
  );
};

export default NavBar;
