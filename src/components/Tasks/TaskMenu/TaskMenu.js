import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./TaskMenu.module.scss";
import { todoActions } from "../../../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
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
          {selectedItem === "all" && (
            <FontAwesomeIcon
              className={styles.checkIcon}
              icon={faCircleCheck}
              size="1x"
            />
          )}
          All
        </li>

        {uniqueCategoryArray.map((item, index) =>
          item === "Uncategorized" ? null : (
            <li
              key={index}
              className={selectedItem === index ? styles.selectedItem : ""}
              onClick={() => filterCategoryHandler(item, index)}
            >
              {selectedItem === index && (
                <FontAwesomeIcon
                  className={styles.checkIcon}
                  icon={faCircleCheck}
                  size="1x"
                />
              )}
              {item}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default TaskMenu;
