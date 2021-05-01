import React, { useState } from "react";
import EditableTitle from "./editableTitle/EditableTitle";
import SearchBox from "./searchBox/SearchBox";
import NotificationsIcon from "@material-ui/icons/Notifications";
import "./style.css";

const Header = () => {
  const [projectName, setProjectName] = useState("Project name");
  const editableTitleMargin = "1rem";

  return (
    <header className="header container">
      <div className="header__info container">
        <div className="container">
          <SearchBox />
          <EditableTitle
            editableTitleMargin={editableTitleMargin}
            defaultText={projectName}
            setName={setProjectName}
          />
        </div>
        <NotificationsIcon className="header__notifications" />
      </div>
    </header>
  );
};

export default Header;
