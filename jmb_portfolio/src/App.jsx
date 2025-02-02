import "./App.css";
import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";

export const router = createBrowserRouter(
  // default "/, "" "
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="" element={<Home />} />
    </>,
  ),
);

export default router;
