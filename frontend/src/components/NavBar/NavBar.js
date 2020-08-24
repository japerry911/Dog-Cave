import React, { useState, useEffect } from "react";
import NavToolbar from "../NavToolbar/NavToolbar";
import NavDrawer from "../NavDrawer/NavDrawer";
import { useLocation } from "react-router-dom";
import { ROUTES_ARRAY } from "../../router/routesArray";
import { useStyles } from "./NavBarStyles";

const NavBar = () => {
  const classes = useStyles();

  const location = useLocation();

  const [drawer, setDrawer] = useState(false);
  const [title, setTitle] = useState("Home");

  useEffect(() => {
    const routeObject = ROUTES_ARRAY.find(
      (routeObject) => routeObject.link === location.pathname
    );

    if (routeObject) {
      setTitle(routeObject.title);
    } else {
      setTitle("Get Back to the Cave!");
    }
  }, [location]);

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
