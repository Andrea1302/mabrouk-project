import React from "react";
import { Routes, Route } from "react-router-dom";

//Pages
import HomePage from "./pages/homepage/HomePage";

//routes
import routes from "./route";

const Routing = () => {
  return (
    <Routes>
      <Route path={routes.HOMEPAGE} element={<HomePage />} />
    </Routes>
  );
};

export default Routing;
