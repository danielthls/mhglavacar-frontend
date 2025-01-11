import { useState } from 'react'
import './styles.css'
import { ServiceMinDTO } from '../../../models/servico'
import { ServicesMin } from '../../../temp-repository/temp_services'
import LandingPageServiceCard from '../../LandingPageServiceCard'
import CteButtons from '../CteButtons'

export default function ServiceSection() {

    const [services,] = useState<ServiceMinDTO[]>(ServicesMin)

    return (
        <section id='lp-service-section'>
            <div className='mhg-section-container'>
                <h1 className='mhg-section-title title-center'>NOSSOS SERVIÇOS</h1>
                <div id='service-section-cards'>
                    {
                        services &&
                        services.map(service =>
                            <LandingPageServiceCard key={service.idServico} service={service} />
                        )
                    }
                </div>
                <CteButtons />
            </div>
        </section>

    )
}