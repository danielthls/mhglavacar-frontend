import { ContactInfoDTO } from "../models/ContactInfo";
import whatsappIcon from '../assets/whatsapp.png';
import clockIcon from '../assets/clock.png';
import emailIcon from '../assets/email.png';
import instagramIcon from '../assets/instagram.png'
import locationIcon from '../assets/pin.png'

export const Infos: ContactInfoDTO[] = [
    {
        id: 6,
        icon: locationIcon,
        title: 'Endereço',
        info: 'Rua Coronel José Carvalho de Oliveira, 701, Uberaba, Curitiba',
        url: null
    },
    {
        id: 1,
        icon: clockIcon,
        title: 'De segunda a sexta',
        info: 'de 8h às 16h',
        url: null
    },
    {
        id: 2,
        icon: clockIcon,
        title: 'Sábados',
        info: 'de 8h às 15h',
        url: null
    },
    {
        id: 3,
        icon: whatsappIcon,
        title: 'Telefone',
        info: '(41) 9608-4299',
        url: 'https://wa.me/554196084299'
    },
    {
        id: 4,
        icon: emailIcon,
        title: 'E-mail',
        info: 'mhglavacar@hotmail.com',
        url: 'mailto:mhglavacar@hotmail.com'
    },
    {
        id: 5,
        icon: instagramIcon,
        title: 'Instagram',
        info: '@mhgesteticaautomotiva',
        url: 'https://www.instagram.com/mhgesteticaautomotiva?igsh=ejhqa2F2MWRodzgw'
    }
    
]