import './styles.css'
import CteButtons from '../CteButtons';


export default function HeroSection() {
    return (<section id="hero-section">
        <div className='mhg-section-container mhg-dual-column'>
            <div className='mhg-dual-column-left-container'>
                <div className='mhg-dual-column-text'>
                    <h1 className="mhg-section-title">AQUI SEU CARRO SAI BRILHANDO</h1>
                    <p className='mhg-section-text'>Serviços especializados em limpeza automotiva, garantindo cuidado, excelência e o brilho que seu carro merece.</p>
                    <CteButtons/>
                </div>
            </div>
            <div className='mhg-dual-column-right-container'>
                <span className='faded'><img id='hero-image' src="https://i.imgur.com/iSdx4zT.jpeg" alt="imagem" /></span>
            </div>
        </div>
    </section>

    )
}