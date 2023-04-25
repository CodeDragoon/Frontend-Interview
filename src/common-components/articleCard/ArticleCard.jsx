import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const ArticleCard = ({ route, label, description }) => {
  return (
    <Link className={"article-link "} to={route}>
      <div className={"article-card-container"}>
        <h2>{label}</h2>
        <div>{description}</div>
      </div>
    </Link>
  );
};

export default ArticleCard;
