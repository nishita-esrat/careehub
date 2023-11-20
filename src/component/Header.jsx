import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container flex justify-between items-center py-9 relative">
      <Link to='/' className="text-2xl font-bold md:text-3xl">CareeHub</Link>
      <div>
        <ul className="hidden md:flex items-center gap-6 ">
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive }) =>
                isActive ? "text-sky-500 font-semibold" : "text-base"
              }
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/applied_job"
              className={({ isActive }) =>
                isActive ? "text-sky-500 font-semibold" : "text-base"
              }
            >
              Applied Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-sky-500 font-semibold" : "text-base"
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Link className="btn hidden md:block">Start Applying</Link>
      </div>
      {/* seen when mobile menu */}
      <Bars3BottomRightIcon
        className="w-9 md:hidden"
        onClick={() => setOpen(true)}
      />
      {/* mobile menu---------------- */}
      {open && (
        <div className="flex flex-col gap-7 absolute top-0 left-1/2 w-[94%] -translate-x-1/2 px-6 py-9 shadow-lg bg-white z-50">
          <XMarkIcon className="w-9 ms-auto" onClick={() => setOpen(false)} />
          <div>
            <ul className="flex flex-col items-start gap-4 ">
              <li>
                <NavLink
                  to="/statistics"
                  className={({ isActive }) =>
                    isActive ? "text-sky-500 font-semibold" : "text-base"
                  }
                >
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/applied_job"
                  className={({ isActive }) =>
                    isActive ? "text-sky-500 font-semibold" : "text-base"
                  }
                >
                  Applied Jobs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "text-sky-500 font-semibold" : "text-base"
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <Link className="btn">Start Applying</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
