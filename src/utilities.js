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
  }
};

// checking onsite or remote job
const onsiteOrRemoteJob = (applyJob, onsite_or_remote_title, setApplyJob) => {
  const remoteOrOnsite = applyJob.filter(
    (item) => item.remote_or_onsite == onsite_or_remote_title
  );
  return setApplyJob(remoteOrOnsite);
  
};

export { applyJob, onsiteOrRemoteJob };
