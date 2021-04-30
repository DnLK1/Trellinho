import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./style.css";

const EditableTitle = ({ defaultText, editableTitleMargin, setName }) => {
  const useStyles = makeStyles((theme) => ({
    input: {
      fontWeight: "600",
      marginLeft: editableTitleMargin,
    },
    underline: {
      "&&&:before": {
        borderBottom: "none",
      },
      "&&:after": {
        borderBottom: "none",
      },
    },
  }));

  const classes = useStyles();

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <TextField
      InputProps={{ classes }}
      value={defaultText}
      onChange={handleChange}
    />
  );
};

export default EditableTitle;
