import './styles.css';
import logo from '../../assets/logo.png'
import { useState } from 'react';
import { ItemMenuDTO } from '../../models/item-menu';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import { Link } from 'react-router-dom';

type Props = {
    menu: ItemMenuDTO[];
}

export default function Header({ menu }: Props) {

    const [hamburgerMenuVisible, setHamburgerMenuVisible] = useState<boolean>(false);

    function handleMenuExit() {
        setHamburgerMenuVisible(false);
    }

    function handleMenuOpen() {
        setHamburgerMenuVisible(true);
    }

    return (
        <header className="mhg-header">
            <nav className="mhg-container">
                <Link to='/'>
                    <img className="mhg-header-logo" src={logo} alt="MHG Lavacar" />
                </Link>
                <div className='mhg-header-container-right'>
                    <div className='mhg-desktop-menu'>
                        <DesktopMenu menu={menu} />
                    </div>
                    <div onClick={handleMenuOpen} className='mhg-nav-hamburger'>☰</div>
                </div>
            </nav>
            {
                hamburgerMenuVisible &&
                <MobileMenu
                    menu={menu}
                    onMenuExit={handleMenuExit}
                />
            }
        </header >

    )
}

//<img className='mhg-nav-hamburger' src={menu} alt="Menu" />