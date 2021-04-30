import React, { useState } from "react";
import EditableTitle from "../../header/editableTitle/EditableTitle";
import Card from "../card/Card";
import EditIcon from "@material-ui/icons/Edit";
import Add from "@material-ui/icons/Add";
import AddNewCard from "./addNewCard/AddNewCard";
import "./style.css";
import { Route, Switch, useHistory, useLocation } from "react-router";

const List = (props) => {
  const [card, setCard] = useState([]);
  const [firstClick, setFirstClick] = useState("list__editIcon--first-click");

  const pointer = { cursor: "pointer" };
  const listID = "/newcard/" + props.id;
  const location = useLocation();
  const history = useHistory();
  const handleClick = () => {
    history.push(listID);
    setFirstClick("list__editIcon");
  };

  function handleNewCard(event) {
    let newCardNameSubmitted = event.target.addCardName.value;
    let newCardDescriptionSubmitted = event.target.addCardDescription.value;
    let newCardInfoArrayInput = {
      title: newCardNameSubmitted,
      description: newCardDescriptionSubmitted,
    };
    setCard([...card, newCardInfoArrayInput]);
  }

  function handleUpdate(event, id) {
    let updatedDescription = event.target.updateDescription.value;
    let updatedCardArray = card.map((cards, index) =>
      index === id ? { ...cards, description: updatedDescription } : cards
    );
    setCard(updatedCardArray);
  }

  return (
    <div className="list">
      <div
        className={
          location.pathname === "/newcard"
            ? "container list__info--new-card"
            : "container list__info"
        }
      >
        <EditableTitle
          classStyle="list__nameList"
          defaultText={props.listName}
          editable={"true"}
        />
        <EditIcon className="list__editIcon" fontSize="small" />
        <Add className={firstClick} onClick={handleClick} style={pointer} />
      </div>
      <div>
        <Switch>
          <Route path={listID}>
            <AddNewCard onChange={handleNewCard} id={props.id} />
          </Route>
        </Switch>
      </div>
      <div
        className={
          location.pathname === "/newcard" ? "list__cards--off" : "list__cards"
        }
      >
        {card.map((card, index) => {
          return (
            <Card
              id={index}
              listID={listID}
              onChange={handleUpdate}
              cardName={card.title}
              editable={location.pathname === "/newcard" ? "false" : "true"}
              description={card.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
