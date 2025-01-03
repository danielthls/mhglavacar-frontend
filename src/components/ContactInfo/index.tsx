import { InfoContatoDTO } from '../../models/Info-contato';
import './styles.css'

type Props = {
    info: InfoContatoDTO;
}

export default function ContactInfo({ info }: Props) {
    return (
        <div id={info.id.toString()} className='mhg-info-item'>
            <img className='mhg-info-icon' src={info.icone} alt={info.titulo} />
            {info.url ?
                <a href={info.url} target="_blank" rel="noopener noreferrer">
                    <div className='mhg-info-text-container'>
                        <div className='mhg-info-title'>{info.titulo}</div>
                        <div className='mhg-info-text'>{info.info}</div>
                    </div >
                </a > :
                <div className='mhg-info-text-container'>
                    <div className='mhg-info-title'>{info.titulo}</div>
                    <div className='mhg-info-text'>{info.info}</div>
                </div>
            }
        </div>
    )
}