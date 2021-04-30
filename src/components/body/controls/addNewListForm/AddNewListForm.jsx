import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  TextField: {
    marginLeft: theme.spacing(2),
    minWidth: 120,
  },
  Button: {
    marginLeft: theme.spacing(1),
  },
}));

const AddNewListForm = (props) => {
  const [newListName, setNewListName] = useState("");
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => history.push("/");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.onChange(event);
        setNewListName("");
        handleClick();
      }}
    >
      <TextField
        value={newListName}
        id="addListName"
        onChange={(event) => setNewListName(event.target.value)}
        className={classes.TextField}
        placeholder="Name your new list"
        required
      />
      <Button type="submit" className={classes.Button} variant="contained">
        Add list
      </Button>
      <Button
        className={classes.Button}
        variant="outlined"
        onClick={handleClick}
      >
        Cancel
      </Button>
    </form>
  );
};

export default AddNewListForm;
