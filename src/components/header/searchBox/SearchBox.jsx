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
    backgroundColor: "#272a2b",
    "&::placeholder": {
      color: "white",
      opacity: "80%",
    },
  },
}));

const SearchBox = () => {
  const classes = useStyles();

  return (
    <TextField
      InputProps={{
        classes: {
          input: classes.TextField,
        },
      }}
      size="small"
      placeholder="Busca..."
      disableUnderline="true"
      variant="outlined"
    />
  );
};

export default SearchBox;
