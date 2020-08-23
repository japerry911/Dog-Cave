import React, { useState } from "react";
import { useStyles } from "./MyTabsStyles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "../TabPanel/TabPanel";

const MyTabs = ({ content }) => {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="General Stats" />
          <Tab label="Posts" />
          <Tab label="Change Password" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {content[0]}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {content[1]}
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
};

export default MyTabs;
