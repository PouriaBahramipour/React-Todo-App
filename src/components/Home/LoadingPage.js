import React from "react";
import Card from "../UI/Card";
import styles from "./LoadingPage.module.scss";

const LoadingPage = () => {
  return (
    <Card className={styles.loading}>
      <div className={styles.loader}></div>
    </Card>
  );
};

export default LoadingPage;
