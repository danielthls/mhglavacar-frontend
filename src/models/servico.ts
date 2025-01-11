import { PrecoPorServicoDTO } from "./preco";
import { MarcadorDTO } from './marcador'

export type ServiceDTO = {
    idServico: number;
    nomeServico: string;
    descricao: string;
    imgUrl: string;
    precos: PrecoPorServicoDTO[];
    detalheLabel: string;
    detalhes: MarcadorDTO[];
    observacao: string;
    precoVariavel: boolean;
}

export type ServiceMinDTO = {
    idServico: number;
    nomeServico: string;
    imgUrl: string;
}