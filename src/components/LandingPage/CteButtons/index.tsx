import SectionButton from "../../SectionButton";

export default function CteButtons() {
    return (
        <div className='mhg-section-btn-container'>
            <SectionButton label='Nossos Serviços' linkUrl='/servico' />
            <SectionButton label='Agende uma Visita' linkUrl='/' />
        </div>
    )
}