import React from "react";
import salaryPic from "../assets/images/money.png";
import calendarPic from "../assets/images/calendar.png";
import phonePic from "../assets/images/phone.png";
import locationPic from "../assets/images/location.png";
import emailPic from "../assets/images/email.png";

const JobSingle = ({ item }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    salary,
    location,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = item;
  return (
    <>
    {/* left side */}
      <div>
        <p className="p">
          <span className="font-semibold text-black">Job Description:</span>
          {job_description}
        </p>
        <p className="p">
          <span className="font-medium text-black">Job Responsibility:</span>
          {job_responsibility}
        </p>
        <p className="font-semibold">Educational Requirements:</p>
        <p className="p">{educational_requirements}</p>
        <p className="font-semibold">Experiences:</p>
        <p className="p">{experiences}</p>
      </div>
      {/* right side */}
      <div className="flex flex-col">
        <div className="bg-slate-100 p-5 shadow-md">
          <h4 className="font-bold mb-3">Job Details</h4>
          <p>
            <img src={salaryPic} alt="salary" className="inline-block mr-1" />
            <span className="font-bold">salary:</span>
            <span className="p">{salary} (per month)</span>
          </p>
          <p>
            <img
              src={calendarPic}
              alt="job title"
              className="inline-block mr-1"
            />
            <span className="font-bold">job title:</span>
            <span className="p">{job_title}</span>
          </p>
          <h4 className="font-bold my-3">Contact Information</h4>
          <p>
            <img
              src={phonePic}
              alt="phone photo"
              className="inline-block mr-1"
            />
            <span className="font-bold">phone:</span>
            <span className="p">{contact_information.phone}</span>
          </p>
          <p>
            <img
              src={emailPic}
              alt="email photo"
              className="inline-block mr-1"
            />
            <span className="font-bold">email:</span>
            <span className="p">{contact_information.email}</span>
          </p>
          <p>
            <img
              src={locationPic}
              alt="location photo"
              className="inline-block mr-1"
            />
            <span className="font-bold">address:</span>
            <span className="p">{contact_information.address}</span>
          </p>
        </div>
        <button className="btn mt-5">apply now</button>
      </div>
    </>
  );
};

export default JobSingle;
