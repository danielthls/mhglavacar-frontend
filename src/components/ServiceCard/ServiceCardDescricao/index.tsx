import { ServiceDTO } from '../../../models/servico';
import './styles.css'

type Props = {
    servico: ServiceDTO
}

export default function ServiceCardDescricao({ servico }: Props) {

    const paragraphs = servico.descricao.split('.').filter(segment => segment.trim() !== '');

    return (
        <div className='mhg-container mhg-servico-container'>
            <div className='mhg-section-text mhg-servico-descricao' >
                {
                    paragraphs.map((paragraph, index) =>
                        <p key={index}>{paragraph.trim()}{paragraph.slice(-1) != ':' ? '.' : ''}</p>
                    )
                }
                <img src={servico.imgUrl} alt="" />
            </div>
            <div className='mhg-section-text mhg-servico-detalhes'>
                <ul>
                    {
                        servico.detalhes &&
                        servico.detalhes.map(item =>
                            <li key={item.id}>{item.marcador}</li>
                        )
                    }
                </ul>
            </div>
        </div >
    )
}