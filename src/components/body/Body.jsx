import React, { useState } from "react";
import List from "./list/List";
import Controls from "./controls/Controls";
import ScrollContainer from "react-indiana-drag-scroll";
import "./style.css";

const Body = () => {
  const [list, setList] = useState([]);

  function handleNewList(event) {
    let newListNameSubmitted = event.target.addListName.value;
    setList([...list, newListNameSubmitted]);
  }

  return (
    <>
      <Controls onChange={handleNewList} />
      <ScrollContainer className="container cards-lists">
        {list.map((listTitle, index) => {
          return <List id={index} listName={listTitle} />;
        })}
      </ScrollContainer>
    </>
  );
};

export default Body;
