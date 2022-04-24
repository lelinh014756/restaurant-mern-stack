import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./Authentication.scss";

const Authentication = () => {
  
  return (
    <div id="acount">
      <div className="row vh-100 px-3 mx-0">
        <div className="col-md-5 col-sm-5 col-lg-3 align-self-center mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Authentication;
