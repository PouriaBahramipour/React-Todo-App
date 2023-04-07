import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./TaskMenu.module.scss";
import { todoActions } from "../../../store";

const TaskMenu = () => {
  const dispatch = useDispatch();
  const todoCategory = useSelector((state) => state.todo.data);

  const filterCategoryHandler = (category) => {
    dispatch(todoActions.setItemCategory(category));
  };

  const categoryArray = todoCategory.map((item) => item.category);
  const uniqueCategoryArray = [...new Set(categoryArray)];

  return (
    <div className={styles.menuBar}>
      <ul>
        <li onClick={() => filterCategoryHandler("")}>All</li>
        {uniqueCategoryArray.map((item, index) =>
          item === "Uncategorized" ? null : (
            <li key={index} onClick={() => filterCategoryHandler(item)}>
              {item}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default TaskMenu;
