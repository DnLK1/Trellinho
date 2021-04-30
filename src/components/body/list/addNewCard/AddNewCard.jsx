import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  TextField: {
    marginBottom: theme.spacing(1),
    minWidth: 120,
  },
  Button: {
    marginBottom: theme.spacing(2),
  },
}));

const AddNewCard = ({ id, onChange }) => {
  const [newCardName, setNewCardName] = useState("");
  const [newCardDescription, setNewCardDescription] = useState("");
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => history.push("/");

  return (
    <form
      id={id}
      onSubmit={(event) => {
        event.preventDefault();
        onChange(event);
        setNewCardName("");
        setNewCardDescription("");
      }}
    >
      <TextField
        value={newCardName}
        id="addCardName"
        onChange={(event) => setNewCardName(event.target.value)}
        className={classes.TextField}
        placeholder="New card name"
        fullWidth={true}
        required
      />
      <TextField
        value={newCardDescription}
        id="addCardDescription"
        onChange={(event) => setNewCardDescription(event.target.value)}
        className={classes.TextField}
        placeholder="New card description"
        fullWidth={true}
      />
      <div className="new-card__buttons container">
        <Button
          size="small"
          type="submit"
          className={classes.Button}
          variant="contained"
        >
          Add card
        </Button>
        <Button
          size="small"
          className={classes.Button}
          variant="outlined"
          onClick={handleClick}
        >
          Done
        </Button>
      </div>
    </form>
  );
};

export default AddNewCard;
