import React, { useState } from "react";
import EditableTitle from "../../header/editableTitle/EditableTitle";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import { Route, Switch, useHistory } from "react-router";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddCardForm from "./addCardForm/AddCardForm";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  Button: {
    padding: 0,
    color: "#ff6961",
  },
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
}));

const Card = ({
  description,
  listID,
  id,
  cardName,
  editable,
  onChange,
  handleDeleteCard,
}) => {
  const [isInCard, setIsInCard] = useState(false);
  const [tempDescription, setTempDescription] = useState(description);
  const cardID = "/cardinfo/" + listID + "/" + id;
  const history = useHistory();
  const classes = useStyles();

  const handleMenuClick = () => {
    isInCard === true ? history.push("/") : history.push(cardID);
    setIsInCard(isInCard === true ? false : true);
    setTempDescription(description);
  };

  function handleDeleteClick() {
    let cardID = id;
    handleDeleteCard(cardID);
  }

  return (
    <div className="card">
      <div className="card__info container">
        <EditableTitle
          classStyle="card-name"
          defaultText={cardName}
          editable={editable}
        />
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
                className={classes.Button}
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
          <div>
            <TextField
              InputProps={{ classes }}
              value={description}
              disabled
              fullWidth="true"
              size="small"
            />
          </div>
        </Route>
      </Switch>
      <Switch>
        <Route path={cardID}>
          <AddCardForm
            id={id}
            onChange={onChange}
            tempDescription={tempDescription}
            setTempDescription={setTempDescription}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default Card;
