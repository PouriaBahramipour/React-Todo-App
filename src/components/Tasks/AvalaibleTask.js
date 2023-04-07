import React from "react";
import TaskContent from "./TaskItems/TaskContent";
import Card from "../UI/Card";
import TaskMenu from "./TaskMenu/TaskMenu";
import styles from "./AvalaibleTask.module.scss";

const AvalaibleTask = () => {
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
