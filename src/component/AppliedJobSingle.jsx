import React from "react";
import { Link } from "react-router-dom";
import money from "../assets/images/money.png";
import location2 from "../assets/images/location2.png";

const AppliedJobSingle = ({ appliedJob }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    salary,
    location,
  } = appliedJob;
  return (
    <div className="mt-3 flex flex-col md:flex-row md:gap-2 lg:gap-5 items-center border-2 border-slate-200 p-4 md:p-2 lg:p-4 rounded-md">
      <div className="bg-slate-100 p-20 md:px-4 md:py-20 lg:p-20">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
        <h4 className="text-xl font-bold text-gray-700 mt-2 md:mt-0 text-center md:text-left">
          {job_title}
        </h4>
        <p className="text-slate-600 py-2">{company_name}</p>
        <div>
          <button className="btn-outline">{remote_or_onsite}</button>
          <button className="btn-outline ms-2">{job_type}</button>
        </div>
        <div className="flex-col items-start gap-3 py-5 lg:flex-row">
          <span className="p flex">
            <img src={location2} alt="logo" className="w-5" />
            {location}
          </span>
          <p className="p flex">
            <img src={money} alt="logo" className="w-5" />
            Salary:{salary}
          </p>
        </div>
      </div>
      <div className=" my-2 md:my-0 md:ms-auto">
        <Link to={`/job_details/${id}`} className="btn">
          view details
        </Link>
      </div>
    </div>
  );
};

export default AppliedJobSingle;
