import React, { Fragment } from "react";
import Card from "../UI/Card";
import NewTaskForm from "./NewTaskForm";
import styles from "./NewTask.module.scss";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { todoActions } from "../../store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewTask = () => {
  const successNotify = (value) =>
    toast.success(value, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const warningNotify = (value) => {
    toast.error(value, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const dispatch = useDispatch();
  const submitNewTaskHandler = async (taskInfo) => {
    dispatch(todoActions.setLoading(true));
    try {
      const response = await fetch(
        "https://todo-app-4c82d-default-rtdb.firebaseio.com/todo.json",
        {
          method: "POST",
          body: JSON.stringify({
            title: taskInfo.title,
            category: taskInfo.category,
          }),
        }
      );
      if (response.ok === false) {
        throw new Error("Something went wrong!");
      } else {
        successNotify("success");
      }
    } catch (error) {
      dispatch(todoActions.setError(error.message));
      warningNotify(error.message);
    }
    dispatch(todoActions.setLoading(false));
  };

  return (
    <Fragment>
      <ToastContainer />
      <Card className={styles["card-content"]}>
        <header className={styles.header}>
          <Link to="/tasks">
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
    </Fragment>
  );
};

export default NewTask;
