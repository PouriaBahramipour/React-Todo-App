import React from "react";
import styles from "./TaskItemLists.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const TaskItem = (props) => {
  return (
    <li key={props.id} className={styles.taskListItem}>
      <div className={styles.taskItem}>
        <div className={styles.taskTitle}>
          <input type="checkbox" className={styles.checkbox} />
          <p>{props.title}</p>
        </div>
        <div className={styles.taskRemove}>
          <FontAwesomeIcon icon={faTrashCan} size="1x" />
        </div>
        <div className={styles.taskCategory}>
          <p>{props.category}</p>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
