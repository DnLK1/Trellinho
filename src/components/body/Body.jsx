import React, { useState } from "react";
import List from "./list/List";
import Controls from "./controls/Controls";
import ScrollContainer from "react-indiana-drag-scroll";
import HandleNewList from "../../contexts/HandleNewList";
import "./style.css";

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

  function handleUpdatedTitle(value, id) {
    let updatedTitle = value;
    let updatedListArray = list.map((lists, index) =>
      index === id ? updatedTitle : lists
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
              key={index}
              id={index}
              listName={listTitle}
              handleUpdatedTitle={handleUpdatedTitle}
              handleDeleteList={handleDeleteList}
            />
          );
        })}
      </ScrollContainer>
    </>
  );
};

export default Body;
