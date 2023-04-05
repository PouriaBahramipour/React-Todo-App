import React from "react";
import Card from "../UI/Card";
import NewTaskForm from "./NewTaskForm";
import styles from "./NewTask.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NewTask = () => {
  const submitNewTaskHandler = async (taskInfo) => {
    await fetch(
      "https://todo-app-4c82d-default-rtdb.firebaseio.com/todo.json",
      {
        method: "POST",
        body: JSON.stringify({
          title: taskInfo.title,
          category: taskInfo.category,
        }),
      }
    );
  };

  return (
    <Card className={styles["card-content"]}>
      <header className={styles.header}>
        <Link to="/">
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="1x"
            className={styles.icon}
          />
        </Link>
        <h2 className={styles.title}>Create New Task</h2>
      </header>
      <NewTaskForm onConfirm={submitNewTaskHandler} />
    </Card>
  );
};

export default NewTask;
