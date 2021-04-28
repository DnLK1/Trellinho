import React, { useState } from "react";
import EditableTitle from "../../header/editableTitle/EditableTitle";
import Card from "../card/Card";
import EditIcon from "@material-ui/icons/Edit";
import Add from "@material-ui/icons/Add";
import "./style.css";

const List = (props) => {
  const [card, setCard] = useState([
    { title: "Card name", description: "" },
    { title: "Card name", description: "" },
    { title: "Card name", description: "" },
    { title: "Card name", description: "" },
    { title: "Card name", description: "" },
    { title: "Card name", description: "" },
    { title: "Card name", description: "" },
    { title: "Card name", description: "" },
  ]);

  return (
    <div className="list">
      <div className="container list__info">
        <EditableTitle
          classStyle="list__nameList"
          defaultText={props.listName}
        />
        <EditIcon className="list__editIcon" fontSize="small" />
        <Add className="add-button-icon" />
      </div>
      <div className="teste">
        {card.map((card, id) => {
          return <Card key={id} cardName={card.title} />;
        })}
      </div>
    </div>
  );
};

export default List;
