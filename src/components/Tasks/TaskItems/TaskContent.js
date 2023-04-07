import React from "react";
import TaskHeader from "./Header/TaskHeader";
import TaskItems from "./TaskItems";
import TaskFooter from "./Footer/TaskFooter";
import styles from "./TaskContent.module.scss";

const HeaderTasks = () => {
  return (
    <div className={styles.taskItem}>
      <TaskHeader />
      <TaskItems />
      <TaskFooter />
    </div>
  );
};

export default HeaderTasks;
