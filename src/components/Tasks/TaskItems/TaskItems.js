import React from "react";
import { useSelector } from "react-redux";
import TaskItemLists from "./TaskItemLists";
import styles from "./TaskItems.module.scss";

const TaskItemsList = () => {
  const todoData = useSelector((state) => state.todo.filteredData);

  const tasksList = todoData.map((task) => (
    <TaskItemLists id={task.id} title={task.title} category={task.category} />
  ));

  return <ul className={styles.taskItemList}>{tasksList}</ul>;
};
export default TaskItemsList;
