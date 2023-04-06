import React, { useState } from "react";
import Button from "../UI/Button";
import styles from "./NewTaskForm.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const isEmpty = (value) => {
  return value.trim() === "";
};
const validCategory = (value) => {
  return ["groceries", "college", "payment"].includes(value);
};

const NewTaskForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredCategory, setEnteredCategory] = useState("");
  const [formInputsValidity, setFormInputsValidity] = useState({
    title: true,
    category: true,
  });

  const todo = useSelector((state) => state.todo);

  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredTitleIsValid = !isEmpty(enteredTitle);
    const enteredCategoryIsEmpty = isEmpty(enteredCategory);
    const isValidCategory = validCategory(enteredCategory);

    if (!enteredTitleIsValid) {
      setFormInputsValidity({
        title: enteredTitleIsValid,
        category: true,
      });
    } else if (enteredTitleIsValid && enteredCategoryIsEmpty) {
      setFormInputsValidity({
        title: enteredTitleIsValid,
        category: true,
      });
      props.onConfirm({
        title: enteredTitle,
        category: "Uncategorized",
      });
      setEnteredTitle("");
      setEnteredCategory("");
    } else if (enteredTitleIsValid && isValidCategory) {
      setFormInputsValidity({
        title: enteredTitleIsValid,
        category: true,
      });
      props.onConfirm({
        title: enteredTitle,
        category: enteredCategory,
      });
      setEnteredTitle("");
      setEnteredCategory("");
    } else if (enteredTitleIsValid && !isValidCategory) {
      setFormInputsValidity({
        title: enteredTitleIsValid,
        category: false,
      });
    }
  };

  const changeTitleHandler = (enteredTitle) => {
    setEnteredTitle(enteredTitle.target.value);
  };

  const changeCategoryHandler = (enteredCategory) => {
    setEnteredCategory(enteredCategory.target.value.toLowerCase());
  };

  const titleValidationClass = formInputsValidity.title ? "" : styles.invalid;
  const categoryValidationClass = formInputsValidity.category
    ? ""
    : styles.invalid;

  return (
    <form className={styles.from} onSubmit={submitFormHandler}>
      <div className={titleValidationClass}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={enteredTitle}
          onChange={changeTitleHandler}
        ></input>
        {!formInputsValidity.title && <p>Please Enter a Valid Title!</p>}
      </div>
      <div className={categoryValidationClass}>
        <label htmlFor="Category">Category</label>
        <input
          id="Category"
          type="text"
          value={enteredCategory}
          onChange={changeCategoryHandler}
        ></input>
        {!formInputsValidity.category && (
          <p>Please Enter Payment or College or Groceries Category!</p>
        )}
      </div>
      <Link to="/">
        <Button className={styles.cancelButton}>Cancel</Button>
      </Link>
      <Button className={styles.submitButton} type="submit">
        {!todo.isLoading && "Create"}
        {todo.isLoading && "sending..."}
      </Button>
    </form>
  );
};

export default NewTaskForm;
