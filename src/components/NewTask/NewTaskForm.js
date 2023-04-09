import React, { useState } from "react";
import Button from "../UI/Button";
import styles from "./NewTaskForm.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const isEmpty = (value) => {
  return value.trim() === "";
};

const NewTaskForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredCategory, setEnteredCategory] = useState("");
  const [formInputsValidity, setFormInputsValidity] = useState({
    title: true,
  });

  const todo = useSelector((state) => state.todo);
  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredNewCategory = enteredCategory
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

    const enteredTitleIsValid = !isEmpty(enteredTitle);
    const enteredCategoryIsEmpty = isEmpty(enteredCategory);

    if (!enteredTitleIsValid) {
      setFormInputsValidity({
        title: enteredTitleIsValid,
      });
    } else if (enteredTitleIsValid && enteredCategoryIsEmpty) {
      setFormInputsValidity({
        title: enteredTitleIsValid,
      });
      props.onConfirm({
        title: enteredTitle,
        category: "Uncategorized",
      });
      setEnteredTitle("");
      setEnteredCategory("");
    } else if (enteredTitleIsValid) {
      setFormInputsValidity({
        title: enteredTitleIsValid,
      });
      props.onConfirm({
        title: enteredTitle,
        category: enteredNewCategory,
      });
      setEnteredTitle("");
      setEnteredCategory("");
    }
  };

  const changeTitleHandler = (enteredTitle) => {
    setEnteredTitle(enteredTitle.target.value);
  };

  const changeCategoryHandler = (enteredCategory) => {
    setEnteredCategory(enteredCategory.target.value);
  };

  const titleValidationClass = formInputsValidity.title ? "" : styles.invalid;

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
      <div>
        <label htmlFor="Category">Category</label>
        <input
          id="Category"
          type="text"
          value={enteredCategory}
          onChange={changeCategoryHandler}
        ></input>
      </div>
      <div className={styles.actions}>
        <Link to="/">
          <Button className={styles.cancelButton}>Cancel</Button>
        </Link>
        <Button className={styles.submitButton} type="submit">
          {!todo.isLoading && "Create"}
          {todo.isLoading && "sending..."}
        </Button>
      </div>
    </form>
  );
};

export default NewTaskForm;
