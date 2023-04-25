import React from "react";
import Loader from "../../common-components/loader/Loader";
import "./styles.css";
import data from "../../assets/problems.json";

const problems = data.problems;

const Article = React.lazy(() =>
  import("../../common-components/articleCard/ArticleCard")
);

const Home = () => {
  return (
    <div className={"main-section"}>
      <div>
        <h1>Top Frontend Interview Questions asked these days</h1>
        {problems.map((item) => {
          return (
            <React.Suspense fallback={Loader}>
              <Article {...item} />
            </React.Suspense>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
