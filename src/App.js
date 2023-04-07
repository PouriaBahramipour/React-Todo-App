import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewTask from "./components/NewTask/NewTask";
import "./styles/global.scss";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/newtask", element: <NewTask /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
