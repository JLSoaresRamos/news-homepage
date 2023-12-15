import './sidebar.scss'

import closeIcon from '/assets/images/icon-menu-close.svg';


type Props = {
    onClose: () => void;
    isOpen: boolean;
}

export default function Sidebar({isOpen, onClose} : Props) {
    return(
        <div className={isOpen ? 'layer' : 'hidden'}>
            <nav className="sidebar">
                <header className='sidebar-header'>
                    <img src={closeIcon} onClick={() => onClose()} alt="" />
                </header>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">New</a>
                    </li>
                    <li>
                        <a href="#">Popular</a>
                    </li>
                    <li>
                        <a href="#">Trending</a>
                    </li>
                    <li>
                        <a href="#">Categories</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}