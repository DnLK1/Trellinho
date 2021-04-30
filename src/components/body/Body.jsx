import React, { useState } from "react";
import List from "./list/List";
import Controls from "./controls/Controls";
import ScrollContainer from "react-indiana-drag-scroll";
import "./style.css";
import HandleNewList from "../../contexts/HandleNewList";

const Body = () => {
  const [list, setList] = useState([]);

  function handleNewList(event) {
    let newListNameSubmitted = event.target.addListName.value;
    setList([...list, newListNameSubmitted]);
  }

  function handleDeleteList(event) {
    let willDeleteListID = event;
    let updatedListArray = list.filter(
      (lists, index) => index !== willDeleteListID
    );
    setList(updatedListArray);
  }

  return (
    <>
      <HandleNewList.Provider value={handleNewList}>
        <Controls />
      </HandleNewList.Provider>
      <ScrollContainer className="container cards-lists">
        {list.map((listTitle, index) => {
          return (
            <List
              id={index}
              listName={listTitle}
              handleDeleteList={handleDeleteList}
            />
          );
        })}
      </ScrollContainer>
    </>
  );
};

export default Body;
