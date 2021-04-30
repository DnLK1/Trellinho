import React from "react";
import EditableTitle from "./editableTitle/EditableTitle";
import SearchBox from "./searchBox/SearchBox";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useLocation } from "react-router-dom";
import "./style.css";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header container">
      <div className="header__info container">
        <div className="container">
          <SearchBox disabled={location.pathname === "/add" ? true : false} />
          <EditableTitle
            classStyle="header__nomeProjeto"
            defaultText="Project name"
            editable={"true"}
          />
        </div>
        <NotificationsIcon className="header__notifications" />
      </div>
    </header>
  );
};

export default Header;
