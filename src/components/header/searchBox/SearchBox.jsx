import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import HandleKeywordSearch from "../../../contexts/HandleKeywordSearch";
import "./style.css";

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

const SearchBox = ({ disabled }) => {
  const { keyword, setKeyword } = useContext(HandleKeywordSearch);
  const classes = useStyles();

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <TextField
      value={keyword}
      onChange={handleChange}
      InputProps={{
        classes: {
          input: classes.TextField,
        },
      }}
      size="small"
      placeholder={disabled === true ? "Disabled" : "Search cards..."}
      disableunderline="true"
      variant="outlined"
      disabled={disabled}
    />
  );
};

export default SearchBox;
