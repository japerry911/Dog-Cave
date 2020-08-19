import React, { Fragment, useEffect, useState } from "react";
import HeroHeader from "../../components/HeroHeader/HeroHeader";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import phoenixServer from "../../api/phoenixServer";
import LoadingOverlay from "react-loading-overlay";
import { Link } from "react-router-dom";
import { useStyles } from "./ForumsMainStyles";

const ForumsMain = () => {
  const classes = useStyles();

  const [categoriesArray, setCategoriesArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    phoenixServer.get("/api/categories").then(
      (response) => {
        setCategoriesArray(
          response.data.data.map((categoryObject) => [
            categoryObject.name,
            categoryObject.description,
            categoryObject.topics.length,
            categoryObject.id,
          ])
        );
        setIsLoading(false);
      },
      (error) => {
        console.log(error);
        setIsLoading(false);
      }
    );
  }, []);

  return (
    <Fragment>
      <LoadingOverlay active={isLoading} spinner text="Loading Categories...">
        <div className={classes.mainDivStyle}>
          <HeroHeader
            imgUrl="https://dog-cave2134912939213.s3.us-east-2.amazonaws.com/ForumMain/agustina-heit-tC3hq_XAfv0-unsplash.jpg"
            headerText="Dog Cave Forums"
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
                      justify="center"
                    >
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Typography
                          variant="h4"
                          className={classes.headerTextStyle}
                        >
                          Category:
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Typography
                          variant="h4"
                          className={classes.headerTextStyle}
                        >
                          Number of Topics:
                        </Typography>
                      </Grid>
                      <Divider className={classes.dividerStyle} />
                    </Grid>
                    {categoriesArray.map((categoryArray) => {
                      return (
                        <Fragment key={categoryArray[3]}>
                          <Grid
                            item
                            container
                            xs={12}
                            sm={12}
                            md={12}
                            lg={12}
                            xl={12}
                            justify="center"
                            alignItems="center"
                          >
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                              <Typography
                                variant="h5"
                                className={classes.headerTextStyle}
                                component={Link}
                                to={`/forums/categories/${categoryArray[3]}`}
                              >
                                {categoryArray[0]}
                              </Typography>
                              <Typography
                                variant="body2"
                                className={classes.subtitleTextStyle}
                              >
                                {categoryArray[1]}
                              </Typography>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                              <Typography variant="h5">
                                {categoryArray[2]}
                              </Typography>
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
                            >
                              <Divider className={classes.lightDividerStyle} />
                            </Grid>
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

export default ForumsMain;
