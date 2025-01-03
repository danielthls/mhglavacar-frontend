import { CategoriaMinDTO } from '../models/categoria'
import '../models/servico'
import { ServiceDTO, ServiceMinDTO } from '../models/servico'

const CategoriesMin: CategoriaMinDTO[] = [
    {
        idCategoria: 1,
        nomeCategoria: 'Hatch',
        tipo: 1
    },
    {
        idCategoria: 2,
        nomeCategoria: 'Sedan',
        tipo: 1
    },
    {
        idCategoria: 3,
        nomeCategoria: 'SUV e Caminhões',
        tipo: 1
    },
    {
        idCategoria: 4,
        nomeCategoria: 'Lavagem Simples',
        tipo: 2
    },
    {
        idCategoria: 5,
        nomeCategoria: 'Lavagem Detalhada',
        tipo: 2
    },
    {
        idCategoria: 6,
        nomeCategoria: 'Valor',
        tipo: 2
    },
    {
        idCategoria: 7,
        nomeCategoria: 'Detalhada',
        tipo: 2
    },
    {
        idCategoria: 8,
        nomeCategoria: 'Rotativa',
        tipo: 2
    }
]

export const ServicesMin: ServiceMinDTO[] = [
    {
        idServico: 1,
        nomeServico: "Polimento Técnico",
        imgUrl: "https://i.vgy.me/h9SNsk.png"
    },
    {
        idServico: 2,
        nomeServico: "Lavagem Externa",
        imgUrl: "https://i.vgy.me/Rw39q6.png"
    },
    {
        idServico: 3,
        nomeServico: "Lavagem de Moto",
        imgUrl: "https://i.vgy.me/Vv9rvj.png"
    }
]

