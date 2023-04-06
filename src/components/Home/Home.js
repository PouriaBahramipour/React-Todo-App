import React from "react";
import Card from "../UI/Card";
import HomeImage from "./HomeImage";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <section className={styles.home}>
      <Card className={styles.homeCard}>
        <div className={styles.homeContent}>
          <div>
            <HomeImage />
          </div>
          <div>
            <p>There’s no task here!</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faPlus} size="1x" color="#1B91FB" />
            <Link to="/newtask">Create new task</Link>
          </div>
        </div>
      </Card>
    </section>
  );
};
export default Home;
