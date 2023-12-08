const loader = async () => {
  let res1 = await fetch("data/jobs.json");
  let jobs = await res1.json();
  let res2 = await fetch("data/categories.json");
  let categori = await res2.json();
  return { jobs, categori };
};

export default loader;
