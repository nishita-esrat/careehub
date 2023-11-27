// applying job
const applyJob = (id) => {
  // check local storage
  let storedJobItems = {};
  let isStored = localStorage.getItem("storedJobItems");
  if (isStored) {
    storedJobItems = JSON.parse(isStored);
  }
  let singleJob = storedJobItems[id];
  if (!singleJob) {
    storedJobItems[id] = true;
    // set local storage job item
    localStorage.setItem("storedJobItems", JSON.stringify(storedJobItems));
    return "done 😁😍"
  }else{
    return "you have already applied this job😁😍 "
  }
};

// checking onsite or remote job or get all remote and onsite job
const onsiteOrRemoteJob = (
  applyJobs,
  onsite_or_remote_or_all_title,
  setApplyJob
) => {
  // for getting all job data
  if (onsite_or_remote_or_all_title == "All") {
    return setApplyJob(applyJobs);
  }
  // for getting remote or onsite job
  const remoteOrOnsite = applyJobs.filter(
    (item) => item.remote_or_onsite == onsite_or_remote_or_all_title
  );
  return setApplyJob(remoteOrOnsite);
};

export { applyJob, onsiteOrRemoteJob };
