import React, { useEffect } from "react";
import HeroHeader from "../../components/HeroHeader/HeroHeader";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../redux/actions/authActions";
import MyTabs from "../../components/MyTabs/MyTabs";
import SummaryTab from "../../components/SummaryTab/SummaryTab";
import { useStyles } from "./ProfileStyles";

const Profile = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  // const userObject = useSelector(state => state.auth.user);
  const userObject = {
    id: 85,
    img_url:
      "https://dog-cave2134912939213.s3.us-east-2.amazonaws.com/ProfilePictures/sheri-hooley-KUm8K3EOaoE-unsplash.jpg",
    username: "General",
    token:
      "SFMyNTY.g2gDdAAAAAxkAAhfX21ldGFfX3QAAAAGZAAKX19zdHJ1Y3RfX2QAG0VsaXhpci5FY3RvLlNjaGVtYS5NZXRhZGF0YWQAB2NvbnRleHRkAANuaWxkAAZwcmVmaXhkAANuaWxkAAZzY2hlbWFkABlFbGl4aXIuQmFja2VuZC5Vc2Vycy5Vc2VyZAAGc291cmNlbQAAAAV1c2Vyc2QABXN0YXRlZAAGbG9hZGVkZAAKX19zdHJ1Y3RfX2QAGUVsaXhpci5CYWNrZW5kLlVzZXJzLlVzZXJkAAthdXRoX3Rva2Vuc3QAAAAEZAAPX19jYXJkaW5hbGl0eV9fZAAEbWFueWQACV9fZmllbGRfX2QAC2F1dGhfdG9rZW5zZAAJX19vd25lcl9fZAAZRWxpeGlyLkJhY2tlbmQuVXNlcnMuVXNlcmQACl9fc3RydWN0X19kACFFbGl4aXIuRWN0by5Bc3NvY2lhdGlvbi5Ob3RMb2FkZWRkAAJpZGFVZAAHaW1nX3VybG0AAABuaHR0cHM6Ly9kb2ctY2F2ZTIxMzQ5MTI5MzkyMTMuczMudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vUHJvZmlsZVBpY3R1cmVzL3NoZXJpLWhvb2xleS1LVW04SzNFT2FvRS11bnNwbGFzaC5qcGdkAAtpbnNlcnRlZF9hdHQAAAAJZAAKX19zdHJ1Y3RfX2QAFEVsaXhpci5OYWl2ZURhdGVUaW1lZAAIY2FsZW5kYXJkABNFbGl4aXIuQ2FsZW5kYXIuSVNPZAADZGF5YRVkAARob3VyYRFkAAttaWNyb3NlY29uZGgCYQBhAGQABm1pbnV0ZWEAZAAFbW9udGhhCGQABnNlY29uZGESZAAEeWVhcmIAAAfkZAAIcGFzc3dvcmRkAANuaWxkAA1wYXNzd29yZF9oYXNobQAAAIMkcGJrZGYyLXNoYTUxMiQxNjAwMDAkMXllM1d1WnV5emxDaFZXZzNxYmF2USR5aTNBMWJkL0hSNzhzWC5XbXRLMjVneC9udnhvZjJUcmVXdmcvczcxSXk2N1d2WUw0a1FHRlJZeU5xeUVXSXVxSllrZm9YT1NSOHMwVHh1aEhjenZEd2QABXBvc3RzdAAAAARkAA9fX2NhcmRpbmFsaXR5X19kAARtYW55ZAAJX19maWVsZF9fZAAFcG9zdHNkAAlfX293bmVyX19kABlFbGl4aXIuQmFja2VuZC5Vc2Vycy5Vc2VyZAAKX19zdHJ1Y3RfX2QAIUVsaXhpci5FY3RvLkFzc29jaWF0aW9uLk5vdExvYWRlZGQABnRvcGljc3QAAAAEZAAPX19jYXJkaW5hbGl0eV9fZAAEbWFueWQACV9fZmllbGRfX2QABnRvcGljc2QACV9fb3duZXJfX2QAGUVsaXhpci5CYWNrZW5kLlVzZXJzLlVzZXJkAApfX3N0cnVjdF9fZAAhRWxpeGlyLkVjdG8uQXNzb2NpYXRpb24uTm90TG9hZGVkZAAKdXBkYXRlZF9hdHQAAAAJZAAKX19zdHJ1Y3RfX2QAFEVsaXhpci5OYWl2ZURhdGVUaW1lZAAIY2FsZW5kYXJkABNFbGl4aXIuQ2FsZW5kYXIuSVNPZAADZGF5YRVkAARob3VyYRFkAAttaWNyb3NlY29uZGgCYQBhAGQABm1pbnV0ZWEAZAAFbW9udGhhCGQABnNlY29uZGESZAAEeWVhcmIAAAfkZAAIdXNlcm5hbWVtAAAAB0dlbmVyYWxuBgCgT0McdAFiAAFRgA.ocbK7Rbc_dfx6KjYugiq8EsWikYCaOWvJzA-PWru2-0",
  };

  useEffect(() => {
    const response = dispatch(getUser(userObject.id, userObject.token));
  }, [dispatch]);

  return (
    <div className={classes.mainDivStyle}>
      <HeroHeader
        headerText={`Welcome Back ${userObject.username}`}
        imgUrl="https://dog-cave2134912939213.s3.us-east-2.amazonaws.com/Profile/aaron-lee-vuM_W8S7VFE-unsplash.jpg"
      />
      <Grid container justify="center" className={classes.mainContainerStyle}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
          <Paper className={classes.paperStyle}>
            <Typography variant="h2" className={classes.titleStyle}>
              {userObject.username}
            </Typography>
            <Divider className={classes.dividerStyle} />
            <figure className={classes.profileFigureStyle}>
              <img
                alt="Profile"
                src={userObject.img_url}
                className={classes.profileImgStyle}
              />
            </figure>
            <MyTabs content={[<SummaryTab />]} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
