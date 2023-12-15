import { useState } from 'react'

import './header.scss'
import Sidebar from '../Sidebar'

import logo from '/assets/images/logo.svg'
import menuIcon from '/assets/images/icon-menu.svg'

export default function Header() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)}/>
            <header className="header">
                <img src={logo} alt="Logo" />
                <nav className='nav'>
                    <a href='#'>Home</a>
                    <a href='#'>New</a>
                    <a href="#">Popular</a>
                    <a href='#'>Trending</a>
                    <a href='#'>Categories</a>
                </nav>
                <img 
                    src={menuIcon} 
                    className='menu'
                    onClick={() => setIsOpen(true)}
                    alt="" 
                />
            </header>
        </>
    )
}