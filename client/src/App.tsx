import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Riders from "./pages/Riders/Riders";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/riders" element={<Riders />} />
      </>
    )
  );

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
