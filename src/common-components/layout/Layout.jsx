import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./styles.css";
import LabradorSvg from "../../assets/svgs/labradorSvg";

const Layout = () => {
  return (
    <div>
      <div className="header">
        <span>
          <Link to={"/"} className={"header-item-left"}>
            <LabradorSvg fill={"#ffffff"} height={30} width={30} />
            <span className="header-item">Frontend Interview</span>
          </Link>
        </span>
        <span>
          <Link to="/about">
            <span className="header-item">About</span>
          </Link>
        </span>
      </div>
      <div className="outlet-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
