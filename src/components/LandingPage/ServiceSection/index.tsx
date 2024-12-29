import { useState } from 'react'
import SectionButton from '../../SectionButton'
import './styles.css'
import { ServiceMinDTO } from '../../../models/Service'
import { ServicesMin } from '../../../temp-repository/temp_services'
import ServiceCard from '../../ServiceCard'

export default function ServiceSection() {

    const [services,] = useState<ServiceMinDTO[]>(ServicesMin)

    return (
        <section id='service-section'>
                <div className='mhg-section-container'>
                    <h1 className='mhg-section-title'>NOSSOS SERVIÇOS</h1>
                    <div id='service-section-cards'>
                        {
                            services &&
                            services.map(service =>
                                <ServiceCard key={service.idServico} service={service} />
                            )
                        }
                    </div>
                    <div className='mhg-section-btn-container'>
                        <SectionButton label='Nossos Serviços' linkUrl='/' />
                        <SectionButton label='Agende uma Visita' linkUrl='/' />
                    </div>
                </div>
            </section>

    )
}