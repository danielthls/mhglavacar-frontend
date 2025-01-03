import { InfoContatoDTO } from "../models/Info-contato";
import whatsappIcon from '../assets/whatsapp.png';
import clockIcon from '../assets/clock.png';
import emailIcon from '../assets/email.png';
import instagramIcon from '../assets/instagram.png'
import locationIcon from '../assets/pin.png'

export const Infos: InfoContatoDTO[] = [
    {
        id: 6,
        icone: locationIcon,
        titulo: 'Endereço',
        info: 'Rua Coronel José Carvalho de Oliveira, 701, Uberaba, Curitiba',
        url: null
    },
    {
        id: 1,
        icone: clockIcon,
        titulo: 'De segunda a sexta',
        info: 'de 8h às 16h',
        url: null
    },
    {
        id: 2,
        icone: clockIcon,
        titulo: 'Sábados',
        info: 'de 8h às 15h',
        url: null
    },
    {
        id: 3,
        icone: whatsappIcon,
        titulo: 'Telefone',
        info: '(41) 9608-4299',
        url: 'https://wa.me/554196084299'
    },
    {
        id: 4,
        icone: emailIcon,
        titulo: 'E-mail',
        info: 'mhglavacar@hotmail.com',
        url: 'mailto:mhglavacar@hotmail.com'
    },
    {
        id: 5,
        icone: instagramIcon,
        titulo: 'Instagram',
        info: '@mhgesteticaautomotiva',
        url: 'https://www.instagram.com/mhgesteticaautomotiva?igsh=ejhqa2F2MWRodzgw'
    }

]