import React, { useState, useEffect } from "react";
import NavToolbar from "../NavToolbar/NavToolbar";
import NavDrawer from "../NavDrawer/NavDrawer";
import { withRouter } from "react-router-dom";
import { ROUTES_ARRAY } from "../../router/routesArray";
import { useStyles } from "./NavBarStyles";

const NavBar = ({ location }) => {
  const classes = useStyles();

  const [drawer, setDrawer] = useState(false);
  const [title, setTitle] = useState("Home");

  useEffect(() => {
    setTitle(
      ROUTES_ARRAY.find((routeObject) => routeObject.link === location.pathname)
        .title
    );
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

export default withRouter(NavBar);
