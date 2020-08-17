import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { ROUTES_ARRAY } from "../../router/routesArray";
import { Link } from "react-router-dom";
import { useStyles } from "./NavDrawerStyles";

const NavDrawer = ({ open, onClose, setTitle }) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      className={classes.drawerStyle}
      classes={{ paper: classes.drawerPaperStyle }}
    >
      <List>
        {ROUTES_ARRAY.map((routeObject, index) => {
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
        })}
      </List>
    </Drawer>
  );
};

export default NavDrawer;
