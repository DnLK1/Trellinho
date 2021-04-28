import React, { useState } from "react";
import List from "./list/List";
import Controls from "./controls/Controls";
import ScrollContainer from "react-indiana-drag-scroll";
import "./style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Body = () => {
  const [list, setList] = useState(["List name", "Name list"]);

  return (
    <Switch>
      <Route exact path="/">
        <Controls />
        <ScrollContainer className="container cards-lists">
          {list.map((listTitle, id) => {
            return <List key={id} listName={listTitle} />;
          })}
        </ScrollContainer>
      </Route>
    </Switch>
  );
};

export default Body;
