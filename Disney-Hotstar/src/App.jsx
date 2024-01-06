import React from "react";
import { Routes, Route } from "react-router-dom";
import Playlist from "./components/Playlist";
import Details from "./components/Details";
import SimilarContent from "./components/SimilarContent";

const App = () => {
  return (
    <>
      <Routes>  
        <Route path="/" element={<Playlist />} />
        <Route path="/details/:title" element={<Details />} />
        <Route path="/dd" element={<SimilarContent/>} />
      </Routes>
    </>
  );
};

export default App;
