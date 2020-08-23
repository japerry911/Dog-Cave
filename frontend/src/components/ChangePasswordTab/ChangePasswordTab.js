import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { useStyles } from "./ChangePasswordTabStyles";

const ChangePasswordTab = () => {
  const classes = useStyles();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  return (
    <Grid container className={classes.gridContainerStyle}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography variant="h6" className={classes.headerTextStyle}>
          Change Password:
        </Typography>
        <Divider className={classes.dividerStyle} />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <TextField
          value={currentPassword}
          onChange={(newCurrentPassword) =>
            setCurrentPassword(newCurrentPassword.target.value)
          }
          label="Current Password"
          required
          className={classes.textFieldStyle}
          color="primary"
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <TextField
          value={newPassword}
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
          onChange={(newConfirmNewPassword) =>
            setConfirmNewPassword(newConfirmNewPassword.target.value)
          }
          label="Confirm New Password"
          required
          className={classes.textFieldStyle}
        />
      </Grid>
    </Grid>
  );
};

export default ChangePasswordTab;
