import React, { useState, useContext } from "react";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, InputLabel } from "@material-ui/core";
import HandleFilterTag from "../../../../contexts/HandleFilterTag";
import "./style.css";

const FilterTag = ({ variant, selectStyle, defaultText, filterTypeAdd }) => {
  const useStyles = makeStyles((theme) => ({
    formControl: selectStyle,
    opacity: 0.5,
  }));

  const classes = useStyles();
  const { filteredTag, setFilteredTag } = useContext(HandleFilterTag);
  const [addTag, setAddTag] = useState("");

  function handleChangeFilter(event) {
    setFilteredTag(event.target.value);
  }

  function handleChangeAdd(event) {
    setAddTag(event.target.value);
  }

  return (
    <FormControl variant={variant} className={classes.formControl}>
      <InputLabel id="addCardTag">{defaultText}</InputLabel>
      <Select
        id="addCardTag"
        native
        label="Select Tag"
        labelId="addCardTag"
        value={filterTypeAdd === true ? addTag : filteredTag}
        onChange={filterTypeAdd === true ? handleChangeAdd : handleChangeFilter}
      >
        <option aria-label="None" value="" />
        <option value={"#ff6961"}>Red</option>
        <option value={"#9EDBD6"}>Green</option>
        <option value={"#7DBDFF"}>Blue</option>
        <option value={"#FFE196"}>Yellow</option>
      </Select>
    </FormControl>
  );
};

export default FilterTag;
