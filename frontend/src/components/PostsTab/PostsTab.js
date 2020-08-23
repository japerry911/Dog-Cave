import React from "react";
import { useStyles } from "./PostsTabStyles";

const PostsTab = ({ posts }) => {
  const classes = useStyles();
  console.log(posts);
  return (
    <div>
      <h1>Posts Tab</h1>
    </div>
  );
};

export default PostsTab;
