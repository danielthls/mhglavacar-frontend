import { useState } from 'react'
import GoogleMap from '../../GoogleMap'
import SectionButton from '../../SectionButton'
import './styles.css'
import { ContactInfoDTO } from '../../../models/ContactInfo'
import { Infos } from '../../../temp-repository/temp_contact_info'
import ContactInfo from '../../ContactInfo'

export default function ContactUsSection() {

    const [infos,] = useState<ContactInfoDTO[]>(Infos)

    return (
        <section id='contact-us-section'>
            <h1 className="mhg-section-title">NOSSO CONTATO</h1>
            <div className="mhg-section-container mhg-dual-column">
                
                <div className='mhg-dual-column-left-container'>
                    <div className='mhg-dual-column-text'>
                        {
                            infos &&
                            infos.map(info =>
                                <ContactInfo key={info.id} info={info} />
                            )
                        }
                        <div className='mhg-section-btn-container'>
                            <SectionButton label='Nossos Serviços' linkUrl='/' />
                            <SectionButton label='Agende uma Visita' linkUrl='/' />
                        </div>
                    </div>
                </div>
                <div className='mhg-dual-column-right-container'>
                    <GoogleMap />
                </div>
            </div>
        </section>
    )
}