import React from "react";
import EditableTitle from "../../header/editableTitle/EditableTitle";
import "./style.css";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <EditableTitle classStyle="card-name" defaultText={props.cardName} />
      </div>
    </>
  );
};

export default Card;
