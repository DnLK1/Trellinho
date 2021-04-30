import React, { useState } from "react";
import EditableTitle from "../../header/editableTitle/EditableTitle";
import Card from "../card/Card";
import Add from "@material-ui/icons/Add";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import AddNewCard from "./addNewCard/AddNewCard";
import { Route, Switch, useHistory, useLocation } from "react-router";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "./style.css";

const useStyles = makeStyles((theme) => ({
  Button1: {
    padding: 0,
    color: "#ff6961",
  },
  Button2: {
    padding: 0,
  },
}));

const List = ({ id, listName, handleDeleteList }) => {
  const [card, setCard] = useState([]);
  const [firstClick, setFirstClick] = useState("list__editIcon--first-click");
  const pointer = { cursor: "pointer" };
  const listIDDeleteCard = "/deletecard/" + id;
  const listIDAddCard = "newcard/" + id;
  const listIDAddCardPath = "/newcard/" + id;
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  const handleAddClick = () => {
    history.push(listIDAddCard);
    setFirstClick("list__addIcon");
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

  function handleDeleteIconClick() {
    history.push(listIDDeleteCard);
  }

  function handleDeleteClick() {
    let listID = id;
    handleDeleteList(listID);
  }

  function handleCancelClick() {
    history.push("/");
  }

  function handleDeleteCard(event) {
    let willDeleteCardID = event;
    let updatedCardArray = card.filter(
      (cards, index) => index !== willDeleteCardID
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
          defaultText={listName}
          editable={"true"}
        />
        <Switch>
          <Route exact path="/">
            <Add
              className={firstClick}
              onClick={handleAddClick}
              style={pointer}
            />
            <HighlightOffIcon
              size="small"
              className="list__backspaceIcon"
              onClick={handleDeleteIconClick}
            />
          </Route>
        </Switch>
        <Switch>
          <Route path={listIDDeleteCard}>
            <Button
              className={classes.Button1}
              size="small"
              onClick={handleDeleteClick}
            >
              Delete
            </Button>
            <Button
              className={classes.Button2}
              size="small"
              onClick={handleCancelClick}
            >
              Cancel
            </Button>
          </Route>
        </Switch>
      </div>
      <div>
        <Switch>
          <Route path={listIDAddCardPath}>
            <AddNewCard onChange={handleNewCard} id={id} />
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
              listID={listIDAddCard}
              onChange={handleUpdate}
              cardName={card.title}
              editable={location.pathname === "/newcard" ? "false" : "true"}
              description={card.description}
              handleDeleteCard={handleDeleteCard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
