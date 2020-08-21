import React, { Fragment } from "react";
import { useStyles } from "./FormImageUploaderStyles";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";

const FormImageUploader = ({ labelText, onChange, id, emptyField }) => {
  const classes = useStyles();

  const inputElement = document.getElementById(id);
  if (emptyField && inputElement) {
    inputElement.value = "";
  }

  return (
    <Fragment>
      <Typography variant="h6" className={classes.labelStyle}>
        {labelText}
      </Typography>
      <Input
        type="file"
        onChange={onChange}
        id={id}
        className={classes.inputStyle}
      />
    </Fragment>
  );
};

export default FormImageUploader;
