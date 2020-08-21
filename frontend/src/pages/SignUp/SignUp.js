import React, { Fragment, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LoadingOverlay from "react-loading-overlay";
import HeroHeader from "../../components/HeroHeader/HeroHeader";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormImageUploader from "../../components/FormImageUploader/FormImageUploader";
import { useStyles } from "./SignUpStyles";

const SignUp = () => {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState("");
  const [validationStatus, setValidationStatus] = useState(false);

  return (
    <Fragment>
      <LoadingOverlay active={isLoading} spinner text="Creating account...">
        <div className={classes.mainDivStyle}>
          <HeroHeader
            headerText="Create Account"
            imgUrl="https://dog-cave2134912939213.s3.us-east-2.amazonaws.com/CreateAccount/jason-leung-qj091kDW_sw-unsplash.jpg"
            pushDown
          />
          <Grid
            container
            justify="center"
            className={classes.mainContainerStyle}
          >
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
              <Paper className={classes.paperStyle}>
                <Typography variant="h2" className={classes.titleStyle}>
                  Create Account
                </Typography>
                <Divider className={classes.dividerStyle} />
                <figure className={classes.logoFigureStyle}>
                  <img
                    alt="Dog Cave Logo"
                    src="https://dog-cave2134912939213.s3.us-east-2.amazonaws.com/Logo/your-logo.png"
                    className={classes.logoImgStyle}
                  />
                </figure>
                <Grid
                  container
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  align="center"
                  justify="center"
                >
                  <form className={classes.formStyle}>
                    <Grid
                      container
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                      align="center"
                      justify="center"
                    >
                      <Paper className={classes.subPaperStyle}>
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={12}
                          lg={12}
                          xl={12}
                          className={classes.textGridStyle}
                        >
                          <TextField
                            label="Username"
                            type="text"
                            required
                            onChange={(newUsername) =>
                              setUsername(newUsername.target.value)
                            }
                            helperText="Username must be at least between 5 and 20 characters"
                            value={username}
                            className={classes.textFieldStyle}
                          />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={12}
                          lg={12}
                          xl={12}
                          className={classes.textGridStyle}
                        >
                          <FormImageUploader
                            onChange={setImage}
                            emptyField={image === ""}
                            labelText="Upload Profile Image"
                            id="profileImage"
                            className={classes.textFieldStyle}
                          />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={12}
                          lg={12}
                          xl={12}
                          className={classes.textGridStyle}
                        >
                          <TextField
                            label="Password"
                            type="password"
                            required
                            onChange={(newPassword) =>
                              setPassword(newPassword.target.value)
                            }
                            value={password}
                            className={classes.textFieldStyle}
                          />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={12}
                          lg={12}
                          xl={12}
                          className={classes.textGridStyle}
                        >
                          <TextField
                            label="Confirm Password"
                            type="password"
                            required
                            onChange={(newPassword) =>
                              setConfirmPassword(newPassword.target.value)
                            }
                            value={confirmPassword}
                            className={classes.textFieldStyle}
                          />
                        </Grid>
                        <Grid
                          container
                          item
                          xs={12}
                          sm={12}
                          md={12}
                          lg={12}
                          xl={12}
                          className={classes.buttonGridStyle}
                        >
                          <Button
                            className={classes.buttonStyle}
                            disabled={!validationStatus}
                            type="submit"
                          >
                            Create Account
                          </Button>
                        </Grid>
                      </Paper>
                    </Grid>
                  </form>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </LoadingOverlay>
    </Fragment>
  );
};

export default SignUp;
