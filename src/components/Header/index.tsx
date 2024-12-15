import './styles.css';
import logo from '../../assets/logo.png'
import { useState } from 'react';
import { ItemMenuDTO } from '../../models/ItemMenu';
import { TempMenu } from '../../temp-repository/temp_menu';
import ItemMenu from '../ItemMenu';
import MobileMenu from '../MobileMenu';

export default function Header() {

    const [hamburgerMenuVisible, setHamburgerMenuVisible] = useState<boolean>(false);

    const [itensMenu, setItensMenu] = useState<ItemMenuDTO[]>(TempMenu)

    function handleMenuExit() {
        setHamburgerMenuVisible(false);
    }

    function handleMenuOpen() {
        setHamburgerMenuVisible(true);
    }

    return (
        <header className="mhg-header">
            <nav className="mhg-container">
                <img className="mhg-header-logo" src={logo} alt="MHG Lavacar" />
                <div className='mhg-header-container-right'>
                    <div className='mhg-desktop-menu'>
                        {
                            itensMenu.map(item => (
                                <ItemMenu key={item.id} label={item.label} linkUrl={item.linkUrl} />
                            ))
                        }
                    </div>
                    <div onClick={handleMenuOpen} className='mhg-nav-hamburger'>☰</div>
                </div>
            </nav>
            {
                hamburgerMenuVisible &&
                <MobileMenu
                    menu={itensMenu}
                    onMenuExit={handleMenuExit}
                />
            }
        </header >

    )
}

//<img className='mhg-nav-hamburger' src={menu} alt="Menu" />