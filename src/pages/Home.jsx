import React, { useState } from "react";
import Hero from "../component/Hero";
import Header from "../component/Header";
import { useLoaderData } from "react-router-dom";
import Categories from "../component/Categories";
import JobItem from "../component/JobItem";

const Home = () => {
  const { jobs, categori } = useLoaderData();
  const [jobItems, setJobItems] = useState(jobs.slice(0, 2));
  // see more function
  const seeMoreItem = () => {
    setJobItems(jobs);
  };
  // see less function
  const seeLessItem = () => {
    setJobItems(jobs.slice(0, 2));
  };
  return (
    <>
    {/* hero section */}
      <div className="bg-slate-100">
        <Header/>
        <Hero />
      </div>
      {/* categori section */}
      <div className="container my-14 flex flex-col items-center ">
        <h2 className="h2">Job Category List</h2>
        <p className="p my-4 text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 ">
          {categori.length > 0 &&
            categori.map((item) => (
              <Categories key={item.id} categori={item} />
            ))}
        </div>
      </div>
      {/* job section */}
      <div className="container mt-14 mb-5 flex flex-col items-center ">
        <h2 className="h2">Featured Jobs</h2>
        <p className="p my-4 text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {jobItems.length > 0 &&
            jobItems.map((item) => {
              return <JobItem key={item.id} job={item} />;
            })}
        </div>
        {jobItems.length == 2 ? (
          <button className="btn block my-9" onClick={seeMoreItem}>
            see more
          </button>
        ) : (
          <button className="btn block my-9" onClick={seeLessItem}>
            see less
          </button>
        )}
      </div>
    </>
  );
};

export default Home;
