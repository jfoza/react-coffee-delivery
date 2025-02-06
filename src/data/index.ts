import { v4 as uuid4 } from 'uuid'

export interface ICoffee {
  id: string
  name: string
  description: string
  value: number
  selectQuantity: number
  image: string
  tags?: string[]
}

export const coffees: ICoffee[] = [
  // 1
  {
    id: uuid4(),
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: 9.9,
    selectQuantity: 0,
    image: 'expresso-tradicional.svg',
    tags: ['TRADICIONAL'],
  },
  {
    id: uuid4(),
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    value: 9.9,
    selectQuantity: 0,
    image: 'expresso-americano.svg',
    tags: ['TRADICIONAL'],
  },
  {
    id: uuid4(),
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    value: 9.9,
    selectQuantity: 0,
    image: 'expresso-cremoso.svg',
    tags: ['TRADICIONAL'],
  },
  {
    id: uuid4(),
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    value: 9.9,
    selectQuantity: 0,
    image: 'expresso-gelado.svg',
    tags: ['TRADICIONAL', 'GELADO'],
  },

  // 2
  {
    id: uuid4(),
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: 9.9,
    selectQuantity: 0,
    image: 'cafe-com-leite.svg',
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: uuid4(),
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    value: 9.9,
    selectQuantity: 0,
    image: 'latte.svg',
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: uuid4(),
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    value: 9.9,
    selectQuantity: 0,
    image: 'capuccino.svg',
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: uuid4(),
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    value: 9.9,
    selectQuantity: 0,
    image: 'macchiato.svg',
    tags: ['TRADICIONAL', 'COM LEITE'],
  },

  // 3
  {
    id: uuid4(),
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    value: 9.9,
    selectQuantity: 0,
    image: 'mocaccino.svg',
    tags: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: uuid4(),
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    value: 9.9,
    selectQuantity: 0,
    image: 'chocolate-quente.svg',
    tags: ['ESPECIAL', 'COM LEITE'],
  },
  {
    id: uuid4(),
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    value: 9.9,
    selectQuantity: 0,
    image: 'cubano.svg',
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
  },
  {
    id: uuid4(),
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    value: 9.9,
    selectQuantity: 0,
    image: 'havaiano.svg',
    tags: ['ESPECIAL'],
  },

  // 4
  {
    id: uuid4(),
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    value: 9.9,
    selectQuantity: 0,
    image: 'arabe.svg',
    tags: ['ESPECIAL'],
  },
  {
    id: uuid4(),
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    value: 9.9,
    selectQuantity: 0,
    image: 'irlandes.svg',
    tags: ['ESPECIAL', 'ALCOÓLICO'],
  },
]
