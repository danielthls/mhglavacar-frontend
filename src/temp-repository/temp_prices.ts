import './../models/Price'
import { CategoriesMin } from './temp_categories'
import { PriceByServiceDTO } from './../models/Price'

export const PricesByService: PriceByServiceDTO[] = [
    {
        categoria: CategoriesMin[0],
        valorPreco: 40.0
    },
    {
        categoria: CategoriesMin[1],
        valorPreco: 50.0
    },
    {
        categoria: CategoriesMin[2],
        valorPreco: 60.0
    },
    {
        categoria: CategoriesMin[3],
        valorPreco: 30.0
    }
]