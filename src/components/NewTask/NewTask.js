import React from "react";
import Card from "../UI/Card";
import NewTaskForm from "./NewTaskForm";
import styles from "./NewTask.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const NewTask = () => {
  return (
    <Card className={styles["card-content"]}>
      <header className={styles.header}>
        <FontAwesomeIcon icon={faArrowLeft} size="1x" className={styles.icon} />
        <h2 className={styles.title}>Create New Task</h2>
      </header>
      <NewTaskForm />
    </Card>
  );
};

export default NewTask;
