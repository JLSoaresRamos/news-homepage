import { useState } from 'react'

import './header.scss'
import Sidebar from '../Sidebar'

export default function Header() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)}/>
            <header className="header">
                <img src="/news-homepage/public/assets/images/logo.svg" alt="Logo" />
                <nav className='nav'>
                    <a href='#'>Home</a>
                    <a href='#'>New</a>
                    <a href="#">Popular</a>
                    <a href='#'>Trending</a>
                    <a href='#'>Categories</a>
                </nav>
                <img 
                    src="/news-homepage/public/assets/images/icon-menu.svg" 
                    className='menu'
                    onClick={() => setIsOpen(true)}
                    alt="" 
                />
            </header>
        </>
    )
}