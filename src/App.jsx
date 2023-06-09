import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./common-components/layout/Layout";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import InfiniteScrollUsingObserver from "./pages/InfiniteScrollUsingObserver/InfiniteScrollUsingObserver";
import InfiniteScrollUsingWindowScroll from "./pages/InfiniteScrollUsingWindowScroll/InfiniteScrollUsingWindowScroll";
import LruCache from "./pages/lruCache/LruCache";
import NestedComments from "./pages/nestedComments/NestedComments";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path={"infinite-scroll-using-intersection-observer"}
            element={<InfiniteScrollUsingObserver />}
          />
          <Route
            path={"infinite-scroll-using-window-scroll"}
            element={<InfiniteScrollUsingWindowScroll />}
          />
          <Route path={"lru-cache"} element={<LruCache />} />
          <Route path="nested-comments" element={<NestedComments />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
