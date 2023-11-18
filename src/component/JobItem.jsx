import React from "react";
import { Link } from "react-router-dom";
import money from "../assets/images/money.png";
import location2 from "../assets/images/location2.png";

const JobItem = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    salary,
    location,
  } = job;
  return (
    <div className="flex flex-col items-start gap-2 py-6 px-12 border-2 border-slate-100 shadow-md">
      <img src={logo} alt="logo" />
      <h4 className="text-xl font-bold text-gray-700">{job_title}</h4>
      <p className="text-slate-600">{company_name}</p>
      <div>
        <button className="btn-outline">{remote_or_onsite}</button>
        <button className="btn-outline ms-2">{job_type}</button>
      </div>
      <div className="flex-col items-start gap-3 py-5 lg:flex-row">
        <p className="p flex">
          <img src={location2} alt="logo" className="w-5" />
          {location}
        </p>
        <p className="p flex">
          <img src={money} alt="logo" className="w-5" />
          Salary:{salary}
        </p>
      </div>
      <Link className="btn">view details</Link>
    </div>
  );
};

export default JobItem;
