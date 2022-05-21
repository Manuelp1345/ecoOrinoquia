import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";

export const RouterApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </div>
  );
};
