import React from "react";
import NavigationDrawer from "../Components/NavigationDrawer";
import ZoneTrackerTable from "../Components/ZoneTrackerTable";
const ZoneTracker = () => {

  return (
    <div className="flex flex-row">
      <NavigationDrawer />
      <div className="bg-[#F0F0F0] w-full h-full">
        <div className="flex flex-row justify-between">
          <h1 className="text-4xl p-7">Zone Tracker</h1>
          <button className="items-end m-8 rounded-lg px-10 py-4 text-white  bg-[#6759FF]">
            + Add Zone
          </button>
        </div>
        <ZoneTrackerTable  />
      </div>
    </div>
  );
};

export default ZoneTracker;
