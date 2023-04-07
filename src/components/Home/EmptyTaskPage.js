import React from "react";
import Card from "../UI/Card";
import HomeImage from "./HomeImage";
import styles from "./EmptyTaskPage.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const EmptyTaskPage = () => {
  return (
    <Card className={styles.homeCard}>
      <div className={styles.homeContent}>
        <div>
          <HomeImage />
        </div>
        <div>
          <p>There’s no task here!</p>
        </div>
        <div className={styles.actions}>
          <FontAwesomeIcon
            icon={faPlus}
            size="1x"
            className={styles.plusIcon}
            color="#1B91FB"
          />
          <Link to="/newtask">Create new task</Link>
        </div>
      </div>
    </Card>
  );
};

export default EmptyTaskPage;
