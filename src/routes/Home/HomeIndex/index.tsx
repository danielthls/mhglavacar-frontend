import './styles.css'
import HeroSection from '../../../components/LandingPage/HeroSection'
import ServiceSection from '../../../components/LandingPage/ServiceSection'
import ContactUsSection from '../../../components/LandingPage/ContactUsSection'

export default function HomeIndex() {


    return (
        <main>
            <HeroSection/>
            <ServiceSection/>
            <ContactUsSection/>
        </main>
    )
}