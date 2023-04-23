
import React from 'react';
import { Link } from 'react-router-dom'

const problems = [{
    label: "Infinite Scroll using Intersection Observer",
    route: "/infinite-scroll-using-intersection-observer"
}, {
    label: "Infinite Scroll using Window Scroll",
    route: "infinite-scroll-using-window-scroll"
}]

const Home = () => {
    return <div>
        Top Frontend Interview Questions asked these days
        {
            problems.map(item => {
                return <Link to={item.route}>
                    <div>{item.label}</div>
                </Link>
            })
        }
    </div>
}
export default Home