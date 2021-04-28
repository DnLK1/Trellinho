import React from "react";
import "./style.css";

const EditableTitle = ({ classStyle, defaultText }) => {
  return (
    <p className={classStyle} contenteditable="true">
      {defaultText}
    </p>
  );
};

export default EditableTitle;
