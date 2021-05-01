import React, { useState } from "react";
import EditableTitle from "../../header/editableTitle/EditableTitle";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import { Route, Switch, useHistory } from "react-router";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EditCardForm from "./editCardForm/EditCardForm";
import "./style.css";

const useStyles1 = makeStyles((theme) => ({
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
}));

const useStyles2 = makeStyles((theme) => ({
  Button: {
    padding: 0,
    color: "#ff6961",
  },
}));

const Card = ({
  id,
  listID,
  cardName,
  description,
  tag,
  onDescriptionChange,
  onTitleChange,
  handleDeleteCard,
}) => {
  const [isInCard, setIsInCard] = useState(false);
  const [tempDescription, setTempDescription] = useState(description);
  const cardID = "/cardinfo/" + listID + "/" + id;
  const history = useHistory();
  const classes = useStyles1();
  const classes2 = useStyles2();

  const handleMenuClick = () => {
    isInCard === true ? history.push("/") : history.push(cardID);
    setIsInCard(isInCard === true ? false : true);
    setTempDescription(description);
  };

  function handleDeleteClick() {
    let cardID = id;
    handleDeleteCard(cardID);
    history.push("/");
  }

  function handleTitleChange(event) {
    onTitleChange(event, id);
  }

  return (
    <div className="card">
      <div
        className={tag === "" ? "card__tagOff" : "card__tagOn"}
        style={{ backgroundColor: tag }}
      ></div>
      <div className="card__info container">
        <EditableTitle defaultText={cardName} setName={handleTitleChange} />
        <Switch>
          <Route exact path="/">
            <MenuIcon
              className="card__infoIcon"
              fontSize="small"
              onClick={handleMenuClick}
            />
          </Route>
          <Route path={cardID}>
            <div className="container">
              <Button
                className={classes2.Button}
                size="small"
                onClick={handleDeleteClick}
              >
                Delete
              </Button>
              <MenuOpenIcon
                className="card__closeIcon"
                fontSize="small"
                onClick={handleMenuClick}
              />
            </div>
          </Route>
        </Switch>
      </div>
      <Switch>
        <Route exact path="/">
          <div className={description === "" ? "card__description" : ""}>
            <TextField
              InputProps={{ classes }}
              value={description}
              disabled
              fullWidth={true}
              size="small"
            />
          </div>
        </Route>
      </Switch>
      <Switch>
        <Route path={cardID}>
          <EditCardForm
            id={id}
            onChange={onDescriptionChange}
            tempDescription={tempDescription}
            setTempDescription={setTempDescription}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default Card;
