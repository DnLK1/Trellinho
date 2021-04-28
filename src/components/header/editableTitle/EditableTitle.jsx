import React from "react";
import "./style.css";

const EditableTitle = ({ classStyle, defaultText }) => {
  return (
    <p className={classStyle} contentEditable="true">
      {defaultText}
    </p>
  );
};

export default EditableTitle;
