import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { CloudUploadOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: theme.spacing(3),
  },
}));

const UploadButton = () => {
  const classes = useStyles();

  const onChange = () => {
    console.log("hello universe");
  };

  return (
    <>
      <input
        color="primary"
        accept="image/*"
        type="file"
        onChange={onChange}
        id="icon-button-file"
        style={{ display: "none" }}
      />
      <label htmlFor="icon-button-file">
        <Button
          className={classes.button}
          variant="outlined"
          size="large"
          startIcon={<CloudUploadOutlined />}
        >
          Upload Video
        </Button>
      </label>
    </>
  );
};
export default UploadButton;
