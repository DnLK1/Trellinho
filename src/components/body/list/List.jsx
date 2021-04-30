import React, { useState, useContext } from "react";
import EditableTitle from "../../header/editableTitle/EditableTitle";
import Card from "../card/Card";
import Add from "@material-ui/icons/Add";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import AddNewCard from "./addNewCard/AddNewCard";
import { Route, Switch, useHistory, useLocation } from "react-router";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HandleKeywordSearch from "../../../contexts/HandleKeywordSearch";

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

const List = ({ id, listName, handleDeleteList, handleUpdatedTitle }) => {
  const [card, setCard] = useState([]);
  const [firstClick, setFirstClick] = useState("list__editIcon--first-click");
  const { keyword } = useContext(HandleKeywordSearch);
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

  function handleUpdateDescription(event, id) {
    let updatedDescription = event.target.updateDescription.value;
    let updatedCardArray = card.map((cards, index) =>
      index === id ? { ...cards, description: updatedDescription } : cards
    );
    setCard(updatedCardArray);
  }

  function handleUpdateTitle(event, id) {
    let updatedTitle = event;
    let updatedCardArray = card.map((cards, index) =>
      index === id ? { ...cards, title: updatedTitle } : cards
    );
    setCard(updatedCardArray);
  }

  function handleDeleteIconClick() {
    history.push(listIDDeleteCard);
  }

  function handleDeleteClick() {
    let listID = id;
    handleDeleteList(listID);
    history.push("/");
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

  function handleChange(event) {
    handleUpdatedTitle(event, id);
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
        <EditableTitle defaultText={listName} setName={handleChange} />
        <Switch>
          <Route exact path="/">
            <div>
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
            </div>
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
              key={index}
              id={index}
              listID={listIDAddCard}
              onDescriptionChange={handleUpdateDescription}
              onTitleChange={handleUpdateTitle}
              cardName={card.title}
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
