import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import { useStyles } from "./PostsTabStyles";

const PostsTab = ({ posts }) => {
  const classes = useStyles();
  console.log(posts);
  return (
    <Grid container direction="column" className={classes.gridContainerStyle}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography variant="h6" className={classes.headerTextStyle}>
          Posts:
        </Typography>
      </Grid>
      <Divider className={classes.dividerStyle} />
      <Grid container item xs={12} sm={12} md={12} lg={12} xl={12}>
        {!posts
          ? null
          : posts.map((postObject) => {
              return (
                <Fragment key={postObject.id}>
                  <Grid
                    container
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    className={classes.postGridContainerStyle}
                    component={Link}
                    to={`/forums/categories/${postObject.category_id}/topics/${postObject.topic_id}`}
                    alignItems="center"
                  >
                    <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                      <Typography
                        variant="subtitle2"
                        className={classes.postContentTextStyle}
                      >
                        {postObject.topic_title}
                      </Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                      <Typography
                        variant="body2"
                        className={classes.postContentTextStyle}
                      >
                        {postObject.content.substring(0, 25).concat("...")}
                      </Typography>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                      <Typography
                        variant="subtitle1"
                        className={classes.dateTextStyle}
                      >
                        {postObject.inserted_at}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Divider className={classes.lightDividerStyle} />
                    </Grid>
                  </Grid>
                </Fragment>
              );
            })}
      </Grid>
    </Grid>
  );
};

export default PostsTab;
