import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TouchSlide from "./pages/TouchSlide";
import Main from "./pages/Main/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/1" element={<TouchSlide />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
