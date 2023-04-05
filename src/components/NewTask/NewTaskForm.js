import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import styles from "./NewTaskForm.module.scss";
import { Link } from "react-router-dom";

const isEmpty = (value) => {
  return value.trim() === "";
};

const NewTaskForm = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    title: true,
    category: true,
  });
  const titleInputRef = useRef();
  const categoryInputRef = useRef();
  // Payments,College,Uncategorized
  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredCategory = categoryInputRef.current.value.toLowerCase();

    const enteredTitleIsValid = !isEmpty(enteredTitle);
    const enteredCategoryIsEmpty = isEmpty(enteredCategory);

    if (!enteredTitleIsValid) {
      setFormInputsValidity({
        title: enteredTitleIsValid,
        category: true,
      });
    }
    if (enteredTitleIsValid && enteredCategoryIsEmpty) {
      props.onConfirm({
        title: enteredTitle,
        category: "Uncategorized",
      });
    } else if (enteredTitleIsValid && enteredCategory === "groceries") {
      setFormInputsValidity({
        title: enteredTitleIsValid,
        category: true,
      });
      props.onConfirm({
        title: enteredTitle,
        category: enteredCategory,
      });
    } else if (enteredTitleIsValid && enteredCategory === "college") {
      setFormInputsValidity({
        title: enteredTitleIsValid,
        category: true,
      });
      props.onConfirm({
        title: enteredTitle,
        category: enteredCategory,
      });
    } else if (enteredTitleIsValid && enteredCategory === "payment") {
      setFormInputsValidity({
        title: enteredTitleIsValid,
        category: true,
      });
      props.onConfirm({
        title: enteredTitle,
        category: enteredCategory,
      });
    } else {
      setFormInputsValidity({
        title: enteredTitleIsValid,
        category: false,
      });
    }
  };

  return (
    <form className={styles.from} onSubmit={submitFormHandler}>
      <div className={formInputsValidity.title ? "" : styles.invalid}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" ref={titleInputRef}></input>
        {!formInputsValidity.title && <p>Please Enter a Valid Title!</p>}
      </div>
      <div className={formInputsValidity.category ? "" : styles.invalid}>
        <label htmlFor="Category">Category</label>
        <input id="Category" type="text" ref={categoryInputRef}></input>
        {!formInputsValidity.category && (
          <p>Please Enter Payment or College or Groceries Category!</p>
        )}
      </div>
      <Link to="/">
        <Button className={styles.cancelButton}>Cancel</Button>
      </Link>
      <Button className={styles.submitButton} type="submit">
        Create
      </Button>
    </form>
  );
};

export default NewTaskForm;
