import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { ROUTES_ARRAY, AUTH_ROUTES_ARRAY } from "../../router/routesArray";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useStyles } from "./NavDrawerStyles";

const NavDrawer = ({ open, onClose, setTitle }) => {
  const classes = useStyles();

  const userObject = useSelector((state) => state.auth.user);
  const isAuthed = useSelector((state) => state.auth.isAuthed);

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      className={classes.drawerStyle}
      classes={{ paper: classes.drawerPaperStyle }}
    >
      <List>
        {!isAuthed
          ? ROUTES_ARRAY.map((routeObject, index) => {
              return (
                <ListItem
                  key={index}
                  button
                  component={Link}
                  to={routeObject.link}
                  onClick={() => {
                    setTitle(routeObject.title);
                    onClose();
                  }}
                >
                  <ListItemIcon>
                    <routeObject.icon />
                  </ListItemIcon>
                  <ListItemText>{routeObject.title}</ListItemText>
                </ListItem>
              );
            })
          : AUTH_ROUTES_ARRAY.map((routeObject, index) => {
              return (
                <ListItem
                  key={index}
                  button
                  component={Link}
                  to={routeObject.link.replace(":id", userObject.id)}
                  onClick={() => {
                    setTitle(routeObject.title);
                    onClose();
                  }}
                >
                  <ListItemIcon>
                    <routeObject.icon />
                  </ListItemIcon>
                  <ListItemText>{routeObject.title}</ListItemText>
                </ListItem>
              );
            })}
      </List>
    </Drawer>
  );
};

export default NavDrawer;
