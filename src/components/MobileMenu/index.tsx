import { ItemMenuDTO } from '../../models/ItemMenu'
import ItemMenu from '../ItemMenu'
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
                    <div className='mhg-hamburger-item-container'>
                        <ItemMenu key={item.id} label={item.label} linkUrl={item.linkUrl} />
                    </div>
                ))}
            </div>
        </div>
    )
}