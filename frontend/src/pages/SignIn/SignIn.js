import React, { useState, Fragment, useEffect } from "react";
import LoadingOverlay from "react-loading-overlay";
import HeroHeader from "../../components/HeroHeader/HeroHeader";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../../redux/actions/authActions";
import { useStyles } from "./SignInStyles";

const SignIn = () => {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validationStatus, setValidationStatus] = useState(false);

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);

  useEffect(() => {
    setValidationStatus(username && password);
  }, [username, password]);

  const onSubmit = async (event) => {
    event.preventDefault();

    await dispatch(signIn(username, password));
  };

  return (
    <Fragment>
      <LoadingOverlay active={isLoading} spinner text="Signing in...">
        <div className={classes.mainDivStyle}>
          <HeroHeader
            headerText="Sign In"
            imgUrl="https://dog-cave2134912939213.s3.us-east-2.amazonaws.com/SignIn/ayla-verschueren-mnHo8JI0Paw-unsplash.jpg"
          />
          <Grid
            container
            justify="center"
            className={classes.mainContainerStyle}
          >
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
              <Paper className={classes.paperStyle}>
                <Typography variant="h2" className={classes.titleStyle}>
                  Sign In
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
                  <form className={classes.formStyle} onSubmit={onSubmit}>
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
                          container
                          item
                          xs={12}
                          sm={12}
                          md={12}
                          lg={12}
                          xl={12}
                          className={classes.buttonGridStyle}
                        >
                          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                            <Button
                              className={classes.buttonStyle}
                              component={Link}
                              to="/sign-up"
                            >
                              Create Account
                            </Button>
                          </Grid>
                          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                            <Button
                              className={classes.buttonStyle}
                              disabled={!validationStatus}
                              type="submit"
                            >
                              Sign In
                            </Button>
                          </Grid>
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

export default SignIn;
