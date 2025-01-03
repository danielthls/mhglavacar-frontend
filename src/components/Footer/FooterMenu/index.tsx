import { Link } from "react-router-dom";
import { ItemMenuDTO } from "../../../models/item-menu";

type Props = {
    menu: ItemMenuDTO[];
}

export default function FooterMenu({ menu }: Props) {

    return (
        <ul className="mhg-footer-content">
            {
                menu.map(item =>
                    <Link key={item.id} to={item.linkUrl}>
                        <li>{item.label}</li>
                    </Link>
                )
            }
            <a href="#">
                <li>Voltar ao topo</li>
            </a>
        </ul>
    )
}