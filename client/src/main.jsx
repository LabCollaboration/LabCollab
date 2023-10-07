import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./tailwind.css";
import HomePage from "./pages/Home.jsx";
import ExplorePage from "./pages/Emplore";
import Layout from "./pages/Layout";
// import "tailwindcss/tailwind.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout />
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="/explore" element={<ExplorePage />} />
      {/* <Route path="/anime/:id" element={<ShowAnime />} /> */}
    </Routes>
  </BrowserRouter>
);
