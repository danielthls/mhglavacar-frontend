import { Link } from "react-router-dom";
import './styles.css'

type Props = {
    label: string;
    linkUrl: string;
}

export default function ItemMenu({ label, linkUrl }: Props) {
    return (
        <Link to={linkUrl}>
            <div className='mhg-nav-item'>
                {label}
            </div>
        </Link>
    );
}