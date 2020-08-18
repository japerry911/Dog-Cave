import React, { Fragment } from "react";
import HeroHeader from "../../components/HeroHeader/HeroHeader";
import { useStyles } from "./ForumsMainStyles";

const ForumsMain = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <HeroHeader
        imgUrl="https://dog-cave2134912939213.s3.us-east-2.amazonaws.com/ForumMain/agustina-heit-tC3hq_XAfv0-unsplash.jpg"
        headerText="Dog Cave Forums"
        pushDown
      />
    </Fragment>
  );
};

export default ForumsMain;
