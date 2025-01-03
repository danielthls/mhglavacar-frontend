import { Link } from 'react-router-dom';
import { ItemMenuDTO } from '../../../models/item-menu';
import './styles.css'
import ItemMenu from '../../ItemMenu';

type Props = {
    menu: ItemMenuDTO[];
}

export default function DesktopMenu({ menu }: Props) {
    return (
        <div className='mhg-desktop-menu'>
            {
                menu.map(item => (
                    <Link to={item.linkUrl} key={item.id}>
                        <div className='mhg-menu-item'>
                            <ItemMenu label={item.label} />
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}