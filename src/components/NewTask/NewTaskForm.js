import React from "react";
import Button from "../UI/Button";
import styles from "./NewTaskForm.module.scss";

const NewTaskForm = () => {
  return (
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
  );
};

export default NewTaskForm;
