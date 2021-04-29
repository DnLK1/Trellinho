import React from "react";
import AddButton from "./addButton/AddButton";
import FilterTag from "./filterTag/FilterTag";
import { Switch, Route, useHistory } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  TextField: {
    marginLeft: theme.spacing(2),
    minWidth: 120,
  },
  Button: {
    marginLeft: theme.spacing(1),
  },
}));

const Controls = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => history.push("/");

  return (
    <div className="container controls">
      <AddButton addButtonName="Add list" onClick="/add" />
      <FilterTag />
      <Switch>
        <Route path="/add">
          <TextField
            className={classes.TextField}
            placeholder="Name your new list"
          />
          <Button className={classes.Button} variant="contained">
            Add list
          </Button>
          <Button
            className={classes.Button}
            variant="outlined"
            onClick={handleClick}
          >
            Cancel
          </Button>
        </Route>
      </Switch>
    </div>
  );
};

export default Controls;
