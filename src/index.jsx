import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ZoneInformation from './Pages/ZoneInformation';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import VehicleInformation from './Pages/VehicleInformation';
import UserTracker from './Pages/UserTracker';
import Report from './Pages/Report';
import LoginPage from './Pages/LoginPage';
import ZoneTracker from './Pages/ZoneTracker';
import UserInformation from './Pages/UserInformation';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ZoneTracker",
    element: <ZoneTracker />,
  },
  {
    path: "/VehicleWeighting",
    element: <VehicleInformation />,
  },
  {
    path: "/UserTracker",
    element: <UserInformation />,
  },
  {
    path: "/Report",
    element: <Report />,
  },
  {
    path: "/LogOut",
    element: <LoginPage />,
  },
]);

function render() {
  ReactDOM.render( <RouterProvider router={router} />, document.body);
}

render();