import './styles.css'
import FooterInfo from './FooterInfo'
import { ItemMenuDTO } from '../../models/ItemMenu';
import FooterMenu from './FooterMenu';

type Props = {
    menu: ItemMenuDTO[];
}

export default function Footer({menu}: Props) {

    return (
        <footer className='mhg-footer'>
            <div className='mhg-footer-container'>
                <div className='mhg-footer-top'>
                    <span className='mhg-footer-title'>M.H.G. Estética Automotiva</span> <span className='mhg-footer-tag'>Aqui seu carro sai brilhando</span>
                </div>
                <div className='mhg-footer-sub-container'>
                    <FooterInfo/>
                    <FooterMenu menu={menu}/>
                </div>
                <div className='mhg-footer-bottom'>
                    <p>© 2024 M.H.G. Estética Automotiva. Todos os direitos reservads.</p>
                    <p>Desenvolvido por Daniel Thomaz de Lima e Silva</p>
                </div>
            </div>
        </footer>
    )
}