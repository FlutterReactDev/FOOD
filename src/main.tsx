import "react-loading-skeleton/dist/skeleton.css";
import "./index.css";
import "reflect-metadata";

import { router } from "@router";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
