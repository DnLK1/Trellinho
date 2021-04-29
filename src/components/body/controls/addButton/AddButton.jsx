import React from "react";
import Add from "@material-ui/icons/Add";
import { useHistory, useLocation } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./style.css";

const AddButton = (props) => {
  const location = useLocation();
  const history = useHistory();
  const handleClick = () => history.push(props.onClick);

  return (
    <Button
      variant={location.pathname === "/add" ? "outlined" : "contained"}
      className="add-button container"
      onClick={handleClick}
      startIcon={<Add />}
      disabled={location.pathname === "/add" ? true : false}
    >
      {props.addButtonName}
    </Button>
  );
};

export default AddButton;
