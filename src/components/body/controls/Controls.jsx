import React from "react";
import AddButton from "./addButton/AddButton";
import FilterTag from "./filterTag/FilterTag";
import "./style.css";

const Controls = () => {
  return (
    <div className="container controls">
      <AddButton addButtonName="Add list" />
      <FilterTag />
    </div>
  );
};

export default Controls;
