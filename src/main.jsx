import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage.jsx";
import CabinCottages from "./pages/cabincottages/CabinCottages.jsx";
import EntireHomes from "./pages/entirehomes/EntireHomes.jsx";
import UniqueStays from "./pages/uniquestays/UniqueStays.jsx";
import SignIn from "./pages/userpage/SignIn.jsx";
import { store } from "./app/store.jsx";
import { Provider } from "react-redux";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
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
        path: "signin",
        element: <SignIn />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
