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

  // remote or onsite or all job
  const remoteOnsiteAllJob = async (
    applyJobs,
    onsite_or_remote_or_all_title,
    setApplyJob
  ) => {
    onsiteOrRemoteJob(applyJobs, onsite_or_remote_or_all_title, setApplyJob);
  };

  return (
    <>
      <CommonHero>applied job</CommonHero>
      {applyJob.length > 0 ? (
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
                  onClick={() =>
                    remoteOnsiteAllJob(applyJobs, "All", setApplyJob)
                  }
                >
                  all
                </li>
                <li
                  className="py-2 cursor-pointer"
                  onClick={() =>
                    remoteOnsiteAllJob(applyJobs, "Remote", setApplyJob)
                  }
                >
                  remote job
                </li>
                <li
                  className="py-2 cursor-pointer"
                  onClick={() =>
                    remoteOnsiteAllJob(applyJobs, "Onsite", setApplyJob)
                  }
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
      ) : (
        <div className="container h-96 text-center flex justify-center items-center">
          <p className="font-semibold text-lg md:text-3xl">you haven't applied any job</p>
        </div>
      )}
    </>
  );
};

export default AppliedJob;
