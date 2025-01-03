import { MarcadorDTO } from '../../../models/marcador';
import './styles.css'

type Props = {
    descricao: string;
    detalhes: MarcadorDTO[];
}

export default function ServiceCardDescricao({ descricao, detalhes }: Props) {

    const paragraphs = descricao.split('.').filter(segment => segment.trim() !== '');

    return (
        <div className='mhg-container mhg-servico-container'>
            <div className='mhg-section-text mhg-servico-descricao' >
                {
                    paragraphs.map((paragraph, index) =>
                        <p key={index}>{paragraph.trim()}.</p>
                    )
                }
            </div>
            <div className='mhg-section-text mhg-servico-detalhes'>
                <ul>
                    {
                        detalhes &&
                        detalhes.map(item =>
                            <li key={item.id}>{item.marcador}</li>
                        )
                    }
                </ul>
            </div>
        </div >
    )
}