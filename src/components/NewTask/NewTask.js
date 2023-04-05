import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./NewTask.module.scss";

const NewTask = () => {
  return (
    <Card className={styles.input}>
      <h2>Create New Task</h2>
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
