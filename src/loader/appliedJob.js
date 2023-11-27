// get applied job
const getAppliedJob = async () => {
  // first get data
  const res = await fetch("./data/jobs.json");
  const jobsItems = await res.json();
  // check local storage
  let storedJobItems = {};
  let applyJobs = [];
  let isStored = localStorage.getItem("storedJobItems");
  if (isStored) {
    storedJobItems = JSON.parse(isStored);
    for (const id in storedJobItems) {
      let item = jobsItems.find((item) => item.id == id);
      applyJobs.push(item);
    }
  }
  return applyJobs;
};

export default getAppliedJob;
