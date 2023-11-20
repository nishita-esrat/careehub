import React, { useState } from "react";
import { CommonHero } from "../component/CommonHero";
import { useLoaderData } from "react-router-dom";
import AppliedJobSingle from "../component/AppliedJobSingle";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { onsiteOrRemoteJob } from "../utilities";

const AppliedJob = () => {
  const applyJobs = useLoaderData();
  const [applyJob, setApplyJob] = useState(applyJobs);
  const [showFilter, setShowFilter] = useState(false);
  //  onsite job
  const onsite = (applyJob, onsite_or_remote_title, setapplyJob) => {
    onsiteOrRemoteJob(applyJob, onsite_or_remote_title, setapplyJob);
  };
  // remote job
  const remote = (applyJob, onsite_or_remote_title, setapplyJob) => {
    onsiteOrRemoteJob(applyJob, onsite_or_remote_title, setapplyJob);
  };

  return (
    <>
      <CommonHero>applied job</CommonHero>
      <div className="container py-16 flex flex-col">
        {/* filter section */}
        <div
          className="mb-5 ms-auto py-3 px-4 border-2 border-slate-200 font-medium relative"
          onClick={() => setShowFilter(!showFilter)}
        >
          filter by <ChevronDownIcon className="inline-block w-6" />
          {/* filter section */}
          {showFilter && (
            <ul className="absolute top-[100%] left-0 p-4 shadow-md z-50 bg-slate-50 w-[100%] p mt-3 grid divide-y-2 divide-slate-300">
              <li
                className="py-2 cursor-pointer"
                onClick={() => remote(applyJob, "Remote", setApplyJob)}
              >
                remote job
              </li>
              <li
                className="py-2 cursor-pointer"
                onClick={() => onsite(applyJob, "Onsite", setApplyJob)}
              >
                onsite job
              </li>
            </ul>
          )}
        </div>
        {/* applied job section */}
        {applyJob.length > 0 &&
          applyJob.map((item) => (
            <AppliedJobSingle appliedJob={item} key={item.id} />
          ))}
      </div>
    </>
  );
};

export default AppliedJob;
