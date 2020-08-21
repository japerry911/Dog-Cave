import React, { Fragment, useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LoadingOverlay from "react-loading-overlay";
import HeroHeader from "../../components/HeroHeader/HeroHeader";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormImageUploader from "../../components/FormImageUploader/FormImageUploader";
import { handleOpen, handleClose } from "../../redux/actions/snackbarActions";
import { useDispatch } from "react-redux";
import { useStyles } from "./SignUpStyles";

const SignUp = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState("");
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [usernameValidation, setUsernameValidation] = useState(false);
  const [imageValidation, setImageValidation] = useState(true);

  useEffect(() => {
    if (
      password === confirmPassword &&
      /^(?=.*[0-9]+.*)(?=.*[a-z]+.*)(?=.*[A-Z]+.*)(.*){7,}$/.test(password)
    ) {
      dispatch(handleClose());
      setPasswordValidation(true);
    } else {
      setPasswordValidation(false);
      if (password === confirmPassword && password.length > 0) {
        dispatch(
          handleOpen({
            type: "error",
            message:
              "Password must contain 1 Uppercase/Lowercase letter, 1 Number, and be at least 7 characters long",
          })
        );
      } else if (
        password.length > 0 &&
        confirmPassword.length > 0 &&
        password !== confirmPassword
      ) {
        dispatch(
          handleOpen({ type: "error", message: "Passwords do not match" })
        );
      }
    }
  }, [dispatch, password, confirmPassword]);

  useEffect(() => {
    if (username.length >= 5 && username.length <= 20) {
      dispatch(handleClose());
      setUsernameValidation(true);
    } else if (username.length > 0) {
      dispatch(
        handleOpen({
          type: "error",
          message: "Username must be between 5 and 20 characters long",
        })
      );
      setUsernameValidation(false);
    }
  }, [username, dispatch]);

  useEffect(() => {
    if (image.type && !/^image.+/.test(image.type)) {
      dispatch(
        handleOpen({
          type: "error",
          message: "Unreadable file, please use an image file",
        })
      );
      setImageValidation(false);
    } else {
      dispatch(handleClose());
      setImageValidation(true);
    }
  }, [image, dispatch]);

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
                            onChange={(newImage) =>
                              setImage(newImage.target.files[0])
                            }
                            emptyField={image === ""}
                            labelText="Upload Profile Image (Optional)"
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
                            helperText="Password must contain an Uppercase letter, Lowercase letter, Number, and be at least 7 characters long"
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
                            disabled={
                              !(
                                usernameValidation &&
                                passwordValidation &&
                                imageValidation
                              )
                            }
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
