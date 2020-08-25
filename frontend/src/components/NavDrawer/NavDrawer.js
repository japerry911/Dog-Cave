import React, { Fragment } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { ROUTES_ARRAY, AUTH_ROUTES_ARRAY } from "../../router/routesArray";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../redux/actions/authActions";
import { handleOpen } from "../../redux/actions/snackbarActions";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useStyles } from "./NavDrawerStyles";

const NavDrawer = ({ open, onClose, setTitle }) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const userObject = useSelector((state) => state.auth.user);
  const isAuthed = useSelector((state) => state.auth.isAuthed);

  const history = useHistory();

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      className={classes.drawerStyle}
      classes={{ paper: classes.drawerPaperStyle }}
    >
      <List>
        {!isAuthed ? (
          ROUTES_ARRAY.map((routeObject, index) => {
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
        ) : (
          <Fragment>
            {AUTH_ROUTES_ARRAY.map((routeObject, index) => {
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
            <ListItem
              button
              onClick={async () => {
                try {
                  await dispatch(signOut(userObject.id));
                  dispatch(
                    handleOpen({
                      type: "success",
                      message: "Logged out successfully",
                    })
                  );
                  onClose();
                  history.push("/");
                } catch (error) {
                  dispatch(
                    handleOpen({
                      type: "error",
                      message:
                        "Log out failed, please try again in a few seconds",
                    })
                  );
                }
              }}
            >
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText>Log Out</ListItemText>
            </ListItem>
          </Fragment>
        )}
      </List>
    </Drawer>
  );
};

export default NavDrawer;
