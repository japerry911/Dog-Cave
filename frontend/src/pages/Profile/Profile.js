import React, { useEffect, Fragment } from "react";
import HeroHeader from "../../components/HeroHeader/HeroHeader";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../redux/actions/authActions";
import MyTabs from "../../components/MyTabs/MyTabs";
import SummaryTab from "../../components/SummaryTab/SummaryTab";
import PostsTab from "../../components/PostsTab/PostsTab";
import LoadingOverlay from "react-loading-overlay";
import { handleOpen } from "../../redux/actions/snackbarActions";
import { useStyles } from "./ProfileStyles";

const Profile = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const userObject = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const isLoading = useSelector((state) => state.auth.isLoading);

  useEffect(() => {
    dispatch(getUser(userObject.id, token)).then(
      (response) => {
        if (response) {
          dispatch(
            handleOpen({
              type: "success",
              message: "Profile fetched successfully",
            })
          );
        } else {
          dispatch(
            handleOpen({
              type: "error",
              message: "Profile fetch failed, try reloading the page",
            })
          );
        }
      },
      (error) => {
        dispatch(handleOpen({ type: "error", message: error }));
      }
    );
  }, [dispatch, userObject.id, token]);

  return (
    <Fragment>
      <LoadingOverlay active={isLoading} spinner text="Fetching Profile...">
        <div className={classes.mainDivStyle}>
          <HeroHeader
            headerText={`Welcome Back ${userObject.username}`}
            imgUrl="https://dog-cave2134912939213.s3.us-east-2.amazonaws.com/Profile/aaron-lee-vuM_W8S7VFE-unsplash.jpg"
          />
          <Grid
            container
            justify="center"
            className={classes.mainContainerStyle}
          >
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
              <Paper className={classes.paperStyle}>
                <Typography variant="h2" className={classes.titleStyle}>
                  {userObject.username}
                </Typography>
                <Divider className={classes.dividerStyle} />
                <figure className={classes.profileFigureStyle}>
                  <img
                    alt="Profile"
                    src={userObject.img_url}
                    className={classes.profileImgStyle}
                  />
                </figure>
                {isLoading ? null : (
                  <Fragment>
                    <MyTabs
                      content={[
                        <SummaryTab posts={userObject.posts || undefined} />,
                        <PostsTab posts={userObject.posts || undefined} />,
                      ]}
                    />
                  </Fragment>
                )}
              </Paper>
            </Grid>
          </Grid>
        </div>
      </LoadingOverlay>
    </Fragment>
  );
};

export default Profile;
