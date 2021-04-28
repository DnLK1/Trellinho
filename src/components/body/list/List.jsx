import React, { useState } from "react";
import EditableTitle from "../../header/editableTitle/EditableTitle";
import Card from "../card/Card";
import EditIcon from "@material-ui/icons/Edit";
import "./style.css";

const List = () => {
  const [card, setCard] = useState([
    { title: "Card name", description: "" },
    { title: "Card name", description: "" },
  ]);

  const handleCard = (card) => {
    setCard((newCard) => {
      return [card, ...newCard];
    });
  };

  return (
    <section className="list">
      <div className="container list__info">
        <EditableTitle classStyle="list__nameList" defaultText="List name" />
        <EditIcon className="list__editIcon" fontSize="small" />
      </div>
      {card.map((card, id) => {
        return <Card key={id} cardName={card.title} />;
      })}
    </section>
  );
};

export default List;
