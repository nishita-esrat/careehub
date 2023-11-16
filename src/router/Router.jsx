import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AppliedJob from "../pages/AppliedJob";
import loader from "../loader/loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
        {
            path:'/',
            element:<Home/>,
            loader:loader
        },
        {
          path:'applied_job',
          element:<AppliedJob/>
        }
    ]
  },
]);

export default router;
