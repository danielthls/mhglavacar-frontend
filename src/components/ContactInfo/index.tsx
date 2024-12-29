import { ContactInfoDTO } from '../../models/ContactInfo';
import './styles.css'

type Props = {
    info: ContactInfoDTO;
}

export default function ContactInfo({ info }: Props) {
    return (
        <div className='mhg-info-item'>
            <img className='mhg-info-icon' src={info.icon} alt={info.title} />
            <a href={info.url}><div className='mhg-info-text-container'>
                <div className='mhg-info-title'>{info.title}</div>
                <div className='mhg-info-text'>{info.info}</div>
            </div ></a >
        </div >
    )
}