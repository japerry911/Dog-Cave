import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { handleOpen, handleClose } from "../../redux/actions/snackbarActions";
import { useStyles } from "./PostFormDialogStyles";

const PostFormDialog = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const userObject = useSelector((state) => state.auth.user);

  return (
    <div>
      <IconButton
        className={classes.iconButtonStyle}
        onClick={() => setOpen(true)}
      >
        <AddIcon />
      </IconButton>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Topic</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            type="text"
            label="Topic Title"
            helperText="Topic Title - Limit 90 Characters"
          />
          <TextField
            fullWidth
            type="text"
            label="Topic Content"
            helperText="Topic Content - Make sure to frame it as a question"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)} color="primary">
            Create Topic
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PostFormDialog;
