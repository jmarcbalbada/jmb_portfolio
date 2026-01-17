import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
