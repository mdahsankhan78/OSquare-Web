// Import React
import React, { useState } from "react";
// Import the Modules JSON
import { Modules } from "../data/Modules";

const Plans = () => {
  // Access the plan objects from Modules
  const hr360plans = Modules.hr360plans;
  const iteamplans = Modules.iteamplans;
  const leadkonnektplans = Modules.leadkonnektplans;
  const easyformsplans = Modules.easyformsplans;
  const ischoolplans = Modules.ischoolplans;
  const ischoolformeplans = Modules.ischoolformeplans;
  const ischoolforuplans = Modules.ischoolforuplans;
  const easyfeeplans = Modules.easyfeeplans;

  // State to manage scale value
  const [scale, setScale] = useState(1);

  const handleScaleChange = (e) => {
    setScale(e.target.value);
  };

  const renderPlans = (plans, title) => (
    <div className="my-10">
      <h1 className="text-3xl font-bold text-center mb-6">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Object.keys(plans).map((key) => {
          const { icon, title, price } = plans[key];
          const scaledPrice = price * scale; // Adjust the price based on scale
          return (
            <div
              key={key}
              className="p-4 border rounded-lg shadow hover:shadow-md text-center"
            >
              <img
                src={icon}
                alt={title}
                className="w-24 h-24 mx-auto mb-4 object-contain"
              />
              <h3 className="text-lg font-semibold">{title}</h3>
              {/* <p className="text-gray-600 mt-2">Price: ${scaledPrice.toFixed(2)}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4">
      {/* User Scale Section */}
      <div className="flex flex-col items-center my-6">
        <h2 className="text-3xl font-bold mb-2">Select Users</h2>
        <div className="w-full max-w-md flex items-center space-x-4">
          <span className="text-gray-600">1x</span>
          <input
            type="range"
            min="1"
            max="10"
            step="1"
            value={scale}
            onChange={handleScaleChange}
            className="w-full accent-blue-500"
          />
          <span className="text-gray-600">10x</span>
        </div>
        <p className="mt-4 text-gray-700">
          Current Scale: <span className="font-bold">{scale}x</span>
        </p>
      </div>

      {/* Plans Sections */}
      {renderPlans(hr360plans, "HR360 Plans")}
      {renderPlans(iteamplans, "iTeam Plans")}
      {renderPlans(leadkonnektplans, "Lead Konnekt Plans")}
      {renderPlans(easyformsplans, "Easy Forms Plans")}
      {renderPlans(ischoolplans, "iSchool Plans")}
      {renderPlans(ischoolformeplans, "iSchool For Me Plans")}
      {renderPlans(ischoolforuplans, "iSchool For U Plans")}
      {renderPlans(easyfeeplans, "Easy Fee Plans")}
    </div>
  );
};

export default Plans;
