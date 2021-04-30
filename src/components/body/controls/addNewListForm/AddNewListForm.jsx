import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import HandleNewList from "../../../../contexts/HandleNewList";

const useStyles = makeStyles((theme) => ({
  TextField: {
    marginLeft: theme.spacing(2),
    minWidth: 120,
  },
  Button: {
    marginLeft: theme.spacing(1),
  },
}));

const AddNewListForm = () => {
  const [newListName, setNewListName] = useState("");
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => history.push("/");
  const handleNewList = useContext(HandleNewList);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleNewList(event);
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
        onClick={handleClick.bind(this)}
      >
        Cancel
      </Button>
    </form>
  );
};

export default AddNewListForm;
