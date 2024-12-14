import './styles.css';
import logo from '../../assets/logo.png'
import { useState } from 'react';
import { ItemMenuDTO } from '../../models/ItemMenu';
import { TempMenu } from '../../temp-repository/temp_menu';
import ItemMenu from '../ItemMenu';

export default function Header() {

    const [itensMenu, setItensMenu] = useState<ItemMenuDTO[]>(TempMenu)

    return (
        <header className="mhg-header">
            <nav className="mhg-container">
                <img className="mhg-header-logo" src={logo} alt="MHG Lavacar" />
                <div className='mhg-header-container-right'>
                    {
                        itensMenu.map(item => (
                            <ItemMenu key={item.id} label={item.label} linkUrl={item.linkUrl} />
                        ))
                    }
                    <div className='mhg-nav-hamburger'>☰</div>
                </div>
            </nav>
        </header >
    )
}

//<img className='mhg-nav-hamburger' src={menu} alt="Menu" />