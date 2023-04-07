import React, { useState } from "react";
import styles from "./TaskItemLists.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const TaskItem = (props) => {
  const [isCheckedChechBox, setIsCheckedChechBox] = useState(false);

  const handlerDeleteTodoItem = async () => {
    await fetch(
      `https://todo-app-4c8 2d-default-rtdb.firebaseio.com/todo/${props.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  const titleStyle = isCheckedChechBox ? styles.lineThrough : "";

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
          <p className={titleStyle}>{props.title}</p>
        </div>
        <div className={styles.taskRemove}>
          <FontAwesomeIcon
            icon={faTrashCan}
            size="1x"
            onClick={handlerDeleteTodoItem}
          />
        </div>
        <div className={styles.taskCategory}>
          <p>{props.category}</p>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
