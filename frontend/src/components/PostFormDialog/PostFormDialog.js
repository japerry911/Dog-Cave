import React, { Fragment, useState, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { handleOpen } from "../../redux/actions/snackbarActions";
import { useParams, useHistory } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";
import phoenixServer from "../../api/phoenixServer";

const PostFormDialog = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [validationStatus, setValidationStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const userObject = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    setValidationStatus(
      title.length > 0 &&
        content.length > 0 &&
        title.length <= 90 &&
        content.length <= 1000
    );
  }, [title, content]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = {
      topic: {
        title,
        user_id: userObject.id,
        category_id: params.id,
      },
      post: {
        content,
        user_id: userObject.id,
        is_question: true,
      },
    };

    try {
      const response = await phoenixServer.post(
        "/api/authed/topics",
        formData,
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );
      dispatch(
        handleOpen({ type: "success", message: "Successfully posted topic" })
      );
      setIsLoading(false);
      history.push(
        `/forums/categories/${response.data.data.category_id}/topics/${response.data.data.id}`
      );
    } catch (error) {
      dispatch(
        handleOpen({
          type: "error",
          message: `Error Creating Topic - ${error}`,
        })
      );
      setIsLoading(false);
    }
  };

  return (
    <Fragment>
      <LoadingOverlay active={isLoading} spinner text="Creating Topic...">
        <div>
          <IconButton onClick={() => setOpen(true)}>
            <AddIcon />
          </IconButton>
          <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>Add New Topic</DialogTitle>
            <form onSubmit={onSubmit}>
              <DialogContent>
                <TextField
                  fullWidth
                  type="text"
                  label="Topic Title"
                  helperText="Topic Title - Limit 90 Characters"
                  value={title}
                  onChange={(newTitle) => setTitle(newTitle.target.value)}
                />
                <TextField
                  fullWidth
                  type="text"
                  label="Topic Content"
                  helperText="Topic Content - Make sure to frame it as a question - Limit 1,000 Characters"
                  value={content}
                  onChange={(newContent) => setContent(newContent.target.value)}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpen(false)} color="primary">
                  Cancel
                </Button>
                <Button
                  onClick={() => setOpen(false)}
                  color="primary"
                  disabled={!validationStatus}
                  type="submit"
                >
                  Create Topic
                </Button>
              </DialogActions>
            </form>
          </Dialog>
        </div>
      </LoadingOverlay>
    </Fragment>
  );
};

export default PostFormDialog;
