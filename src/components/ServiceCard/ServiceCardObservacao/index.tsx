import './styles.css'

type Props = {
    obs: string;
}

export default function ServiceCardObservacao({ obs }: Props) {
    return (
        <div className='mhg-service-obs'>
            {obs}
        </div>
    )
}