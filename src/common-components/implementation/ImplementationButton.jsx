import React from "react";
import "./styles.css";

import data from "../../assets/problems.json";

const useImplementation = () => {
  const path = window.location.pathname;
  const getGithubLink = () => {
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

const ImplementationButton = () => {
  const { handleCheckImplementation } = useImplementation();
  return (
    <>
      {handleCheckImplementation ? (
        <button
          className={"implementation-button"}
          onClick={handleCheckImplementation}
        >
          Check Implementation
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default ImplementationButton;
