import React from "react";
import Hero from "../component/Hero";
import { useLoaderData } from "react-router-dom";
import Categories from "../component/Categories";

const Home = () => {
  const { jobs, categori } = useLoaderData();
  return (
    <>
      <div className="bg-slate-100">
        <Hero />
      </div>
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
      <div className="container my-14 flex flex-col items-center ">
        <h2 className="h2">Featured Jobs</h2>
        <p className="p my-4 text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
    </>
  );
};

export default Home;
