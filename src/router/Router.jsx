import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AppliedJob from "../pages/AppliedJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'applied_job',
          element:<AppliedJob/>
        }
    ]
  },
]);

export default router;
