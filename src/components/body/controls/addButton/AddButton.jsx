import React from "react";
import Add from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";
import "./style.css";

const AddButton = (props) => {
  const history = useHistory();
  const handleClick = () => history.push(props.onClick);

  return (
    <button
      type="button"
      className="add-button container"
      onClick={handleClick}
    >
      <Add className="add-button-icon" />
      {props.addButtonName}
    </button>
  );
};

export default AddButton;
