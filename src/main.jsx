import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HouseDetail from "./pages/houseDetail/HouseDetail.jsx";
import CabinCottages from "./pages/cabincottages/CabinCottages.jsx";
import EntireHomes from "./pages/entirehomes/EntireHomes.jsx";
import UniqueStays from "./pages/uniquestays/UniqueStays.jsx";
import SignIn from "./pages/userpage/SignIn.jsx";
import { store } from "./app/store.jsx";
import { Provider } from "react-redux";
import MainPage from "./pages/mainpage/MainPage.jsx";
import CheckOut from "./pages/checkout/CheckOut.jsx";
// import {
//   NovuProvider,
//   PopoverNotificationCenter,
//   NotificationBell,
// } from '@novu/notification-center';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "entirehomes",
        element: <EntireHomes />,
      },
      {
        path: "cabin&cottages",
        element: <CabinCottages />,
      },
      {
        path: "uniquestays",
        element: <UniqueStays />,
      },
      {
        path: "uniquestays/:slug",
        element: <HouseDetail />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "check-out/:slug",
        element: <CheckOut />,
        // children: {},
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
