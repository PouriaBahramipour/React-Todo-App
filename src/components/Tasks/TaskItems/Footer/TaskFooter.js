import React from "react";
import { Link } from "react-router-dom";
import styles from "./TaskFooter.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const TaskFooter = () => {
  return (
    <div className={styles.newTaskIcon}>
      <Link to="/newtask">
        <FontAwesomeIcon
          icon={faCirclePlus}
          className={styles.circlePlus}
          size="3x"
          color="#1b91fb"
        />
      </Link>
    </div>
  );
};

export default TaskFooter;
