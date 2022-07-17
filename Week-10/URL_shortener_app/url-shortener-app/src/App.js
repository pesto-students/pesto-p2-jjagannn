import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import React from "react";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="contact" element={<Contact />}></Route>
          <Route index element={<Home />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
