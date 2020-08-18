import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import ContactUs from "../pages/ContactUs/ContactUs";
import ForumsMain from "../pages/ForumsMain/ForumsMain";
import About from "../pages/About/About";

export default () => {
  return (
    <Fragment>
      <ScrollToTop />
      <Route exact path="/" component={Home} />
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/contact-us" component={ContactUs} />
      <Route exact path="/forums" component={ForumsMain} />
      <Route exact path="/about" component={About} />
    </Fragment>
  );
};
