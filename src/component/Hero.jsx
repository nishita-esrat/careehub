import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/images/user.png";

const Hero = () => {
  return (
    <div className="container flex flex-col md:flex-row md:justify-between md:items-center pt-3">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
          One Step Closer To Your
          <span className="text-sky-500 ms-2">Dream Job</span>
        </h1>
        <p className="p">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <Link className="btn w-fit">Get Started</Link>
      </div>
      <div>
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
