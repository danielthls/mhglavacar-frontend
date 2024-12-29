import { ContactInfoDTO } from '../../models/ContactInfo';
import './styles.css'

type Props = {
    info: ContactInfoDTO;
}

export default function ContactInfo({ info }: Props) {
    return (
        <div className='mhg-info-item'>
            <img className='mhg-info-icon' src={info.icon} alt={info.title} />
            <a href={info.url}><p className='mhg-info-text'><span className='mhg-info-title'>{info.title}</span>: {info.info}</p></a>
        </div>
    )
}