import { useState } from 'react'
import SectionButton from '../../../components/SectionButton'
import './styles.css'
import { ServiceMinDTO } from '../../../models/Service'
import { ServicesMin } from '../../../temp-repository/temp_services'
import ServiceCard from '../../../components/ServiceCard'

export default function HomeIndex() {

    const [services,] = useState<ServiceMinDTO[]>(ServicesMin)

    return (
        <main>
            <section id="hero-section">
                <div className="mhg-section-container">
                    <div id='hero-left-container'>
                        <div id='hero-text'>
                            <h1 className="mhg-section-title">AQUI SEU CARRO SAI BRILHANDO</h1>
                            <p className='mhg-section-text'>Serviços especializados em limpeza automotiva, garantindo cuidado, excelência e o brilho que seu carro merece.</p>
                            <div className='mhg-section-btn-container'>
                                <SectionButton label='Nossos Serviços' linkUrl='/' />
                                <SectionButton label='Agende uma Visita' linkUrl='/' />
                            </div>
                        </div>
                    </div>
                    <div id='hero-right-container'>
                        <span className='faded'><img id='hero-image' src="https://i.imgur.com/iSdx4zT.jpeg" alt="imagem" /></span>
                    </div>
                </div>
            </section>
            <section id='service-section'>
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
            </section>
        </main>
    )
}