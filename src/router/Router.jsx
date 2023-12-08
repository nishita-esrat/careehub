import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AppliedJob from "../pages/AppliedJob";
import loader from "../loader/loader";
import JobDetails from "../pages/JobDetails";
import jobDetail from "../loader/jobDetailsLoader";
import getAppliedJob from "../loader/appliedJob";
import Statistics from "../pages/Statistics";
import ErrorPage from "../component/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<ErrorPage/>,
    children:[
        {
            path:'/',
            element:<Home/>,
            loader:loader
        },
        {
          path:'job_details/:id',
          element:<JobDetails/>,
          loader:jobDetail
        },
        {
          path:'applied_job',
          element:<AppliedJob/>,
          loader:getAppliedJob
        },
        {
          path:'statistics',
          element:<Statistics/>,
        }
    ]
  },
]);

export default router;
