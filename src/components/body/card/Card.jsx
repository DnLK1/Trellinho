import React, { useState } from "react";
import EditableTitle from "../../header/editableTitle/EditableTitle";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import SaveIcon from "@material-ui/icons/Save";
import { Route, Switch, useHistory } from "react-router";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
}));

const Card = (props) => {
  const [isInCard, setIsInCard] = useState(false);
  const [tempDescription, setTempDescription] = useState(props.description);
  const cardID = "/cardinfo/" + props.listID + "/" + props.id;
  const history = useHistory();
  const classes = useStyles();

  const handleClick = () => {
    isInCard === true ? history.push("/") : history.push(cardID);
    setIsInCard(isInCard === true ? false : true);
    setTempDescription(props.description);
  };

  return (
    <div className="card">
      <div className="card__info container">
        <EditableTitle
          classStyle="card-name"
          defaultText={props.cardName}
          editable={props.editable}
        />
        <Switch>
          <Route exact path="/">
            <MenuIcon
              className="card__infoIcon"
              fontSize="small"
              onClick={handleClick}
            />
          </Route>
          <Route path={cardID}>
            <MenuOpenIcon
              className="card__closeIcon"
              fontSize="small"
              onClick={handleClick}
            />
          </Route>
        </Switch>
      </div>
      <Switch>
        <Route exact path="/">
          <div>
            <TextField
              InputProps={{ classes }}
              value={props.description}
              disabled
              fullWidth="true"
              size="small"
            />
          </div>
        </Route>
      </Switch>
      <Switch>
        <Route path={cardID}>
          <form
            id={props.id}
            onSubmit={(event) => {
              event.preventDefault();
              props.onChange(event, props.id);
            }}
          >
            <div className="card__description container">
              <TextField
                id="updateDescription"
                fullWidth="true"
                multiline="true"
                value={tempDescription}
                onChange={(event) => {
                  setTempDescription(event.target.value);
                }}
              />
              <button type="submit" className="card__editDescriptionButton">
                <SaveIcon className="card__editIcon" fontSize="small" />
              </button>
            </div>
          </form>
        </Route>
      </Switch>
    </div>
  );
};

export default Card;
