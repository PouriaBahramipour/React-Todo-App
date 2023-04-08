import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./TaskMenu.module.scss";
import { todoActions } from "../../../store";

const TaskMenu = () => {
  const [selectedItem, setSelectedItem] = useState("all");
  const dispatch = useDispatch();
  const todoCategory = useSelector((state) => state.todo.menuItem);

  const filterCategoryHandler = (category, index) => {
    dispatch(todoActions.setItemCategory(category));
    if (index === "all") {
      setSelectedItem("all");
    }
    setSelectedItem(index);
  };

  const categoryArray = todoCategory.map((item) => item.category);
  const uniqueCategoryArray = [...new Set(categoryArray)];

  return (
    <div className={styles.menuBar}>
      <ul>
        <li
          className={selectedItem === "all" ? styles.selectedItem : ""}
          onClick={() => filterCategoryHandler("", "all")}
        >
          All
        </li>
        {uniqueCategoryArray.map((item, index) =>
          item === "Uncategorized" ? null : (
            <li
              key={index}
              className={selectedItem === index ? styles.selectedItem : ""}
              onClick={() => filterCategoryHandler(item, index)}
            >
              {item}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default TaskMenu;
