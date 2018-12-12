import { Product } from './product';

export const PRODUCTS: Product[] = [
  { id: 6325, name : 'Ethylene', price : 100, category: 1, currentRate: 2},
  { id: 8252, name : 'Propene', price : 200, category: 1, currentRate: 3},
  { id: 8255, name : 'Isobutylene', price : 300, category: 1, currentRate: 5},
  { id: 6326, name : 'Acetylene', price : 400, category: 2, currentRate: 1},
  { id: 7846, name : '1-Butyne', price : 500, category: 2, currentRate: 6},
  { id: 996, name : 'Phenol', price : 600, category: 2, currentRate: 4},
  { id: 289, name : 'Catechol', price : 700, category: 3, currentRate: 3},
  { id: 5054, name : 'Resorcinol', price : 800, category: 3, currentRate: 6},
  { id: 764, name : 'Hydroquinone', price : 900, category: 3, currentRate: 4},
  { id: 1057, name : 'Pyrogallol', price : 1000, category: 1, currentRate: 5}
];

let products = [
  new Product(6325, 'Ethylene', 100, 1, 2),
  new Product(8252, 'Propene', 200, 1, 3),
  new Product(8255, 'Isobutylene', 300, 1, 5),
  new Product(6326, 'Acetylene', 400, 2, 1),
  new Product(7846, '1-Butyne', 500, 2, 6),
  new Product(996, 'Phenol', 600, 2, 4),
  new Product(289, 'Catechol', 700, 3, 3),
  new Product(5054, 'Resorcinol', 800, 3, 6),
  new Product(764, 'Hydroquinone', 900, 3, 4),
  new Product(1057, 'Pyrogallol', 1000, 1, 5)
]
