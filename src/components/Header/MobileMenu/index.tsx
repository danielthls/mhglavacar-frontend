import { Link } from 'react-router-dom';
import { ItemMenuDTO } from '../../../models/item-menu'
import ItemMenu from '../../ItemMenu'
import './styles.css'

type Props = {
    menu: ItemMenuDTO[];
    onMenuExit: Function;
}

export default function MobileMenu({ menu, onMenuExit }: Props) {
    return (
        <div onClick={() => onMenuExit()} className='mhg-dialog-background'>
            <div className='mhg-hamburger-menu-box'>
                {menu.map(item => (
                    <Link to={item.linkUrl}>
                        <div className='mhg-hamburger-item-container'>
                            <div className='mhg-menu-item'>
                                <ItemMenu key={item.id} label={item.label} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}