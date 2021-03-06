import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/Home/index"));
const Contact = lazy(() => import("../pages/Contanct"));
const Teams = lazy(() => import("../pages/Teams"));
const Works = lazy(() => import("../pages/Works"));
const router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/works" element={<Works />} />
      <Route path="/teams" element={<Teams />} />
    </Routes>
  );
};

export default router;
