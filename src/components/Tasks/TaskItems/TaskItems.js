import React from "react";
import { useSelector } from "react-redux";
import TaskItemLists from "./TaskItemLists";
import styles from "./TaskItems.module.scss";

const TaskItemsList = () => {
  const todoData = useSelector((state) => state.todo.filteredData);
  console.log("ss", todoData);

  // const loadedItem = [];

  // for (let key in todoData) {
  //   loadedItem.push({
  //     id: key,
  //     title: todoData[key].title,
  //     category: todoData[key].category,
  //   });
  // }

  const tasksList = todoData.map((task) => (
    <TaskItemLists id={task.id} title={task.title} category={task.category} />
  ));

  return <ul className={styles.taskItemList}>{tasksList}</ul>;
};
export default TaskItemsList;
