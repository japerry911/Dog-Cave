import React, { Fragment, useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import phoenixServer from "../../api/phoenixServer";
import { handleOpen, handleClose } from "../../redux/actions/snackbarActions";
import LoadingOverlay from "react-loading-overlay";
import { useStyles } from "./ChangePasswordTabStyles";

const ChangePasswordTab = () => {
  const classes = useStyles();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [validationStatus, setValidationStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const userObject = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentPassword || (!newPassword && !confirmNewPassword)) {
      setValidationStatus(false);
      return;
    }

    if (newPassword !== confirmNewPassword && confirmNewPassword.length > 0) {
      dispatch(
        handleOpen({ type: "error", message: "New passwords do not match" })
      );
      setValidationStatus(false);
    } else if (newPassword.length > 0 && newPassword === confirmNewPassword) {
      dispatch(handleClose());
      setValidationStatus(true);
    }
  }, [dispatch, currentPassword, newPassword, confirmNewPassword]);

  const onSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData();

    formData.set("username", userObject.username);
    formData.set("img_url", userObject.img_url);
    formData.set("password", newPassword);

    phoenixServer
      .put(`/api/authed/users/${userObject.id}`, formData, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then(
        (response) => {
          dispatch(
            handleOpen({
              type: "success",
              message: "Password updated successfully",
            })
          );
          setCurrentPassword("");
          setNewPassword("");
          setConfirmNewPassword("");
          setIsLoading(false);
        },
        (error) => {
          dispatch(
            handleOpen({
              type: "error",
              message: `Password update failed - ${error}`,
            })
          );
          setCurrentPassword("");
          setNewPassword("");
          setConfirmNewPassword("");
          setIsLoading(false);
        }
      );
  };

  return (
    <Fragment>
      <LoadingOverlay active={isLoading} spinner text="Updating Password...">
        <Grid container className={classes.gridContainerStyle}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="h6" className={classes.headerTextStyle}>
              Change Password:
            </Typography>
            <Divider className={classes.dividerStyle} />
          </Grid>
          <form onSubmit={onSubmit} className={classes.formContainerStyle}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                value={currentPassword}
                onChange={(newCurrentPassword) =>
                  setCurrentPassword(newCurrentPassword.target.value)
                }
                label="Current Password"
                type="password"
                required
                className={classes.textFieldStyle}
                color="primary"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                value={newPassword}
                type="password"
                onChange={(newNewPassword) =>
                  setNewPassword(newNewPassword.target.value)
                }
                label="New Password"
                required
                className={classes.textFieldStyle}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                value={confirmNewPassword}
                type="password"
                onChange={(newConfirmNewPassword) =>
                  setConfirmNewPassword(newConfirmNewPassword.target.value)
                }
                label="Confirm New Password"
                required
                className={classes.textFieldStyle}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Button
                className={classes.buttonStyle}
                disabled={!validationStatus}
                type="submit"
              >
                Change Password
              </Button>
            </Grid>
          </form>
        </Grid>
      </LoadingOverlay>
    </Fragment>
  );
};

export default ChangePasswordTab;
