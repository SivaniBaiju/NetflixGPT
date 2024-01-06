import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./components/AppLayout";
import Login from "./components/Login";

const AppRoutes = () => {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <AppLayout />,
    },
  ]);
  return <RouterProvider router={appRoutes} />;
};

export default AppRoutes;
