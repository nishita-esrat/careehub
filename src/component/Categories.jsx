import React from "react";

const Categories = ({ categori }) => {
  const { id, logo, category_name, availability } = categori;

  return (
    <div className="bg-slate-100 px-8 py-9 flex flex-col items-start gap-2">
      <div className="bg-slate-200 p-3">
        <img src={logo} ali="logo" className="w-8" />
      </div>
      <p className="font-semibold">{category_name}</p>
      <p className="p">{availability}</p>
    </div>
  );
};

export default Categories;
