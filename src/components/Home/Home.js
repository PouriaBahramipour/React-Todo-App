import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "../../store";
import EmptyTaskPage from "./EmptyTaskPage";
import Tasks from "../Tasks/Tasks";
import { getTodoData } from "../API/API";
import styles from "./Home.module.scss";
import LoadingPage from "./LoadingPage";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todoActions.setLoading(true));
    const fetchTasks = async () => {
      try {
        const data = await getTodoData();

        const loadedItem = [];

        for (let key in data) {
          loadedItem.push({
            id: key,
            title: data[key].title,
            category: data[key].category,
          });
        }

        dispatch(todoActions.setData(loadedItem));
      } catch (error) {
        dispatch(todoActions.setError(error.message));
      }
      dispatch(todoActions.setLoading(false));
    };
    fetchTasks();
  }, [dispatch]);

  const { data: todoData, isLoading } = useSelector((state) => state.todo);

  const hasItemState = todoData.length > 0;

  return (
    <section className={styles.home}>
      {isLoading && <LoadingPage />}
      {!isLoading && !hasItemState && <EmptyTaskPage />}
      {!isLoading && hasItemState && <Tasks />}
    </section>
  );
};
export default Home;
