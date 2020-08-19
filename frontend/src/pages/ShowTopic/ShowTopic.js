import React, { Fragment, useState, useEffect } from "react";
import phoenixServer from "../../api/phoenixServer";
import LoadingOverlay from "react-loading-overlay";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import HeroHeader from "../../components/HeroHeader/HeroHeader";
import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router-dom";
import { useStyles } from "./ShowTopicStyles";

const ShowTopic = () => {
  const classes = useStyles();
  const params = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [showTopic, setShowTopic] = useState({});
  const [postsArray, setPostsArray] = useState([]);
  const [questionArray, setQuestionArray] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    phoenixServer.get(`/api/topics/${params.topicId}`).then(
      (response) => {
        const rawPostsArray = response.data.data.posts.map((postObject) => [
          postObject.id,
          postObject.content,
          postObject.is_question,
          postObject.inserted_at,
          postObject.updated_at,
          postObject.user,
        ]);

        setShowTopic(response.data.data);
        setPostsArray(rawPostsArray.filter((postArray) => !postArray[2]));
        setQuestionArray(rawPostsArray.find((postArray) => postArray[2]));
        setIsLoading(false);
      },
      (error) => {
        console.log(error);
        setIsLoading(false);
      }
    );
  }, [params]);

  return (
    <Fragment>
      <LoadingOverlay active={isLoading} spinner text="Loading Categories...">
        <div className={classes.mainDivStyle}>
          <HeroHeader
            imgUrl="https://dog-cave2134912939213.s3.us-east-2.amazonaws.com/ShowTopics/erik-mclean-laaW2GE07TY-unsplash.jpg"
            headerText={`Topic: ${showTopic.title}`}
          />
          <Grid
            container
            justify="center"
            className={classes.mainContainerStyle}
          >
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
              <Paper className={classes.paperStyle}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className={classes.gridItemStyle}
                >
                  <figure className={classes.figureStyle}>
                    <img
                      src="https://dog-cave2134912939213.s3.us-east-2.amazonaws.com/Logo/your-logo.png"
                      alt="Dog Cave logo"
                      className={classes.logoStyle}
                    />
                  </figure>
                </Grid>
                <Grid
                  container
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  justify="center"
                >
                  <Paper className={classes.subPaperStyle}>
                    <Grid
                      item
                      container
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                      className={classes.minFlexBasisStyle}
                    >
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        align="center"
                      >
                        <Typography
                          variant="h3"
                          className={classes.headerTextLeftStyle}
                        >
                          {showTopic.title}
                        </Typography>
                      </Grid>
                      <Divider className={classes.dividerStyle} />
                    </Grid>
                    <Grid
                      item
                      container
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                      className={classes.minFlexBasisStyle}
                      alignItems="center"
                    >
                      <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                        <img
                          alt="User profile"
                          src={
                            questionArray[5] !== undefined
                              ? questionArray[5].img_url
                              : null
                          }
                          className={classes.profieImgStyle}
                        />
                        <Typography variant="subtitle2">
                          {questionArray[5] !== undefined
                            ? questionArray[5].username
                            : null}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={7}
                        sm={7}
                        md={7}
                        lg={7}
                        xl={7}
                        align="left"
                      >
                        <Typography
                          variant="body1"
                          className={classes.bodyTextStyle}
                        >
                          {questionArray[1]}
                        </Typography>
                      </Grid>
                      <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                        <Typography
                          variant="subtitle2"
                          className={classes.timeTextStyle}
                        >
                          Posted: {questionArray[3]}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          className={classes.timeTextStyle}
                        >
                          Last Updated: {questionArray[4]}
                        </Typography>
                      </Grid>
                      <Divider className={classes.lightDividerStyle} />
                    </Grid>
                    {postsArray.map((postArray) => {
                      return (
                        <Fragment key={postArray[0]}>
                          <Grid
                            item
                            container
                            xs={12}
                            sm={12}
                            md={12}
                            lg={12}
                            xl={12}
                            className={classes.minFlexBasisStyle}
                            alignItems="center"
                          >
                            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                              <img
                                alt="User profile"
                                src={postArray[5].img_url}
                                className={classes.profieImgStyle}
                              />
                              <Typography variant="subtitle2">
                                {postArray[5].username}
                              </Typography>
                            </Grid>
                            <Grid
                              item
                              xs={7}
                              sm={7}
                              md={7}
                              lg={7}
                              xl={7}
                              align="left"
                            >
                              <Typography
                                variant="body1"
                                className={classes.bodyTextStyle}
                              >
                                {postArray[1]}
                              </Typography>
                            </Grid>
                            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                              <Typography
                                variant="subtitle2"
                                className={classes.timeTextStyle}
                              >
                                Posted: {postArray[3]}
                              </Typography>
                              <Typography
                                variant="subtitle2"
                                className={classes.timeTextStyle}
                              >
                                Last Updated: {postArray[4]}
                              </Typography>
                            </Grid>
                            <Divider className={classes.lightDividerStyle} />
                          </Grid>
                        </Fragment>
                      );
                    })}
                  </Paper>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </LoadingOverlay>
    </Fragment>
  );
};

export default ShowTopic;
