import React from "react";
import { useDispatch } from "react-redux";
import styles from "./TaskMenu.module.scss";
import { todoActions } from "../../../store";

const TaskMenu = () => {
  const dispatch = useDispatch();

  const allCategoryHandler = () => {
    dispatch(todoActions.setItemCategory(""));
  };

  const groceriesHandler = () => {
    dispatch(todoActions.setItemCategory("Groceries"));
  };
  const collegeHandler = () => {
    dispatch(todoActions.setItemCategory("College"));
  };
  const paymentsHandler = () => {
    dispatch(todoActions.setItemCategory("Payment"));
  };

  return (
    <div className={styles.menuBar}>
      <ul>
        <li onClick={allCategoryHandler}>All</li>
        <li onClick={groceriesHandler}>Groceries</li>
        <li onClick={collegeHandler}>College</li>
        <li onClick={paymentsHandler}>Payments</li>
      </ul>
    </div>
  );
};

export default TaskMenu;
