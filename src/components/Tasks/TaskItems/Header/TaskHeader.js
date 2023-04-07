import React from "react";
import styles from "./TaskHeader.module.scss";

import TaskSearch from "./TaskSearch";

const TaskHeader = () => {
  return (
    <header className={styles.taskHeader}>
      <h2>All Tasks</h2>
      <TaskSearch />
    </header>
  );
};

export default TaskHeader;
