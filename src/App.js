import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";
import "./styles/global.scss";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/newtask", element: <NewTask /> },
  { path: "/tasks", element: <Tasks /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
