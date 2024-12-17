import { Link } from 'react-router-dom';
import './styles.css'

type Props = {
    label: string;
    linkUrl: string;
}

export default function SectionButton({ label, linkUrl }: Props) {
    return (
        <Link to={linkUrl}>
            <button className='mhg-btn-section'>{label}</button>
        </Link>
    )
}