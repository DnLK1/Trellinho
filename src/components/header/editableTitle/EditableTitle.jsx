import React from "react";
import "./style.css";

const EditableTitle = ({ classStyle, defaultText, editable }) => {
  return (
    <p className={classStyle} contentEditable={editable}>
      {defaultText}
    </p>
  );
};

export default EditableTitle;
