import React from "react";
import { CommonHero } from "../component/CommonHero";
import { useLoaderData } from "react-router-dom";

const AppliedJob = () => {
  const applyJobs =useLoaderData()
  console.log(applyJobs)
  return (
    <>
      <CommonHero>applied job</CommonHero>
    </>
  );
};

export default AppliedJob;
