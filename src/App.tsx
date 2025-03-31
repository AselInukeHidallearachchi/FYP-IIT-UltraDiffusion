import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Denoise from "./pages/Denoise";
import Filters from "./pages/Filters";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="denoise" element={<Denoise />} />
          <Route path="filters" element={<Filters />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
