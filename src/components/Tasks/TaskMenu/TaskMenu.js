import React from "react";
import { Link } from "react-router-dom";
import styles from "./TaskMenu.module.scss";

const TaskMenu = () => {
  return (
    <div className={styles.menuBar}>
      <Link to="/">All</Link>
      <Link to="/">Groceries</Link>
      <Link to="/">College</Link>
      <Link to="/">Payments</Link>
    </div>
  );
};

export default TaskMenu;
