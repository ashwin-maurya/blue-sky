import React from "react";
import ProfileUpdate from "./ProfileUpdate";
import UsernameUpdate from "./UsernameUpdate";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Rightsection() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<ProfileUpdate></ProfileUpdate>} />{" "}
        <Route
          exact
          path="/ProfileUpdate"
          element={<ProfileUpdate></ProfileUpdate>}
        />{" "}
        <Route
          exact
          path="/UsernameUpdate"
          element={<UsernameUpdate></UsernameUpdate>}
        />{" "}
      </Routes>
    </>
  );
}