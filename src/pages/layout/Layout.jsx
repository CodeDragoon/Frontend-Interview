import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import './styles.css'
import LabradorSvg from '../../assets/svgs/labradorSvg';
const Logo = '../../assets/svgs/labrador.svg'


const Layout = () => {
    return <div>
        <div className='header'>
            <span className={"header-item-left"} >
                <Link to={"/"}>
                    <LabradorSvg fill={"#ffffff"} height={30} width={30} />
                </Link>
                <span className='header-item'>Frontend Interview</span>
            </span>
            <span>
                <span className='header-item'>Buy me a Coffee</span>
                <span className='header-item'>About</span>
            </span>
        </div>
        <Outlet />
    </div>
}

export default Layout