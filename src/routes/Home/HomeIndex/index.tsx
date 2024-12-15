import './styles.css'

export default function HomeIndex() {
    return (
        <main>
            <section id="hero-section">
                <div className="mhg-section-container">
                    <div id='hero-text'>
                        <h1 className="mhg-section-title">AQUI SEU CARRO SAI BRILHANDO</h1>
                        <p className='mhg-section-text'>Serviços especializados em limpeza automotiva, garantindo cuidado, excelência e o brilho que seu carro merece.</p>
                    </div>
                    <div id='hero-section-image'>
                        <img id='hero-image' src="https://i.imgur.com/iSdx4zT.jpeg" alt="imagem" />
                    </div>
                </div>
            </section>
        </main>
    )
}