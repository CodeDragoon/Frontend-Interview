import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./styles.css";
import LabradorSvg from "../../assets/svgs/labradorSvg";
import data from "../../assets/problems.json";

const useLayout = () => {
  const getGithubLink = () => {
    const path = window.location.pathname;
    const problems = data.problems;
    for (let i = 0; i < problems.length; i++) {
      let item = problems[i];
      if (path.indexOf(item.route) >= 0) {
        return item.github || "";
      }
    }

    return "";
  };
  const handleCheckImplementation = () => {
    const gh = getGithubLink();
    window.open(gh);
  };
  return { handleCheckImplementation };
};
const Layout = () => {
  const { handleCheckImplementation } = useLayout();
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
      <button
        className={"implementation-button"}
        onClick={handleCheckImplementation}
      >
        Check Implementation
      </button>
    </div>
  );
};

export default Layout;
