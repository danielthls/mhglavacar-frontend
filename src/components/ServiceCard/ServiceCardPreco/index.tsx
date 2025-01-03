import { useState } from 'react';
import { ServiceDTO } from '../../../models/servico'
import './styles.css'

type Props = {
    servico: ServiceDTO;
}

export default function ServiceCardPreco({ servico }: Props) {

    const [precoVariavel] = useState<boolean>(servico.precoVariavel)
    const A_PARTIR_DE = 'a partir de'

    return (
        <div className='mhg-service-price-card'>
            {
                servico &&
                servico.precos.map(preco =>
                    <div key={preco.id} className="mhg-service-price-item">
                        <span className="mhg-service-price-item-name">{preco.categoria.nomeCategoria}</span>
                        <span className="mhg-service-price-item-variable">{precoVariavel && A_PARTIR_DE}</span>
                        <span className="mhg-service-price-item-preco">R$ {preco.valorPreco.toFixed(2)}</span>
                    </div>
                )

            }
        </div>
    )
}