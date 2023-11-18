import React from "react";
import social_icon from "../assets/images/social.png";

const Footer = () => {
  return (
    <div className=" bg-slate-900 py-7 text-white">
      <div className="container">
        <div className="grid grid-cols-1 justify-between md:grid-cols-2 lg:grid-cols-5 gap-2 ">
          <div>
            <h4 className="text-xl font-semibold">CareerHub</h4>
            <p className="p py-4">
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <img src={social_icon} alt="social icon" />
          </div>
          <div>
            <h5>Company</h5>
            <ul className="p py-4">
              <li>about</li>
              <li>work</li>
              <li>latest news</li>
              <li>carees</li>
            </ul>
          </div>
          <div>
            <h5>product</h5>
            <ul className="p py-4">
              <li>Prototype</li>
              <li>Plans & Pricing</li>
              <li>Customers</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div>
            <h5>support</h5>
            <ul className="p py-4">
              <li>Help Desk</li>
              <li>Sales</li>
              <li>Become a Partner</li>
              <li>Developers</li>
            </ul>
          </div>
          <div>
            <h5>contact</h5>
            <ul className="p py-4">
              <li>524 Broadway , NYC</li>
              <li>+1 777 - 978 - 5570</li>
            </ul>
          </div>
        </div>
        <hr className="w-[100%] h-[.000001px] bg-gray-100 my-7"></hr>
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <span className="p">@2023 CareerHub. All Rights Reserved</span>
          <span className="p">Powered by CareerHub</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
