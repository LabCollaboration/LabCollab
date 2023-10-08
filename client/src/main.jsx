import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./tailwind.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import "tw-elements-react/dist/css/tw-elements-react.min.css";
import HomePage from "./pages/Home.jsx";
import ExplorePage from "./pages/Emplore";
import Layout from "./pages/Layout";

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
