import React, { Fragment, useState } from "react";
import HeroHeader from "../../components/HeroHeader/HeroHeader";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import LoadingOverlay from "react-loading-overlay";
import { useStyles } from "./ContactUsStyles";

const ContactUs = () => {
  const classes = useStyles();

  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Fragment>
      <LoadingOverlay active={isLoading} spinner text="Sending Message">
        <div className={classes.mainDivStyle}>
          <HeroHeader
            headerText="CONTACT US"
            imgUrl="https://dog-cave2134912939213.s3.us-east-2.amazonaws.com/ContactUs/jamie-street-s9Tf1eBDFqw-unsplash.jpg"
          />
          <Grid
            container
            justify="center"
            className={classes.mainContainerStyle}
          >
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
              <Paper className={classes.paperStyle}>
                <Typography variant="h2" className={classes.titleStyle}>
                  CONTACT US
                </Typography>
                <Divider className={classes.dividerStyle} />
                <figure className={classes.logoFigureStyle}>
                  <img
                    alt="Skylord's Timekeeping Logo"
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
                            label="Email"
                            type="text"
                            required
                            onChange={(newEmail) =>
                              setEmail(newEmail.target.value)
                            }
                            helperText="Email must be a valid email address"
                            value={email}
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
                            label="Subject"
                            type="text"
                            required
                            onChange={(newSubject) =>
                              setSubject(newSubject.target.value)
                            }
                            helperText="Password must contain an Uppercase letter, Lowercase letter, Number, and be at least 7 characters long"
                            value={subject}
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
                          <FormControl className={classes.formControlStyle}>
                            <InputLabel
                              shrink={message !== ""}
                              style={{ position: "absolute" }}
                            >
                              &nbsp;&nbsp;Message*
                            </InputLabel>
                            <TextareaAutosize
                              required
                              onChange={(newMessage) =>
                                setMessage(newMessage.target.value)
                              }
                              rowsMin={15}
                              rowsMax={15}
                              className={classes.bigTextFieldStyle}
                            />
                          </FormControl>
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
                            disabled={!(email && subject && message)}
                            type="submit"
                          >
                            Send Message
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

export default ContactUs;
