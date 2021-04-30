import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { useLocation } from "react-router-dom";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  formControl1: {
    marginLeft: theme.spacing(1),
    minWidth: 120,
  },
  formControl2: {
    marginLeft: theme.spacing(1),
    minWidth: 120,
    opacity: 0.5,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const FilterTag = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div>
      <FormControl
        variant="outlined"
        className={
          location.pathname === "/add"
            ? classes.formControl2
            : classes.formControl1
        }
        disabled={location.pathname === "/add" ? true : false}
      >
        <InputLabel>Filter tags</InputLabel>
        <Select label="Filter tags">
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterTag;
