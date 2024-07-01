import {createBrowserRouter} from "react-router-dom";
import Add from "../pages/Add.jsx";
import Home from "../pages/Home.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <Add />,
  },
]);

export default router;