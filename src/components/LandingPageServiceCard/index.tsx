import { ServiceMinDTO } from '../../models/servico'
import './styles.css'

type Props = {
    service: ServiceMinDTO;
}

export default function LandingPageServiceCard({ service }: Props) {
    return (
        <div className='mhg-service-card'>
            <div className='mhg-service-card-title'>
                <h2>{service.nomeServico.toUpperCase()}</h2>
            </div>
            <div>
                <img className='mhg-service-card-img' src={service.imgUrl} alt={service.nomeServico} />
            </div>
        </div>
    )
}