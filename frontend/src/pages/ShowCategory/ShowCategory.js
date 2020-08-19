import React, { Fragment, useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import HeroHeader from "../../components/HeroHeader/HeroHeader";
import LoadingOverlay from "react-loading-overlay";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import phoenixServer from "../../api/phoenixServer";
import { Link, useParams } from "react-router-dom";
import { useStyles } from "./ShowCategoryStyles";

const ShowCategory = () => {
  const classes = useStyles();
  const params = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [topicsArray, setTopicsArray] = useState([]);
  const [showCategory, setShowCategory] = useState({});

  useEffect(() => {
    setIsLoading(true);
    phoenixServer.get(`/api/categories/${params.id}`).then(
      (response) => {
        setShowCategory(response.data.data);
        setTopicsArray(
          response.data.data.topics.map((topicObject) => [
            topicObject.id,
            topicObject.title,
            topicObject.posts.length,
          ])
        );
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
            imgUrl="https://dog-cave2134912939213.s3.us-east-2.amazonaws.com/ShowCategories/bear-lissimo-iMk78NZirCw-unsplash.jpg"
            headerText={`${showCategory.name} - Topics`}
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
                        xs={9}
                        sm={9}
                        md={9}
                        lg={9}
                        xl={9}
                        align="left"
                      >
                        <Typography
                          variant="h4"
                          className={classes.headerTextLeftStyle}
                        >
                          Topic:
                        </Typography>
                      </Grid>
                      <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                        <Typography
                          variant="h4"
                          className={classes.headerTextStyle}
                        >
                          Number of Posts:
                        </Typography>
                      </Grid>
                      <Divider className={classes.dividerStyle} />
                    </Grid>
                    {topicsArray.map((topicArray) => {
                      return (
                        <Fragment key={topicArray[0]}>
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
                                component={Link}
                                to={`/forums/categories/${showCategory.id}/topics/${topicArray[0]}`}
                              >
                                {topicArray[1]}
                              </Typography>
                            </Grid>
                            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                              <Typography
                                variant="h5"
                                className={classes.headerTextStyle}
                              >
                                {topicArray[2]}
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

export default ShowCategory;
