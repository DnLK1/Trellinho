import React from "react";
import AddButton from "./addButton/AddButton";
import FilterTag from "./filterTag/FilterTag";
import { Switch, Route } from "react-router-dom";
import AddNewListForm from "./addNewListForm/AddNewListForm";
import "./style.css";

const Controls = (props) => {
  return (
    <div className="container controls">
      <AddButton addButtonName="Add list" path="/newlist" />
      <FilterTag />
      <Switch>
        <Route path="/newlist">
          <AddNewListForm onChange={props.onChange} />
        </Route>
      </Switch>
    </div>
  );
};

export default Controls;
