const jobDetails = async ({ params }) => {
  let res = await fetch("./data/jobs.json");
  let jobs = await res.json();
  const singleJob = jobs.find((item) => item.id == params.id);
  return singleJob;
  
};
export default jobDetails;
