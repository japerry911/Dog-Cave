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
            imgUrl="https://dog-cave2134912939213.s3.us-east-2.amazonaws.com/ShowTopics/fudo-jahic-PQf2Vv7xWjo-unsplash.jpg"
            headerText={`${showTopic.title} - Topics`}
            pushDown
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
                    >
                      <Grid
                        item
                        xs={9}
                        sm={9}
                        md={9}
                        lg={9}
                        xl={9}
                        align="left"
                      >
                        <Typography
                          variant="h6"
                          className={classes.headerTextStyle}
                        >
                          {questionArray[1]}
                        </Typography>
                      </Grid>
                      <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                        <Typography
                          variant="h5"
                          className={classes.headerTextStyle}
                        >
                          {questionArray[2]}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      container
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                      justify="center"
                      className={classes.minFlexBasisStyle}
                    >
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
                          >
                            <Grid
                              item
                              xs={9}
                              sm={9}
                              md={9}
                              lg={9}
                              xl={9}
                              align="left"
                            >
                              <Typography
                                variant="h6"
                                className={classes.headerTextStyle}
                              >
                                {postArray[1]}
                              </Typography>
                            </Grid>
                            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                              <Typography
                                variant="h5"
                                className={classes.headerTextStyle}
                              >
                                {postArray[2]}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid
                            item
                            container
                            xs={12}
                            sm={12}
                            md={12}
                            lg={12}
                            xl={12}
                            justify="center"
                            className={classes.minFlexBasisStyle}
                          >
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
