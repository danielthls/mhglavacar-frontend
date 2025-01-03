import { ServiceDTO } from '../../models/servico'
import ServiceCardDescricao from './ServiceCardDescricao'
import ServiceCardObservacao from './ServiceCardObservacao'
import ServiceCardPreco from './ServiceCardPreco'
import './styles.css'

type Props = {
    service: ServiceDTO
}

export default function ServiceCard({ service }: Props) {
    return (
        <div className='mhg-service-card'>
            <div className='mhg-service-card-title'>
                <h2>{service.nomeServico.toUpperCase()}</h2>
            </div>
            <div>
                <ServiceCardDescricao descricao={service.descricao} detalhes={service.detalhes} />
            </div>
            <div className='mhg-service-obs-price-container'>

                <div className='mhg-service-item-container obs'>
                    {service.observacao &&

                        <ServiceCardObservacao obs={service.observacao} />
                    }
                </div>

                <div className='mhg-service-item-container preco'>
                    <ServiceCardPreco servico={service} />
                </div>
            </div>
        </div>
    )
}