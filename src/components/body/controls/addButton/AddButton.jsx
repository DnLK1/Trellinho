import React, { useState } from "react";
import Add from "@material-ui/icons/Add";
import { useHistory, useLocation } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./style.css";

const AddButton = ({ path, addButtonName }) => {
  const [firstClick, setFirstClick] = useState(
    "add-button--first-click container"
  );
  const location = useLocation();
  const history = useHistory();
  const handleAddClick = () => {
    history.push(path);
    setFirstClick("add-button container");
  };

  return (
    <Button
      variant={location.pathname === "/newlist" ? "outlined" : "contained"}
      className={firstClick}
      onClick={handleAddClick}
      startIcon={<Add />}
      disabled={location.pathname === "/newlist" ? true : false}
    >
      {addButtonName}
    </Button>
  );
};

export default AddButton;
