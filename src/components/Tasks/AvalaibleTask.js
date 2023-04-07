import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../../store";
import TaskContent from "./TaskItems/TaskContent";
import Card from "../UI/Card";
import TaskMenu from "./TaskMenu/TaskMenu";
import styles from "./AvalaibleTask.module.scss";

const AvalaibleTask = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(
        "https://todo-app-4c82d-default-rtdb.firebaseio.com/todo.json"
      );
      const data = await response.json();
      dispatch(todoActions.setData(data));
    };
    fetchTasks();
  }, [dispatch]);

  return (
    <section className={styles.tasks}>
      <Card className={styles.taskCard}>
        <div className={styles.taskContent}>
          <TaskMenu />
          <TaskContent />
        </div>
      </Card>
    </section>
  );
};

export default AvalaibleTask;
