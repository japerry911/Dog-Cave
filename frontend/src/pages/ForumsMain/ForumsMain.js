import React, { Fragment } from "react";
import HeroHeader from "../../components/HeroHeader/HeroHeader";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./ForumsMainStyles";

const ForumsMain = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.mainDivStyle}>
        <HeroHeader
          imgUrl="https://dog-cave2134912939213.s3.us-east-2.amazonaws.com/ForumMain/agustina-heit-tC3hq_XAfv0-unsplash.jpg"
          headerText="Dog Cave Forums"
          pushDown
        />
        <Grid container justify="center" className={classes.mainContainerStyle}>
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
                <Paper className={classes.subPaperStyle}></Paper>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default ForumsMain;
