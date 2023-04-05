import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./NewTask.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const NewTask = () => {
  return (
    <Card className={styles.cardContent}>
      <div className={styles.header}>
        <FontAwesomeIcon icon={faArrowLeft} size="1x" className={styles.icon} />
        <h2 className={styles.title}>Create New Task</h2>
      </div>
      <form className={styles.from}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text"></input>
        <label htmlFor="Category">Category</label>
        <input id="Category" type="text"></input>
        <Button className={styles.cancelButton}>Cancel</Button>
        <Button className={styles.submitButton} type="submit">
          Create
        </Button>
      </form>
    </Card>
  );
};

export default NewTask;
