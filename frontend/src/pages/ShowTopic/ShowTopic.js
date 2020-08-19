import React from "react";
import { useParams } from "react-router-dom";
import { useStyles } from "./ShowTopicStyles";

const ShowTopic = () => {
  const classes = useStyles();
  const params = useParams();

  return (
    <div>
      <h1>Show Topic - {params.topicId}</h1>
    </div>
  );
};

export default ShowTopic;
