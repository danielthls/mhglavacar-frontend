import { CategoriaMinDTO } from "./categoria";

export type PrecoPorServicoDTO = {
    id: number
    categoria: CategoriaMinDTO;
    valorPreco: number;
}