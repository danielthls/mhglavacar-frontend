import './styles.css'

export default function SobreNos() {
    return (
        <main>
            <section id='about-us-section'>
                <h1 className='mhg-section-title'>SOBRE NÓS</h1>
                <div className='mhg-dual-column-text'>
                    <div className='mhg-section-container mhg-section-text yellow'>
                        <p>Há mais de 25 anos, nossa empresa familiar nasceu de um sonho: oferecer serviços de qualidade com cuidado e eficiência. Desde o início, acompanhamos o desenvolvimento do bairro, construindo laços com a comunidade e conquistando clientes fiéis.</p>
                        <p>O fundador, presente em cada etapa, trata pessoalmente cada veículo com dedicação, entregando resultados impecáveis. Mantemos viva nossa essência original, evoluindo junto com a região, mas sempre guiados pelo compromisso de fazer cada carro brilhar com excelência.</p>
                    </div>
                </div>

                <h1 className='mhg-section-title'>POR QUE CONFIAR EM NÓS</h1>
                <div className='mhg-section-container mhg-dual-column'>
                    <div className='mhg-dual-column-left-container'>
                        <div className='mhg-dual-column-text mhg-section-text yellow w100'>
                            <p>Com décadas de experiência no mercado, oferecemos serviços de lavagem automotiva que unem qualidade incomparável e atenção aos detalhes.
                                Nossa equipe é altamente treinada para cuidar de cada veículo com técnicas modernas e produtos de alto padrão.
                                Priorizamos a satisfação do cliente, entregando resultados excepcionais e preservando a integridade do seu carro. </p>
                            <p>Escolha quem entende de excelência e valoriza seu investimento. </p>
                        </div>
                    </div>
                    <div className='mhg-dual-column-right-container'>
                        <span className='faded'><img id='hero-image' src="https://i.vgy.me/SFv9YX.jpg" alt="imagem" /></span>
                    </div>
                </div>
            </section>
        </main>
    )
}

//