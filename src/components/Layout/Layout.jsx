import React, { Component } from "react";
import Header from "../Header/Header";
import Body from "../Body/Body";
import ReactTooltip from "react-tooltip";

const Layout = () => {
  return (
    <div>
      <Header />
      <Body />
      <ReactTooltip html={true} />
    </div>
  );
};

export default Layout;
