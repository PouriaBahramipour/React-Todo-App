export const getTodoData = async () => {
  const response = await fetch(
    "https://todo-app-4c82d-default-rtdb.firebaseio.com/todo.json"
  );
  const data = await response.json();
  return data;
};

export const postTodoData = async (taskInfo) => {
  const response = await fetch(
    "https://todo-app-4c82d-default-rtdb.firebaseio.com/todo.json",
    {
      method: "POST",
      body: JSON.stringify({
        title: taskInfo.title,
        category: taskInfo.category,
      }),
    }
  );
  return response;
};
