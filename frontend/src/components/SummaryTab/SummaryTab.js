import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { useStyles } from "./SummaryTabStyles.js";

const SummaryTab = ({ posts }) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.gridContainerStyle}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography variant="h6" className={classes.headerTextStyle}>
          General Stats:
        </Typography>
        <Divider className={classes.dividerStyle} />
      </Grid>
      <Grid item xs={8} sm={8} md={8} lg={8} xl={8} align="left">
        <Typography variant="body2" className={classes.textStyle}>
          Total Topics Started:{" "}
          <strong>
            {!posts ? 0 : posts.filter((post) => post.is_question).length}
          </strong>
        </Typography>
      </Grid>
      <Grid item xs={8} sm={8} md={8} lg={8} xl={8} align="left">
        <Typography variant="body2" className={classes.textStyle}>
          Total Posts: <strong>{!posts ? 0 : posts.length}</strong>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SummaryTab;
