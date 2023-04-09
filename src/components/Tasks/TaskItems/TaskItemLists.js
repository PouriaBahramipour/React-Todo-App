import React, { useState } from "react";
import styles from "./TaskItemLists.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const TaskItem = (props) => {
  const [isCheckedChechBox, setIsCheckedChechBox] = useState(false);

  const handlerDeleteTodoItem = () => {
    fetch(
      `https://todo-app-4c8 2d-default-rtdb.firebaseio.com/todo/${props.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  const titleStyleTaskDone = isCheckedChechBox ? styles.lineThrough : "";
  const categoryStyleTaskDone = isCheckedChechBox
    ? styles.categoryDoneStyle
    : styles.categoryStyle;

  const handleCheckBox = () => {
    setIsCheckedChechBox(!isCheckedChechBox);
  };

  return (
    <li key={props.id} className={styles.taskListItem}>
      <div className={styles.taskItem}>
        <div className={styles.taskTitle}>
          <input
            type="checkbox"
            className={styles.checkbox}
            onChange={handleCheckBox}
          />
          <p className={titleStyleTaskDone}>{props.title}</p>
        </div>
        <div className={styles.taskRemove}>
          <FontAwesomeIcon
            icon={faTrashCan}
            className={styles.icon}
            size="1x"
            onClick={handlerDeleteTodoItem}
          />
        </div>
        <div className={styles.taskCategory}>
          <p className={categoryStyleTaskDone}>{props.category}</p>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
