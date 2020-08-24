import React, { useState, useEffect } from "react";
import NavToolbar from "../NavToolbar/NavToolbar";
import NavDrawer from "../NavDrawer/NavDrawer";
import { useLocation } from "react-router-dom";
import { TITLE_ARRAY } from "../../router/routesArray";
import { useStyles } from "./NavBarStyles";

const NavBar = () => {
  const classes = useStyles();

  const location = useLocation();

  const [drawer, setDrawer] = useState(false);
  const [title, setTitle] = useState(
    TITLE_ARRAY.find(
      (routeObject) =>
        routeObject.title === location.pathname.replace(/\/[0-9]+/g, "")
    ) === undefined
      ? "Get Back to the Cave!"
      : TITLE_ARRAY.find(
          (routeObject) =>
            routeObject.title === location.pathname.replace(/\/[0-9]+/g, "")
        ).title
  );

  useEffect(() => {
    const routeObject = TITLE_ARRAY.find(
      (routeObject) =>
        routeObject.link === location.pathname.replace(/\/[0-9]+/g, "")
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
