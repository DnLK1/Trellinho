import React from "react";
import EditableTitle from "../../header/editableTitle/EditableTitle";
import Card from "../card/Card";
import EditIcon from "@material-ui/icons/Edit";
import "./style.css";

const List = () => {
  return (
    <section className="list">
      <div className="container list__info">
        <EditableTitle classStyle="lista__nomeLista" defaultText="List name" />
        <EditIcon className="list__editIcon" fontSize="small" />
      </div>
      <Card />
    </section>
  );
};

export default List;
