import { ServiceDTO } from "../models/servico";
import { tempServices } from "../temp-repository/temp_services";

export function tempFilterService(text: string): ServiceDTO[] {
    console.log(text);
    return tempServices.filter(s =>
        s.nomeServico
            .toLocaleLowerCase()
            .includes(text.toLocaleLowerCase().trim())
    )
}