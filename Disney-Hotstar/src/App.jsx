import React from "react";
import { Routes, Route } from "react-router-dom";
import Playlist from "./components/Playlist";
import Details from "./components/Details";
import SimilarContent from "./components/SimilarContent";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <Routes>  
        <Route path="/" element={<Login />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/details/:title" element={<Details />} />
        <Route path="/dd" element={<SimilarContent/>} />
      </Routes>
    </>
  );
};

export default App;
