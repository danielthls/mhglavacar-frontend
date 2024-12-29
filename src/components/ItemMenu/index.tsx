import './styles.css'

type Props = {
    label: string;
}

export default function ItemMenu({ label }: Props) {
    return (
        <div>{ label }</div>    
    );
}