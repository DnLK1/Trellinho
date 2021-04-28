import React from "react";
import EditableTitle from "../../header/editableTitle/EditableTitle";
import "./style.css";

const Card = () => {
  return (
    <>
      <div className="card">
        <EditableTitle classStyle="card-name" defaultText="Card name" />
      </div>
    </>
  );
};

export default Card;
