import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../../store";
import TaskItem from "./TaskItem";
import Card from "../UI/Card";
import styles from "./AvalaibleTask.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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

  const todoData = useSelector((state) => state.todo.data);

  const loadedItem = [];
  for (let key in todoData) {
    loadedItem.push({
      id: key,
      title: todoData[key].title,
      category: todoData[key].category,
    });
  }
  console.log(loadedItem.map((t) => t.title));

  const tasksList = loadedItem.map((task) => (
    <TaskItem id={task.id} title={task.title} category={task.category} />
  ));

  return (
    <section className={styles.tasks}>
      <Card className={styles.taskCard}>
        <div className={styles.taskContent}>
          <div className={styles.menuBar}>
            <Link to="/">All</Link>
            <Link to="/">Groceries</Link>
            <Link to="/">College</Link>
            <Link to="/">Payments</Link>
          </div>
          <div className={styles.taskItem}>
            <header>
              <h2>All Tasks</h2>
              <input type="text" placeholder="Search Something..."></input>
              <FontAwesomeIcon
                className={styles["search-icon"]}
                icon={faSearch}
              />
            </header>
            <ul>{tasksList}</ul>
            <div className={styles.newTaskIcon}>
              <Link to="/newtask">
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  size="3x"
                  color="#1b91fb"
                />
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default AvalaibleTask;
