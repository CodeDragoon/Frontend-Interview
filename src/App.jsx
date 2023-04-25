import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./common-components/layout/Layout";
import Home from "./pages/home/Home";
import InfiniteScrollUsingObserver from "./pages/InfiniteScrollUsingObserver/InfiniteScrollUsingObserver";
import InfiniteScrollUsingWindowScroll from "./pages/InfiniteScrollUsingWindowScroll/InfiniteScrollUsingWindowScroll";
import LruCache from "./pages/lruCache/LruCache";

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
        </Route>
      </Routes>
    </>
  );
};

export default App;
