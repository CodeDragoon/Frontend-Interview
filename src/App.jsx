import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Layout from './pages/layout/Layout'
import InfiniteScrollUsingObserver from './pages/InfiniteScrollUsingObserver/InfiniteScrollUsingObserver'
import InfiniteScrollUsingWindowScroll from './pages/InfiniteScrollUsingWindowScroll/InfiniteScrollUsingWindowScroll'



const App = () => {
    return <>
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<Home />} />
                <Route path={"infinite-scroll-using-intersection-observer"} element={<InfiniteScrollUsingObserver />} />
                <Route path={"infinite-scroll-using-window-scroll"} element={<InfiniteScrollUsingWindowScroll />} />
                {/* <Route /> */}
            </Route>

        </Routes>
    </>
}

export default App