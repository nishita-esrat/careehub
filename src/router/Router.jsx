import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AppliedJob from "../pages/AppliedJob";
import loader from "../loader/loader";
import JobDetails from "../pages/JobDetails";
import jobDetails from "../loader/jobDetailsLoader";

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
          path:'job_details/:id',
          element:<JobDetails/>,
          loader:jobDetails
        },
        {
          path:'applied_job',
          element:<AppliedJob/>
        }
    ]
  },
]);

export default router;
