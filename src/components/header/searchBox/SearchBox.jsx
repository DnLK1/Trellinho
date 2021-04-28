import React from "react";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  TextField: {
    border: "none",
    borderRadius: "5px",
    overflow: "hidden",
    color: "white",
    backgroundColor: "#262626",
    "&::placeholder": {
      color: "white",
      opacity: "80%",
    },
  },
}));

const SearchBox = (props) => {
  const classes = useStyles();

  return (
    <TextField
      InputProps={{
        classes: {
          input: classes.TextField,
        },
      }}
      size="small"
      placeholder={props.disabled === true ? "Disabled" : "Search..."}
      disableunderline="true"
      variant="outlined"
      disabled={props.disabled}
    />
  );
};

export default SearchBox;
