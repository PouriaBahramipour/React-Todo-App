import React from "react";
import styles from "./TaskHeader.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const TaskHeader = () => {
  return (
    <header>
      <h2>All Tasks</h2>
      <input type="text" placeholder="Search Something..."></input>
      <FontAwesomeIcon className={styles["search-icon"]} icon={faSearch} />
    </header>
  );
};

export default TaskHeader;