export const Services: ServiceDTO[] = [
    {
        idServico: 1,
        nomeServico: "Limpeza Externa",
        descricao: "Consiste em uma limpeza mais básica, " +
            "priorizando a parte externa do veículo, " +
            "não deixando de ter cuidado e atenção " +
            "para entregar um resultado de " +
            "qualidade.",
        imgUrl: '#',
        precos: [
            {
                id: 1,
                categoria: CategoriesMin[0],
                valorPreco: 70.0
            },
            {
                id: 2,
                categoria: CategoriesMin[1],
                valorPreco: 70.0
            },
            {
                id: 3,
                categoria: CategoriesMin[2],
                valorPreco: 100.0
            }
        ],
        detalhes: [
            {
                id: 1,
                marcador: "Pré lavagem"
            },
            {
                id: 2,
                marcador: "Lavagem da pintura com luva de microfibra",
            },
            {
                id: 3,
                marcador: "Lavagem de rodas e caixa de rodas"
            },
            {
                id: 4,
                marcador: "Aplicação de pretinho"
            },
            {
                id: 5,
                marcador: "Limpeza dos tapetes"
            }
        ],
        observacao: '',
        precoVariavel: false
    },
    {
        idServico: 2,
        nomeServico: "Limpeza Completa",
        descricao: "Uma limpeza para aqueles que buscam " +
            "mais do que manter o carro limpo por " +
            "fora, mantendo também um clima " +
            "agradável no ambiente interno."
        ,
        imgUrl: '#',
        precos: [
            {
                id: 4,
                categoria: CategoriesMin[0],
                valorPreco: 90.0
            },
            {
                id: 5,
                categoria: CategoriesMin[1],
                valorPreco: 90.0
            },
            {
                id: 6,
                categoria: CategoriesMin[2],
                valorPreco: 130.0
            }
        ],
        detalhes: [
            {
                id: 6,
                marcador: "Lavagem da pintura com luva de microfibra."
            },
            {
                id: 7,
                marcador: "Lavagem das rodas e caixas de roda."
            },
            {
                id: 8,
                marcador: "Secagem com toalha de microfibra."
            },
            {
                id: 9,
                marcador: "Limpeza dos vidros e enceramento."
            },
            {
                id: 10,
                marcador: "Aspiração interior (bancos e carpete)."
            },
            {
                id: 11,
                marcador: "Limpeza interior com bactericida automotivo (elimina poeira, leves contaminações e germes)."
            },
            {
                id: 12,
                marcador: "Aplicação de pretinho de maior durabilidade."
            }
        ],
        observacao: '',
        precoVariavel: false
    },
    {
        idServico: 3,
        nomeServico: 'Lavagem Simples',
        descricao: 'Manter o carro sempre limpo é a preocupação de boa parte dos motoristas. ' +
            'Uma lavagem bem feita proporciona maior conforto ao dirigir, preserva a ' +
            'pintura, evita o acúmulo de fungos e bactérias e valoriza o veículo.',
        imgUrl: '#',
        precos: [
            {
                id: 7,
                categoria: CategoriesMin[0],
                valorPreco: 40.0
            },
            {
                id: 8,
                categoria: CategoriesMin[1],
                valorPreco: 40.0
            },
            {
                id: 9,
                categoria: CategoriesMin[2],
                valorPreco: 60.0
            }
        ],
        detalhes: [],
        observacao: '',
        precoVariavel: false
    },
    {
        idServico: 4,
        nomeServico: "Limpeza Detalhada",
        descricao: "Essa lavagem é um processo minucioso do " +
            "veículo, com mais atenção aos detalhes " +
            "externos, removendo sujeiras que " +
            "contaminam regiões de difícil acesso, onde " +
            "não conseguimos limpar em uma lavagem comum.",
        imgUrl: '#',
        precos: [
            {
                id: 10,
                categoria: CategoriesMin[0],
                valorPreco: 110.0
            },
            {
                id: 11,
                categoria: CategoriesMin[1],
                valorPreco: 110.0
            },
            {
                id: 12,
                categoria: CategoriesMin[2],
                valorPreco: 160.0
            }
        ],
        detalhes: [
            {
                id: 13,
                marcador: "Lavagem completa."
            },
            {
                id: 14,
                marcador: "Limpeza dos emblemas."
            },
            {
                id: 15,
                marcador: "Limpeza dos retrovisores."
            },
            {
                id: 16,
                marcador: "Limpeza das maçanetas."
            },
            {
                id: 17,
                marcador: "Limpeza das paletas do para-brisa."
            },
            {
                id: 18,
                marcador: "Limpeza dos trilhos dos vidros (canaleta)."
            },
            {
                id: 19,
                marcador: "Limpeza do compartimento de combustível."
            },
            {
                id: 20,
                marcador: "Ponteira do escapamento."
            },
            {
                id: 21,
                marcador: "Remoção das placas para limpeza."
            },
            {
                id: 22,
                marcador: "Remoção de piche na pintura."
            }
        ],
        observacao: 'Recomendado a cada 3 meses.',
        precoVariavel: false
    },
    {
        idServico: 5,
        nomeServico: 'Lavagem de Motos',
        descricao: 'Serviços adicionais:',
        imgUrl: '#',
        precos: [
            {
                id: 13,
                categoria: CategoriesMin[3],
                valorPreco: 35.0
            },
            {
                id: 14,
                categoria: CategoriesMin[4],
                valorPreco: 120.0
            }
        ],
        detalhes: [
            {
                id: 23,
                marcador: "Enceramento"
            },
            {
                id: 24,
                marcador: "Reativador de Plástico"
            },
            {
                id: 25,
                marcador: "Verniz de Motor"
            },
            {
                id: 26,
                marcador: "Polimento"
            }
        ],
        observacao: '',
        precoVariavel: false
    },
    {
        idServico: 6,
        nomeServico: 'Limpeza do Couros',
        descricao: 'Tem como objetivo principal manter o couro limpo, conservado e evitarpossíveis ressecamentos',
        imgUrl: '#',
        precos: [
            {
                id: 14,
                categoria: CategoriesMin[5],
                valorPreco: 180.0
            }
        ],
        detalhes: [
            {
                id: 27,
                marcador: "Limpeza dos bancos de couros."
            },
            {
                id: 28,
                marcador: "Hidratação dos couros."
            }
        ],
        observacao: '',
        precoVariavel: false
    },
    {
        idServico: 7,
        nomeServico: 'Tratamento dos Farois',
        descricao: 'Os faróis são os olhos do carro e também ' +
            'foram feitos para brilhar. Eles são' +
            'responsáveis por iluminar a via em' +
            'períodos noturnos e de chuva intensa,' +
            'estão sujeitos a ficarem opacos pela ação' +
            'dos raios UV, dificultando a visibilidade e' +
            'até podendo causar acidentes.',
        imgUrl: '#',
        precos: [
            {
                id: 14,
                categoria: CategoriesMin[5],
                valorPreco: 110.0
            }
        ],
        detalhes: [
            {
                id: 29,
                marcador: "Limpeza das lentes."
            },
            {
                id: 30,
                marcador: "Isolamento."
            },
            {
                id: 31,
                marcador: "Lixamento e correção."
            },
            {
                id: 32,
                marcador: "Aplicação de proteção."
            }
        ],
        observacao: '',
        precoVariavel: true
    },
    {
        idServico: 8,
        nomeServico: 'Tratamento dos Vidros',
        descricao: 'É de extrema importância principalmente ' +
            'devido à chuva ácida (que deixa os vidros ' +
            'com aspecto fosco) é muito comum que ' +
            'o para-brisa dos carros percam a ' +
            'visibilidade em épocas de chuvas, o que é ' +
            'um tanto perigoso, para minimizar este ' +
            'problema, fazemos a cristalização dos ' +
            'vidros. Esse procedimento remove as ' +
            'manchas de chuva ácida e cria uma ' +
            'camada protetora, que impede o acúmulo ' +
            'de partículas na superfície do vidro além ' +
            'de trazer uma melhor visibilidade em dias ' +
            'chuvosos prevenindo.',
        imgUrl: '#',
        precos: [
            {
                id: 14,
                categoria: CategoriesMin[5],
                valorPreco: 110.0
            }
        ],
        detalhes: [
            {
                id: 33,
                marcador: "Limpeza."
            },
            {
                id: 34,
                marcador: "Descontaminação."
            },
            {
                id: 35,
                marcador: "Remoção de chuva-ácida."
            },
            {
                id: 36,
                marcador: "Aplicação de cristalizador."
            }
        ],
        observacao: 'Não remove riscos dos vidros',
        precoVariavel: true
    },
    {
        idServico: 9,
        nomeServico: 'Tratamento de Motor',
        descricao: 'A limpeza do motor é importante para o ' +
            'bom funcionamento mecânico e elétrico, ' +
            'porque com o tempo impurezas se ' +
            'acumulam no motor, podendo prejudicar a ' +
            'parte elétrica, enferrujar componentes, ' +
            'ressecar mangueiras e até danificar a ' +
            'bateria. Esse cuidado além de prevenir, traz ' +
            'uma melhor visualização de vazamentos e ' +
            'outros problemas.',
        imgUrl: '#',
        precos: [
            {
                id: 15,
                categoria: CategoriesMin[6],
                valorPreco: 60.0
            },
            {
                id: 16,
                categoria: CategoriesMin[7],
                valorPreco: 130.0
            }
        ],
        detalhes: [
            {
                id: 37,
                marcador: "Inspeção."
            },
            {
                id: 38,
                marcador: "Isolamento."
            },
            {
                id: 39,
                marcador: "Limpeza Técnica."
            }
        ],
        observacao: 'Serviço sem garantia, pois mesmo com todos os cuidados, ainda pode apresentar falha.',
        precoVariavel: false
    },
    {

        idServico: 10,
        nomeServico: 'Higienização Interna',
        descricao: 'Para aqueles que buscam estar em um ' +
            'ambiente totalmente limpo e livre de ' +
            'qualquer contaminação. A higienização ' +
            'interna promove uma limpeza completa ' +
            'de todo interior do veículo.',
        imgUrl: '#',
        precos: [
            {
                id: 17,
                categoria: CategoriesMin[0],
                valorPreco: 280.0
            },
            {
                id: 18,
                categoria: CategoriesMin[1],
                valorPreco: 300.0
            },
            {
                id: 19,
                categoria: CategoriesMin[2],
                valorPreco: 380.0
            }
        ],
        detalhes: [
            {
                id: 40,
                marcador: "Descontaminação de todo o interior, incluindo: Teto, painel, forração de portas, bancos, cintos de segurança e porta-malas."
            },
            {
                id: 41,
                marcador: "Condicionamento de plásticos e borrachas."
            },
            {
                id: 42,
                marcador: "Hidratação dos couros (se houver)."
            },
            {
                id: 43,
                marcador: "Limpeza do carpete no lugar."
            }
        ],
        observacao: '',
        precoVariavel: false
    },
    {

        idServico: 11,
        nomeServico: 'Polimento Comercial',
        descricao: 'Uma pintura é formada por camadas, sendo as duas últimas camadas responsáveis pela cor (tinta), ' +
            'trazer brilho e proteção (verniz), porém essa última acaba sofrendo danos com lavagens incorretas ' +
            'que são realizadas sem técnicas, além de sofrer também com ação do próprio tempo por falta ' +
            'de proteção e manutenção. Esses danos acabam diminuindo drasticamente o brilho do carro, micro ' +
            'riscos na pintura e contaminações fazem a luz refletir de maneira desfocada aos nossos olhos, ' +
            'impedindo de vermos um reflexo bonito sobre a superfície do carro, trazendo um aspecto ' +
            'fosco e causando grande desvalorização do veículo.',
        imgUrl: '#',
        precos: [
            {
                id: 17,
                categoria: CategoriesMin[0],
                valorPreco: 230.0
            },
            {
                id: 18,
                categoria: CategoriesMin[1],
                valorPreco: 250.0
            },
            {
                id: 19,
                categoria: CategoriesMin[2],
                valorPreco: 350.0
            }
        ],
        detalhes: [
            {
                id: 42,
                marcador: "Lavagem."
            },
            {
                id: 43,
                marcador: "Descontaminação da pintura."
            },
            {
                id: 44,
                marcador: "Isolamento plásticos e borrachas."
            },
            {
                id: 45,
                marcador: "Correção do verniz."
            },
            {
                id: 46,
                marcador: "Aplicação de proteção (cera)."
            }
        ],
        observacao: '',
        precoVariavel: false
    },
    {

        idServico: 12,
        nomeServico: 'Polimento Técnico',
        descricao: 'A Vitrificação automotiva é um ' +
            'processo em que é aplicado um ' +
            'produto específico sobre a lataria do ' +
            'carro que protege a pintura, da brilho ' +
            'e aumenta a durabilidade do verniz ' +
            'original. Um dos componentes deste ' +
            'produto que tem uma boa resistência ' +
            'é chamado de Sílica, que é utilizada ' +
            'também em vidros.',
        imgUrl: '#',
        precos: [
            {
                id: 20,
                categoria: CategoriesMin[0],
                valorPreco: 900.0
            },
            {
                id: 21,
                categoria: CategoriesMin[1],
                valorPreco: 900.0
            },
            {
                id: 22,
                categoria: CategoriesMin[2],
                valorPreco: 1200.0
            }
        ],
        detalhes: [],
        observacao: '',
        precoVariavel: true
    },
    {

        idServico: 13,
        nomeServico: 'Pacote Bronze',
        descricao: '',
        imgUrl: '#',
        precos: [
            {
                id: 23,
                categoria: CategoriesMin[0],
                valorPreco: 800.0
            },
            {
                id: 24,
                categoria: CategoriesMin[1],
                valorPreco: 850.0
            },
            {
                id: 25,
                categoria: CategoriesMin[2],
                valorPreco: 1100.0
            }
        ],
        detalhes: [
            {
                id: 47,
                marcador: "Lavagem Detalhada."
            },
            {
                id: 48,
                marcador: "Polimento."
            },
            {
                id: 49,
                marcador: "Higienização Interna."
            },
            {
                id: 50,
                marcador: "Revitalização dos plásticos."
            }
        ],
        observacao: '',
        precoVariavel: false
    },
    {
        idServico: 14,
        nomeServico: 'Pacote Ouro',
        descricao: '',
        imgUrl: '#',
        precos: [
            {
                id: 23,
                categoria: CategoriesMin[0],
                valorPreco: 1000.0
            },
            {
                id: 24,
                categoria: CategoriesMin[1],
                valorPreco: 1150.0
            },
            {
                id: 25,
                categoria: CategoriesMin[2],
                valorPreco: 1550.0
            }
        ],
        detalhes: [
            {
                id: 51,
                marcador: "Lavagem Detalhada."
            },
            {
                id: 52,
                marcador: "Polimento."
            },
            {
                id: 53,
                marcador: "Higienização Interna."
            },
            {
                id: 54,
                marcador: "Revitalização dos plásticos."
            },
            {
                id: 55,
                marcador: "Hidratação dos couros."
            },
            {
                id: 56,
                marcador: "Limpeza do motor."
            },
            {
                id: 57,
                marcador: "Condicionador de pneus."
            }
        ],
        observacao: '',
        precoVariavel: false
    },
    {
        idServico: 15,
        nomeServico: 'Remoção de Película',
        descricao: '',
        imgUrl: '#',
        precos: [
            {
                id: 23,
                categoria: CategoriesMin[5],
                valorPreco: 110.0
            }
        ],
        detalhes: [],
        observacao: '',
        precoVariavel: true
    }
]