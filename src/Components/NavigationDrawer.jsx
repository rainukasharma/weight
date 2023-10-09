import priyanka from "../assets/priyanka.jpg";
import React from "react";
import Button from "./Button";
import {
  faLocationDot,
  faTruck,
  faCircleExclamation,
  faArrowRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const NavigationDrawer = () => {
  return (
    <div className="w-1/4 h-full p-6 z-100 sticky">
      <div className="flex flex-row h-1/5 items-center">
        <img
          src={priyanka}
          alt="Priyanka"
          className="w-24 h-24 rounded-full m-3"
        />
        <span>
          <h4>Priyanka Chopra</h4>
          <p>priyankachopra@gmail.com</p>
        </span>
      </div>

      <div className="w-full flex flex-col items-start">
        <Button
          to="/ZoneTracker"
          icon={faLocationDot}
        >
          Zone Tracker
        </Button>

        <Button
          to="/VehicleWeighting"
          icon={faTruck}
        >
          VehicleWeighting
        </Button>

        <Button
          to="/UserTracker"
          icon={faUser}
        >
          User Tracker
        </Button>

        <Button
          to="/Report"
          icon={faCircleExclamation}
        >
          Report
        </Button>

        <Button
          to="/Logout"
          icon={faArrowRightFromBracket}
          className = "text-red-500"
        >
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default NavigationDrawer;
