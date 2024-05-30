import { createBrowserRouter } from "react-router-dom";
import React from 'react'
import RootLayouts from "../components/layouts/RootLayouts";
import App from "../App";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayouts />,
      children: [
        {
          path: "/",
          element: <App />,
        },
       
      ],
    },
  ]);
  export default  Router;
  