import React from "react";
import Card from "../UI/Card";
import NewTaskForm from "./NewTaskForm";
import styles from "./NewTask.module.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postTodoData } from "../API/API";
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
  const navigate = useNavigate();

  const submitNewTaskHandler = async (taskInfo) => {
    dispatch(todoActions.setLoading(true));
    try {
      const response = await postTodoData(taskInfo);
      if (response.ok === false) {
        throw new Error("Something went wrong!");
      } else {
        successNotify("Successfully Registered");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      dispatch(todoActions.setError(error.message));
      warningNotify(error.message);
    }
    dispatch(todoActions.setLoading(false));
  };

  return (
    <section className={styles["card-content"]}>
      <ToastContainer />
      <Card className={styles.newTaskCard}>
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
    </section>
  );
};

export default NewTask;
