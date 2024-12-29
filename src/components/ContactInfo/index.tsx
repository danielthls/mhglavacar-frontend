import { ContactInfoDTO } from '../../models/ContactInfo';
import './styles.css'

type Props = {
    info: ContactInfoDTO;
}

export default function ContactInfo({ info }: Props) {
    return (
        <div id={info.id.toString()} className='mhg-info-item'>
            <img className='mhg-info-icon' src={info.icon} alt={info.title} />
            {info.url ?
                <a href={info.url} target="_blank" rel="noopener noreferrer">
                    <div className='mhg-info-text-container'>
                        <div className='mhg-info-title'>{info.title}</div>
                        <div className='mhg-info-text'>{info.info}</div>
                    </div >
                </a > :
                <div className='mhg-info-text-container'>
                    <div className='mhg-info-title'>{info.title}</div>
                    <div className='mhg-info-text'>{info.info}</div>
                </div>
            }
            </div>
        )
}