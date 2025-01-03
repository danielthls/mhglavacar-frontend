import { useState } from 'react'
import GoogleMap from '../../GoogleMap'
import SectionButton from '../../SectionButton'
import './styles.css'
import { InfoContatoDTO } from '../../../models/Info-contato'
import { Infos } from '../../../temp-repository/temp_contact_info'
import ContactInfo from '../../ContactInfo'
import CteButtons from '../CteButtons'

export default function ContactUsSection() {

    const [infos,] = useState<InfoContatoDTO[]>(Infos)

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
                        <CteButtons />
                    </div>
                </div>
                <div className='mhg-dual-column-right-container'>
                    <GoogleMap />
                </div>
            </div>
        </section>
    )
}