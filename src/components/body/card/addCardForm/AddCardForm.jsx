import React from "react";
import SaveIcon from "@material-ui/icons/Save";
import { TextField } from "@material-ui/core";
import "./style.css";

const AddCardForm = ({
  description,
  id,
  onChange,
  tempDescription,
  setTempDescription,
}) => {
  return (
    <form
      id={id}
      onSubmit={(event) => {
        event.preventDefault();
        onChange(event, id);
      }}
    >
      <div className="card__description container">
        <TextField
          id="updateDescription"
          fullWidth="true"
          multiline="true"
          value={tempDescription}
          onChange={(event) => {
            setTempDescription(event.target.value);
          }}
        />
        <button type="submit" className="card__editDescriptionButton">
          <SaveIcon className="card__editIcon" fontSize="small" />
        </button>
      </div>
    </form>
  );
};

export default AddCardForm;
