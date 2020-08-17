import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const NavDrawer = ({ open, onClose, setTitle }) => (
  <Drawer variant="temporary" open={open} onClose={onClose}>
    <List>
      <ListItem
        button
        onClick={() => {
          setTitle("Home");
          onClose();
        }}
      >
        <ListItemText>Home</ListItemText>
      </ListItem>
    </List>
  </Drawer>
);

export default NavDrawer;
