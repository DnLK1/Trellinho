import React from "react";
import EditableTitle from "./editableTitle/EditableTitle";
import SearchBox from "./searchBox/SearchBox";
import NotificationsIcon from "@material-ui/icons/Notifications";
import "./style.css";

const Header = () => {
  return (
    <header className="header container">
      <div className="header__info container">
        <div className="container">
          <SearchBox />
          <EditableTitle
            classStyle="header__nomeProjeto"
            defaultText="Project name"
          />
        </div>
        <NotificationsIcon className="header__notifications" />
      </div>
    </header>
  );
};

export default Header;
