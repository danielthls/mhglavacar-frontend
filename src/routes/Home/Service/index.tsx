import { useState } from 'react'
import './styles.css'
import { ServiceDTO } from '../../../models/servico'
import { Services } from '../../../temp-repository/temp_services'
import ServiceCard from '../../../components/ServiceCard'

export default function Service() {

    const [services,] = useState<ServiceDTO[]>(Services)

    return (
        <main>
            <section id='service-section'>
                <div className='mhg-section-container'>
                    <h1 className='mhg-section-title'>SERVIÇOS</h1>
                    {
                        services &&
                        services.map(service =>
                            <ServiceCard key={service.idServico} service={service} />
                        )
                    }
                </div>
            </section>
        </main>
    )
}