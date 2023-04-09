import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../../../../store";
import styles from "./TaskSearch.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const TaskSearch = () => {
  const dispatch = useDispatch();
  const [enteredTitle, setEnteredTitle] = useState("");
  const clickedMenuItem = useSelector((state) => state.todo.clickedMenuItem);

  useEffect(() => {
    setEnteredTitle("");
  }, [clickedMenuItem]);

  const searchHandle = (title) => {
    setEnteredTitle(title.target.value);
    dispatch(todoActions.setSearchText(title.target.value));
  };

  return (
    <Fragment>
      <input
        type="text"
        placeholder="Search Something..."
        value={enteredTitle}
        onChange={searchHandle}
      ></input>
      <FontAwesomeIcon className={styles["search-icon"]} icon={faSearch} />
    </Fragment>
  );
};

export default TaskSearch;
