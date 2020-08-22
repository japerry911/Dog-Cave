import React, { useEffect } from "react";
import HeroHeader from "../../components/HeroHeader/HeroHeader";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import MyTabs from "../../components/MyTabs/MyTabs";
import { useStyles } from "./ProfileStyles";

const Profile = () => {
  const classes = useStyles();

  // const userObject = useSelector(state => state.auth.user);
  const userObject = {
    id: 85,
    img_url:
      "https://dog-cave2134912939213.s3.us-east-2.amazonaws.com/ProfilePictures/sheri-hooley-KUm8K3EOaoE-unsplash.jpg",
    username: "General",
  };

  return (
    <div className={classes.mainDivStyle}>
      <HeroHeader
        headerText={`Welcome Back ${userObject.username}`}
        imgUrl="https://dog-cave2134912939213.s3.us-east-2.amazonaws.com/Profile/aaron-lee-vuM_W8S7VFE-unsplash.jpg"
      />
      <Grid container justify="center" className={classes.mainContainerStyle}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
          <Paper className={classes.paperStyle}>
            <Typography variant="h2" className={classes.titleStyle}>
              {userObject.username}
            </Typography>
            <Divider className={classes.dividerStyle} />
            <figure className={classes.logoFigureStyle}>
              <img
                alt="Dog Cave Logo"
                src={userObject.img_url}
                className={classes.logoImgStyle}
              />
            </figure>
            <MyTabs />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
