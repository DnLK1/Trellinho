import React from "react";
import Add from "@material-ui/icons/Add";
import "./style.css";

const AddButton = (props) => {
  return (
    <div className="add-button container">
      <Add className="add-button-icon" />
      <p className="add-button-text">{props.addButtonName}</p>
    </div>
  );
};

export default AddButton;
