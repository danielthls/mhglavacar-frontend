import { useState } from "react";
import { InfoContatoDTO } from "../../../models/Info-contato";
import { Infos } from "../../../temp-repository/temp_contact_info";
import './styles.css'

export default function FooterInfo() {
    const [infos,] = useState<InfoContatoDTO[]>(Infos)
    const endereco = infos.find(info => info.id == 6);
    const fone = infos.find(info => info.id == 3)
    const email = infos.find(info => info.id == 4)
    const instagram = infos.find(info => info.id == 5)
    const horario_funcionamento1 = infos.find(info => info.id == 1)
    const horario_funcionamento2 = infos.find(info => info.id == 2)

    return (
        <div className='mhg-footer-info-container'>
            <div className='mhg-footer-content'>
                <div className="mhg-footer-content-item">{endereco?.info}</div>
                {fone && fone.url && email && email.url &&
                    <div className="mhg-footer-content-item">
                        <a href={fone?.url} target="_blank" rel="noopener noreferrer">
                            <img className="mhg-footer-icon" src={fone?.icone} alt={fone?.titulo} />
                            {fone?.info}

                        </a> <span> | </span>
                        <a href={email.url} target="_blank" rel="noopener noreferrer">
                            <img className="mhg-footer-icon" src={email?.icone} alt={email?.titulo} />
                            {email?.info}
                        </a>
                    </div>
                }
            </div>
            <div className='mhg-footer-content '>
                <div className='mhg-footer-content block'>
                    <div className="mhg-footer-content-item">
                        {horario_funcionamento1?.titulo}<span> </span>{horario_funcionamento1?.info}
                    </div>
                    <div className="mhg-footer-content-item">
                        {horario_funcionamento2?.titulo}<span> </span>{horario_funcionamento2?.info}
                    </div>
                </div>
                {instagram && instagram.url &&
                    <div className='mhg-footer-content'>
                        <p>Siga-nos</p>
                        <a href={instagram.url} target="_blank" rel="noopener noreferrer">
                            <img className="mhg-footer-large-icon" src={instagram.icone} alt={instagram.titulo} />
                        </a>
                    </div>
                }
            </div>
        </div>
    )
}

/*<div className='mhg-footer-content'>
<div className="mhg-footer-content-item">
<p>Siga-nos: </p>
<a href={instagram?.url} target="_blank" rel="noopener noreferrer">
    <img className="mhg-footer-large-icon" src={instagram?.icon} alt={instagram?.title} />
</a>
</div>
</div>*/