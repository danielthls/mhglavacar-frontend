import { PriceByServiceDTO } from "./Price";

export type ServiceDTO = {
    idServico: number;
    nomeServico: string;
    descricao: string;
    imgUrl: string;
    precos: PriceByServiceDTO[];
}

export type ServiceMinDTO = {
    idServico: number;
    nomeServico: string;
    imgUrl: string;
}